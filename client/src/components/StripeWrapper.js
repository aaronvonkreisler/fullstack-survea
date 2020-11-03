import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class StripeWrapper extends Component {
   render() {
      return (
         <StripeCheckout
            name="Survea"
            description="Purchase email credits"
            amount={500} // Amount in cents.
            token={(token) => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
         >
            <button className="btn teal lighten-2">Add Credits</button>
         </StripeCheckout>
      );
   }
}

export default connect(null, actions)(StripeWrapper);
