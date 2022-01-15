import React, {Fragment} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'
import 'react-toastify/dist/ReactToastify.css'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IGZ6EJWDBULoxk2muGXqz9RpyZtR6zmQdyb9QN4CJZNlXAFt6yaIponKddgxgnDveYTY3ISb2V1UR177txFJj1i00K0jBKRWQ';

   const onToken = token => {
        console.log(token)
        toast('Payment Successful!')
        // alert("payment successful")
    }
    return (
       <Fragment>
      <StripeCheckout
         label='Pay Now'
         name='CROWN CLOTHING Org.'
         amount={priceForStripe}
         currency='USD'
         billingAddress
         shippingAddress
         image = 'https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
       />
       <ToastContainer/>
       </Fragment>
    )
}

export default StripeCheckoutButton;
