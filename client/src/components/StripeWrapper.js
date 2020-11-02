import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeWrapper extends Component {
   render() {
      debugger;

      return (
         <StripeCheckout
            amount={500} // Amount in cents.
            token={(token) => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
         />
      );
   }
}

export default StripeWrapper;