import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as common from '../../styled/common'

export default function Produtos () {
    const history = useHistory();
    const produtos = JSON.parse(localStorage.getItem("produtos")) || {};

    const [ queryString, setQueryString ] = useState('');
    const [ productsQuery, setProductsQuery ] = useState(produtos);

    function handleSearch(){
        if (queryString.trim() === ''){
            setProductsQuery(productsQuery);
            return;
        }
        const productsCodigos = Object.keys(produtos).filter(codigo => {
            return produtos[codigo].title.toLowerCase().includes(queryString.toLowerCase());
        });
        const tempList = {};
        productsCodigos.map(codigo => tempList[codigo] = produtos[codigo]);
        setProductsQuery(tempList);
    }

    return (
        <common.Main>
            <common.Header>
                <common.PageTitle>Produtos</common.PageTitle>
                <common.Search>
                    <common.SearchField type="text" value={ queryString } onChange={ e => setQueryString(e.target.value) }
                        placeholder="Procure pela descrição do produto" />
                    <common.SearchButton onClick={handleSearch} />
                </common.Search>
                <common.Create onClick={() => history.push('/produtos/cadastrar')}>
                    <common.CreateButton />
                    <h2>Cadastrar Produto</h2>
                </common.Create>
            </common.Header>
            <common.List>
                <common.Table>
                    <tbody>
                        <tr>
                            <common.Cell className="header"> </common.Cell>
                            <common.Cell className="header">Produto</common.Cell>
                            <common.Cell className="header">Local</common.Cell>
                            <common.Cell className="header">Estoque</common.Cell>
                            <common.Cell className="header">Preço</common.Cell>
                        </tr>
                        {
                            <ListaCadastros history={history} cadastros={productsQuery} />
                        }
                    </tbody>
                </common.Table>
            </common.List>
        </common.Main>
    );

}

function ListaCadastros ({ cadastros, history }) {
    let counter = 1;
    return (
        <>
            {
                Object.keys(cadastros).map((codigo, key) => {
                    return (
                        <tr key={key} onClick={ () => history.push(`/produtos/${codigo}`)}>
                            <common.Cell width="30px">{counter++}</common.Cell>
                            <common.Cell width="300px">{cadastros[codigo].title}</common.Cell>
                            <common.Cell width="150px">{cadastros[codigo].local}</common.Cell>
                            <common.Cell width="50px">{cadastros[codigo].qtd}</common.Cell>
                            <common.Cell width="150px">R$ {cadastros[codigo].price}</common.Cell>
                        </tr>
                    );
                })
            }   
        </>
    );
}