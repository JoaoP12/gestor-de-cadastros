import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Produtos from './pages/Produto/Produtos';
import FormularioCadastroProduto from './pages/Produto/FormularioCadastro';
import ViewProduto from './pages/Produto/ViewProduto';

import Clientes from './pages/Cliente/Clientes';
import FormularioCadastroCliente from './pages/Cliente/FormularioCadastro';
import SideBar from './components/SideMenu/SideMenu';

export default function Router () {
    return (
        <BrowserRouter>
            <SideBar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/produtos" component={ Produtos } />
                <Route exact path="/produtos/cadastrar" component={ FormularioCadastroProduto } />
                <Route exact path="/produtos/:codigo" component={ ViewProduto } />

                <Route exact path="/clientes" component={ Clientes } />
                <Route exact path="/clientes/cadastrar" component={ FormularioCadastroCliente } />
                
                <Route exact path="/config" />
            </Switch>
        </BrowserRouter>
    );
}


