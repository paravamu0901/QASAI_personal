import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userAtom } from '../_state';

export { PrivateRoute };

function PrivateRoute({ component: Component, roles, ...rest }) {
    const user = useRecoilValue(userAtom);
    return (
        <Route {...rest} render={props => {
            if (!user) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
}
