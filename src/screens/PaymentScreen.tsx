import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {
  CardField,
  createToken,
  confirmPayment,
} from '@stripe/stripe-react-native';
import ButtonCom from '../component/ButtonCom';
import createPaymentIntent from '../apis/stripeApi';

const PaymentScreen = () => {
  const [cardInfo, setCardInfo] = useState(null);
  const fetchCardDetail = cardDetail => {
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else setCardInfo(null);
  };
  const onPay = async () => {
    console.log('card info---------->', cardInfo);
   
    let apiData = {
      amount: 800,
      currency: "eur",
    };
    try {
      const res = await createPaymentIntent(apiData);
      console.log('payment sucess ===================>', JSON.stringify(res));
      if (res?.data?.paymentIntent) {
        let confirmPaymentData = await confirmPayment(
          res?.data?.paymentIntent,
          {paymentMethodType: 'Card'},
        );
        console.log('confirmPaymentData------------>', confirmPaymentData);
      }
    } catch (error) {
      console.log('rorrrrrrrr=-======---->', JSON.stringify(error));
    }
     // let resToken;
    // if (!!cardInfo) {
    //   try {
    //      resToken = await createToken({...cardInfo, type: 'Card'});
    //     console.log('token --->', resToken);
    //   } catch (error) {
    //     console.log('error token===>', error);
    //   }
    // }

  };
  return (
    <View style={styles.contanier}>
      <Text>PaymentScreen</Text>
      <SafeAreaView style={{flex: 1, padding: 16}}>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
            borderWidth: 1,
            borderColor: 'lightgray',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={cardDetails => {
            fetchCardDetail(cardDetails);
          }}
          onFocus={focusedField => {
            console.log('focusField', focusedField);
          }}
        />
        <ButtonCom onPress={onPay} disable={true} />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
});
export default PaymentScreen;
