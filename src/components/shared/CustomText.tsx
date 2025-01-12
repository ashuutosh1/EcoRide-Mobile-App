import { View, Text, StyleSheet } from 'react-native'
import React,{FC} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RFValue } from 'react-native-responsive-fontsize';

const fontSizes={
    h1: 24, h2: 22, h3: 20, h4:18, h5:16, h6:14, h7:10, h8:9,
};

const CustomText:FC<CustomTextProps> = ({
    variant='h6',
    style,
    fontFamily='Regular',
    fontSize,
    numberOfLines,
    children

}) => {
  return (
    <Text 
         style={[
        styles.text,
        {fontSize:RFValue(fontSize?fontSize:fontSizes[variant]),fontFamily:`NotoSans-${fontFamily}`},
        style,   
    ]}
      numberOfLines={numberOfLines?numberOfLines:undefined}
    
    
    >
        {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    text:{
        color:Colors.text,
        textAlign: 'left'
    }
})

export default CustomText