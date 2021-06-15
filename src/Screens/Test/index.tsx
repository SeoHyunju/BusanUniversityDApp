import React, {useState} from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import Button from '../../Components/Button';
import MainContent from '../../Components/Content';
import {LocalizationProvider} from '../../Components/LocalizationContent';

const styles = StyleSheet.create({
  bgImage: {width: '100%', height: '100%'},  
  header: {flex: 0.2,  flexDirection:'row', alignSelf:'flex-end'},
  title:{flex: 0.5,padding:30},
  logoTitle:{width: '100%', height: '100%',resizeMode:'contain'},
  content:{flex:2},
});

const Test = () => {
  const [lang, setLang] = useState('kor');

  return(
    <ImageBackground source={require("../../images/main_bg.png")} style={styles.bgImage} >
      <View style={styles.header}>
        <Button buttonName="kor" onPress={()=>setLang('kor')}></Button>
        <Button buttonName="eng" onPress={()=>setLang('eng')}></Button>
      </View>
      <View style={styles.title}><Image source={require("../../images/main_logo.png")} style={styles.logoTitle} /></View>
      <View style={styles.content}>
        <LocalizationProvider initlang={lang}>
          <MainContent></MainContent>
        </LocalizationProvider>
      </View>
    </ImageBackground>
  )

  
}

export default Test;