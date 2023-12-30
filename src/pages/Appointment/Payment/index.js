import { Button } from "react-bootstrap";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";

const Payment = ({ onPaymentSuccess, onClickPay }) => {
  const [Razorpay] = useRazorpay()

  const handlePayment = useCallback(async () => {
    const order = await onClickPay();

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "RichSense",
      description: "",
      image: "",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        onPaymentSuccess(response);
      },
      prefill: {
        name: "",
        email: "i.midelaj.com",
        contact: "+7902767412",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    console.log({ options });

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return <Button onClick={handlePayment}>Book & Pay</Button>;
};

export default Payment;
