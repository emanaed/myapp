import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from   '../../assets/language/i18n';
const ChangeLanguage = () => {
  const {t} = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
        {t('hello')}{' '}
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
        {t('this line is translated')}
      </Text>
      <Pressable
        onPress={() => changeLanguage('en')}
        style={{
          backgroundColor: currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
          padding: 20,
        }}>
        <Text>Select English</Text>
      </Pressable>
      <Pressable
        onPress={() => changeLanguage('ar')}
        style={{
          backgroundColor: currentLanguage === 'ar' ? '#33A850' : '#d3d3d3',
          padding: 20,
        }}>
        <Text>Select ar</Text>
      </Pressable>
    </View>
  );
};

export default ChangeLanguage;
