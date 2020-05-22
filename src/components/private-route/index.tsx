import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';


const PrivateRoute = (props: RouteProps) => {
  const {children, component, ...rest} = props;
  const realCmp:any = props.component;
  return (
    <Route
    {...rest}
    render={({ location, history, match }) =>
        (window as any).isAuth ? (
          React.createElement(realCmp, {location, history, match})
        ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { fromPathname: location.pathname }
                    }}
                />
            )
    }
/>
  );
};


export default PrivateRoute;
