import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StripeWrapper from './StripeWrapper';

class Header extends React.Component {
   renderContent() {
      switch (this.props.auth) {
         case null:
            return;
         case false:
            return (
               <li>
                  <a href="/auth/google">Login with Google</a>
               </li>
            );
         default:
            return (
               <React.Fragment>
                  <li>
                     <StripeWrapper />
                  </li>
                  <li>
                     <a href="/api/logout">Logout</a>
                  </li>
               </React.Fragment>
            );
      }
   }
   render() {
      return (
         <nav className="blue accent-3">
            <div className="nav-wrapper">
               <Link
                  to={this.props.auth ? '/surveys' : '/'}
                  className="left brand-logo"
               >
                  Survea
               </Link>
               <ul className="right">{this.renderContent()}</ul>
            </div>
         </nav>
      );
   }
}

const mapStateToProps = ({ auth }) => {
   return { auth };
};

export default connect(mapStateToProps)(Header);
