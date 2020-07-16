import React from 'react';
import {Redirect} from 'react-router-dom';

import {HOME} from 'lib/routes';

export default function NotFound() {
	return <Redirect to={HOME} />;
}
