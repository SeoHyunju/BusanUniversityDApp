import React, { createContext, useState, useEffect } from 'react';
import translations,{DEFAULT_LANGUAGE} from '~/../translations';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';

const APP_LANGUAGE = 'appLanguage';

const LocalizationContent = createContext({
  translations,
  setAppLanguage: (setLanguage:string):void => {},
  appLanguage:DEFAULT_LANGUAGE,
  initializeAppLanguage:()=>{}
});

interface Props {
  children: JSX.Element | Array<JSX.Element>,
  initlang:string
}


const LocalizationProvider = ({children, initlang}:Props) => {
     
    const changlang = initlang
    const [appLanguage, setAppLanguage] = useState<string>(DEFAULT_LANGUAGE);
    

    const setLanguage = (changlang:string):void => {      

      translations.setLanguage(changlang);
      setAppLanguage(changlang);
      AsyncStorage.setItem(APP_LANGUAGE, JSON.stringify(changlang));      
    };

    console.log(setLanguage);
    console.log("changlang : "+changlang)

    const initializeAppLanguage = async () => {
      const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);
      if (!currentLanguage) {
        let localeCode = DEFAULT_LANGUAGE;
        const supportedLocaleCodes = translations.getAvailableLanguages();
        const phoneLocaleCodes = RNLocalize.getLocales().map(
          locale => locale.languageCode,
        );
        phoneLocaleCodes.some(code => {
          if (supportedLocaleCodes.includes(code)) {
            localeCode = code;
            return true;
          }
        });
        setLanguage(localeCode);
      } else {
        setLanguage(currentLanguage);
      }
    };
   

    return(
      <LocalizationContent.Provider
        value={{
          translations,
          setAppLanguage,
          appLanguage,
          initializeAppLanguage
        }}
      >
       {children}
      </LocalizationContent.Provider>
    );
};

export {LocalizationProvider, LocalizationContent} ;