import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
   const renderContent = () => {
      switch (props.auth) {
         case null:
            return 'Still deciding';
         case false:
            return 'Im logged out';
         default:
            return 'Im logged in';
      }
   };

   return (
      <nav>
         <div className="nav-wrapper">
            <a className="left brand-logo" href="/">
               Survea
            </a>
            <ul className="right">{renderContent()}</ul>
         </div>
      </nav>
   );
};

const mapStateToProps = ({ auth }) => {
   return { auth };
};

export default connect(mapStateToProps)(Header);
