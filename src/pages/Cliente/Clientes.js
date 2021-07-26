import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as common from '../../styled/common';



export default function Clientes () {
    const history = useHistory();
    const clientes = JSON.parse(localStorage.getItem("clientes")) || {};
    const [ queryString, setQueryString ] = useState('');
    const [ clientesQuery, setClientesQuery ] = useState(clientes);
    
    function handleSearch() {
        if (queryString.trim() === ''){
            setClientesQuery(clientes);
            return;
        }
        const clientesCodigos = Object.keys(clientes).filter(codigo => {
            return clientes[codigo].nome.toLowerCase().includes(queryString.toLowerCase());
        });
        const tempList = {}
        clientesCodigos.map(codigo => tempList[codigo] = clientes[codigo]);
        setClientesQuery(tempList);
    }


    return (
        <common.Main>
            <common.Header>
                <common.PageTitle>Clientes</common.PageTitle>
                <common.Search>
                    <common.SearchField type="text" value={ queryString } onChange={ e => setQueryString(e.target.value) }
                        placeholder="Procure pelo nome ou razão social do cliente" />
                    <common.SearchButton onClick={handleSearch} />
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
                            <ListaCadastros cadastros={clientesQuery} history={history} />
                        }
                    </tbody>
                </common.Table>
            </common.List>
        </common.Main>
    );
}

function ListaCadastros ({ cadastros, history}){
    let counter = 1;
    return (
        <>
            {
                Object.keys(cadastros).map(codigo => {
                    return (
                        <tr key={codigo} onClick={ () => history.push('/clientes/'+codigo) }>
                            <common.Cell width="30px">{ counter++ }</common.Cell>
                            <common.Cell width="300px">{ cadastros[codigo].nome }</common.Cell>
                            <common.Cell width="50px">{ cadastros[codigo].tipo === "PF" ? "Física" : "Jurídica" }</common.Cell>
                            <common.Cell width="150px">{ cadastros[codigo].cidade }</common.Cell>
                            <common.Cell width="150px">{ cadastros[codigo].tel }</common.Cell>
                        </tr>
                    );
                })
            }
        </>
    );

}