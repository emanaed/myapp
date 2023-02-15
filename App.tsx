import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SP_KEY} from '@env';

import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
//////// screens
import PaymentScreen from './src/screens/PaymentScreen';
import Login from './src/screens/login';
import MapArea from './src/screens/map';
import ChangeLanguage from './src/settings/language'
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.contanier}>
        <SafeAreaView style={{flex: 1}}>
          <StripeProvider
            publishableKey={SP_KEY}
            merchantIdentifier="merchant.identifier" // required for Apple Pay
            urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
          >
            <Tab.Navigator>
              <Tab.Screen name="Login" component={Login} />
              <Tab.Screen name="PaymentScreen" component={PaymentScreen} />
              <Tab.Screen name="map" component={MapArea} />
              <Tab.Screen name="profile" component={ChangeLanguage} />
              <Tab.Screen name="profile" component={ChangeLanguage} />
            </Tab.Navigator>

        
          </StripeProvider>
        </SafeAreaView>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
});

export default App;
