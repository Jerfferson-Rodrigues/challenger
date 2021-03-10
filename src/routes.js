import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Localizacao from './page/Localizacao/Localizacao';
import Dados from './page/Dados/Dados';

function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Localizacao} />
                <Route path="/Dados" exact component={Dados} />
                {/* <Route path="/cadastro" component={cadastro} /> */}
            </Switch>
        </BrowserRouter>
    );

};

export default Routes;