import React,{useContext}   from "react";
import {Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import Styled from 'styled-components/native';
import {LocalizationContent}  from "../../Components/LocalizationContent";
const Container = Styled.TouchableOpacity`
  justifyContent: center
`;

const styles = StyleSheet.create({
  buttonStyle:{
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:5,
    width: 55,
    height: 23,
    lineHeight:23,
    textAlign:'center',
    fontSize:10,
    marginRight:5
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
});



interface Props {
  contentName: 'ball';
  onPress?: () => void;
}


const Button = ({contentName, onPress} : Props) => {
  const {translations} = useContext(LocalizationContent);

  return(
    <Container onPress={onPress}>
       <View style={styles.contentText} >
        <Image source={require("../../images/icon1.png")} style={styles.icon} />
        <Text >{translations.main_title1}</Text>
      </View>
    </Container>
  ) 
}

export default Button;