import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = (props) => {
   useEffect(() => {
      props.fetchUser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <div>
         <BrowserRouter>
            <div>
               <Header />
               <div className="container">
                  <Route path="/" exact component={Landing} />
                  <Route path="/surveys" exact component={Dashboard} />
                  <Route path="/surveys/new" exact component={SurveyNew} />
               </div>
            </div>
         </BrowserRouter>
      </div>
   );
};

export default connect(null, actions)(App);
