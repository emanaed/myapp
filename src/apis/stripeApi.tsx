import axios from 'axios';

interface PaymentIntentProps {
  amount: number;
  currency: string;
}
const createPaymentIntent = (data: PaymentIntentProps) => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:4402/payment-sheet', data)
      .then(function (res) {
        return resolve(res);
      })
      .catch(function (err) {
        return reject(err);
      });
  });
};
export default createPaymentIntent;
