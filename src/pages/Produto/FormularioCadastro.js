import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../../styled/common/styled-form';
import { v4 as uuid } from 'uuid';

export default function FormularioCadastro () {
    const [ description, setDescription ] = useState('');
    const [ local, setLocal ] = useState('');
    const [ qtd, setQtd ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ link, setLink ] = useState('');
    const [ cost, setCost ] = useState('');
    const [ titulo, setTitulo ] = useState('');

    const history = useHistory();

    function handleSubmit (event) {
        event.preventDefault();
        const codigo_produto = uuid();
        let produtos = {};
        if (localStorage.getItem("produtos") !== null){
            produtos = JSON.parse(localStorage.getItem("produtos"));
        }

        produtos[codigo_produto] = {
            title: titulo,
            desc: description,
            local: local,
            qtd: qtd,
            price: price,
            cost: cost,
            link: link
        }

        localStorage.setItem("produtos", JSON.stringify(produtos));
        alert("Produto cadastrado com sucesso!");
        history.push(`/produtos/${codigo_produto}`);
    }
    
    return (
        <S.Main>
            <S.Form onSubmit={handleSubmit}>
                <S.FormTitle>Cadastrar Produto</S.FormTitle>
                <S.Label htmlFor="product-title">Título</S.Label>
                <S.LargeTextInput id="product-title" type="text" required value={titulo} onChange={ (e) => setTitulo(e.target.value) } />
                <S.Label htmlFor="product-description">Description</S.Label>
                <S.LargeTextInput id="product-description" type="text" required value={description} onChange={ (e) => setDescription(e.target.value) } />
                <S.Section>
                    <S.Container>
                        <S.InputBox>
                            <S.Label htmlFor="product-local">Localização</S.Label>
                            <S.NormalTextInput id="product-local" type="text" required value={local} onChange={ (e) => setLocal(e.target.value) } />
                        </S.InputBox>
                        <S.InputBox>
                            <S.Label htmlFor="product-stock">Quantidade</S.Label>
                            <S.SmallTextInput id="product-stock" type="text" required value={qtd} onChange={ (e) => setQtd(e.target.value) } />
                        </S.InputBox>
                    </S.Container>
                    <S.Label htmlFor="product-img-link">Link Imagem</S.Label>
                    <S.LargeTextInput id="product-img-link" type="text" value={link} onChange={ (e) => setLink(e.target.value) } />
                    <S.Container>
                        <S.InputBox>
                            <S.Label htmlFor="product-price">Preço</S.Label>
                            <S.SmallTextInput id="product-price" type="text" required value={price} onChange={ (e) => setPrice(e.target.value) } />
                        </S.InputBox>
                        <S.InputBox>
                            <S.Label htmlFor="product-cost">Custo</S.Label>
                            <S.SmallTextInput id="product-cost" type="text" required value={cost} onChange={ (e) => setCost(e.target.value) } />
                        </S.InputBox>
                    </S.Container>
                </S.Section>
                <S.SubmitButton type="submit" value="Enviar" />
            </S.Form>
        </S.Main>
    );
}