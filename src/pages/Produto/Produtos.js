import React from 'react';
import { useHistory } from 'react-router-dom';
import * as common from '../../styled/common'

export default function Produtos () {
    const history = useHistory();
    const produtos = JSON.parse(localStorage.getItem("produtos")) || {};
    let counter = 1;

    return (
        <common.Main>
            <common.Header>
                <common.PageTitle>Produtos</common.PageTitle>
                <common.Search>
                    <common.SearchField type="text" placeholder="Procure pela descrição do produto" />
                    <common.SearchButton />
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
                            Object.keys(produtos).map((codigo, key) => {
                                return (
                                    <tr key={key} onClick={ () => history.push(`/produtos/${codigo}`)}>
                                        <common.Cell width="30px">{counter++}</common.Cell>
                                        <common.Cell width="300px">{produtos[codigo].title}</common.Cell>
                                        <common.Cell width="150px">{produtos[codigo].local}</common.Cell>
                                        <common.Cell width="50px">{produtos[codigo].qtd}</common.Cell>
                                        <common.Cell width="150px">R$ {produtos[codigo].price}</common.Cell>
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