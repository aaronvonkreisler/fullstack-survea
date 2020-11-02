import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeWrapper extends Component {
   render() {
      return (
         <StripeCheckout
            name="Survea"
            description="Purchase email credits"
            amount={500} // Amount in cents.
            token={(token) => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
         >
            <button className="btn teal lighten-2">Add Credits</button>
         </StripeCheckout>
      );
   }
}

export default StripeWrapper;
