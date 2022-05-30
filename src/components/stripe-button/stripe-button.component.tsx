import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface Price {
  price: number;
}

const StripeCheckoutButton = ({ price }: Price) => {
  const priceForStripe = price * 100;
  const publishableKey: string =
    "pk_test_51IGZ6EJWDBULoxk2muGXqz9RpyZtR6zmQdyb9QN4CJZNlXAFt6yaIponKddgxgnDveYTY3ISb2V1UR177txFJj1i00K0jBKRWQ";

  const onToken = (token: any): void => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("payment successful");
        console.log(response.data);
      })
      .catch((error) => {
        console.log("There was an error", error);
        alert(
          "there was an issue with your payment. Please use the required credit card"
        );
      });
  };

  return (
    <Fragment>
      <StripeCheckout
        label="Pay Now"
        name="CROWN CLOTHING Org."
        amount={priceForStripe}
        currency="USD"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </Fragment>
  );
};

export default StripeCheckoutButton;
