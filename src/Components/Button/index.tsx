import React  from "react";
import {Text, StyleSheet, TouchableOpacity } from 'react-native';
import Styled from 'styled-components/native';

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
  }
});



interface Props {
  buttonName: 'kor' | 'eng';
  onPress?: () => void;
}


const Button = ({buttonName, onPress} : Props) => {

  return(
    <Container onPress={onPress}>
      <Text style={styles.buttonStyle}>{buttonName === 'kor' ? '한국어' : 'ENG'}</Text>
    </Container>
  ) 
}

export default Button;