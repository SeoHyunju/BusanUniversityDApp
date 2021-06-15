import React,{useContext}  from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import {LocalizationContent}  from "../../Components/LocalizationContent";

const styles = StyleSheet.create({
   contenttLine:{ 
    flexDirection:'row',
    
   },
   contentText:{
     backgroundColor:'#ffffff',
     borderRadius:10,
     flex:0.5,
     textAlign:'center',
     marginRight:10,
     marginLeft:10,
     marginBottom:10,
     height: 190,
     justifyContent:'center',
     alignItems:'center'
   },
   icon:{
     width: 80,
     height: 80,
     resizeMode:'contain'
   },
   textStyle:{
    fontWeight:'bold'
   }
});

const MainContent = () => {

  const {translations, appLanguage} = useContext(LocalizationContent);


  return(
    <View>
      <View style={styles.contenttLine}>
        <View style={styles.contentText}>
          <Image source={require("../../images/icon1.png")} style={styles.icon} />
           <Text >{translations.main_title1}</Text>
        </View>
        <View style={styles.contentText}>
          <Image source={require("../../images/icon3.png")} style={styles.icon} />
           <Text>{translations.main_title2}</Text>
        </View>
      </View>

      <View style={styles.contenttLine}>
        <View style={styles.contentText}>
          <Image source={require("../../images/icon2.png")} style={styles.icon} />
           <Text>{translations.main_title3}</Text>
        </View>
        <View style={styles.contentText}>
          <Image source={require("../../images/icon4.png")} style={styles.icon} />
           <Text>{translations.main_title4}</Text>
        </View>
        <View style={styles.contentText}>
          <Image source={require("../../images/icon5.png")} style={styles.icon} />
           <Text>{translations.main_title5}</Text>
        </View>
      </View>    
    </View>
  ) 
}

export default MainContent;