import React from 'react';
import { useHistory } from 'react-router-dom';
import * as common from '../../styled/common';

export default function Clientes () {
    const history = useHistory();
    const clientes = JSON.parse(localStorage.getItem("clientes")) || {};
    let counter = 1;
    return (
        <common.Main>
            <common.Header>
                <common.PageTitle>Clientes</common.PageTitle>
                <common.Search>
                    <common.SearchField type="text" placeholder="Procure pelo nome ou razão social do cliente" />
                    <common.SearchButton />
                </common.Search>
                <common.Create onClick={()=> history.push('/clientes/cadastrar')}>
                    <common.CreateButton />
                    <h2>Cadastrar Cliente</h2>
                </common.Create>
            </common.Header>
            <common.List>
                <common.Table>
                    <tbody>
                        <tr>
                            <common.Cell className="header"> </common.Cell>
                            <common.Cell className="header">Nome / Razão Social</common.Cell>
                            <common.Cell className="header">Tipo</common.Cell>
                            <common.Cell className="header">Cidade</common.Cell>
                            <common.Cell className="header">Contato</common.Cell>
                        </tr>
                        {
                            Object.keys(clientes).map(codigo => {
                                return (
                                    <tr key={codigo} onClick={ () => history.push('/clientes/'+codigo) }>
                                        <common.Cell width="30px">{counter++}</common.Cell>
                                        <common.Cell width="300px">{clientes[codigo].nome}</common.Cell>
                                        <common.Cell width="50px">{ clientes[codigo].tipo === "PF" ? "Física" : "Jurídica" }</common.Cell>
                                        <common.Cell width="150px">{ clientes[codigo].cidade }</common.Cell>
                                        <common.Cell width="150px">{ clientes[codigo].tel }</common.Cell>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </common.Table>
            </common.List>
        </common.Main>
    );
}