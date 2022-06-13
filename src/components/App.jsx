import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/login';
import '../styles/global.css';

const App=()=>{
    return(
        <Layout>
            <Login />
            {/* <Login ></Login> esta estructura puede ser utilizada sin embargo si no se recibe un hijo es mejor utilizar
            la opcion de arriba, cerrado de inicio*/}
        </Layout>
    );
}

export default App;