import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StripeWrapper from './StripeWrapper';

const Header = (props) => {
   console.log(props);
   const renderContent = () => {
      switch (props.auth) {
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
               <li>
                  <a href="/api/logout">Logout</a>
               </li>
            );
      }
   };

   return (
      <nav className="blue accent-3">
         <div className="nav-wrapper">
            <Link
               to={props.auth ? '/surveys' : '/'}
               className="left brand-logo"
            >
               Survea
            </Link>
            <ul className="right">{renderContent()}</ul>
         </div>
      </nav>
   );
};

const mapStateToProps = ({ auth }) => {
   return { auth };
};

export default connect(mapStateToProps)(Header);
