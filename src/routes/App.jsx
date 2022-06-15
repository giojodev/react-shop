import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';

const App=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/recovery-password' component={RecoveryPassword}/>
                    <Route component={NotFound}/>
                </Layout>
            </Switch>
        {/* <Login ></Login> esta estructura puede ser utilizada sin embargo si no se recibe un hijo es mejor utilizar
            la opcion de arriba, cerrado de inicio*/}
        </BrowserRouter>
    );
}

export default App;