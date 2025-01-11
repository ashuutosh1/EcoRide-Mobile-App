import React from 'react';
import { View, Text, Image } from 'react-native';
import { commonStyles } from '@/styles/commonStyles';
import { splashStyles } from '@/styles/splashStyles';

const Main = () => {
  return (
    <View style={commonStyles.container}>
      <Image 
        source={require('../assets/images/ecoride_logo2.png')} 
        style={splashStyles.img} 
      />
    </View>
  );
};

export default Main;
