import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { roleStyles } from '@/styles/roleStyles';
import CustomText from '../components/shared/CustomText';
import { useRouter } from 'expo-router'; 

const Role = () => {
  const router = useRouter(); 

  // Define handler functions
  const handleCustomerPress = () => {
    router.push("/customer/auth");
  };

  const handleCaptainPress = () => {
    router.push("/captain/auth");
  };

  return (
    <View style={roleStyles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/images/ecoride_logo2.png')} 
        style={roleStyles.logo}
      />

      {/* Title */}
      <CustomText fontFamily="Bold" variant="h6">
        Choose, who you want to be:
      </CustomText>
        
      {/* Customer Card */}
      <TouchableOpacity style={roleStyles.card} onPress={handleCustomerPress}>
         <Image 
           source={require('../assets/images/customer1.png')} 
           style={{ width: 300, height: 120 }} 
         />
        <View style={roleStyles.cardContent}>
            <CustomText style={roleStyles.title}>Customer</CustomText>
            <CustomText style={roleStyles.description}>Do you want to have a ride...</CustomText>
        </View>
      </TouchableOpacity>

      {/* Captain Card */}
      <TouchableOpacity style={roleStyles.card} onPress={handleCaptainPress}>
        <Image 
          source={require('../assets/images/captain1.png')} 
          style={{ width: 300, height: 120 }} 
        />
        <View style={roleStyles.cardContent}>
            <CustomText style={roleStyles.title}>Captain</CustomText>
            <CustomText style={roleStyles.description}>Do you want to provide a ride...</CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Role;
