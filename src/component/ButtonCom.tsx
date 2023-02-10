import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
interface PayProps  {
  onPress: () => void;
  disable: true;
}

const ButtonCom = (props: PayProps) => {
  
  return (
    <TouchableOpacity
      style={styles.button}
     // disabled={props.disable}
      onPress={props.onPress}>
      <Text style={styles.textButton}>pay</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 42,
    backgroundColor: '#326589',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    //color:'',
  },
});
export default ButtonCom;
