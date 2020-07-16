import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import * as routes from 'lib/routes';

import Home from 'views/Home';
import SignUp from 'views/SignUp';
import PrivacyPolicy from 'views/PrivacyPolicy';
import TermsOfService from 'views/TermsOfService';
// import NotFound from 'NotFound';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path={routes.HOME} component={Home} />
			<Route exact path={routes.REGISTER} component={SignUp} />
			<Route exact path={routes.PRIVACY_POLICY} component={PrivacyPolicy} />
			<Route exact path={routes.TERMS_OF_SERVICE} component={TermsOfService} />

			{/* <Route path="*" component={NotFound} /> */}
		</Switch>
	</Router>
);

export default Routes;
