import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as S from '../../styled/common/styled-view';
 
export default function ViewProduto () {
    const { codigo } = useParams();
    const produtos = JSON.parse(localStorage.getItem("produtos")) || {};
    const hist = useHistory();
    if (produtos === {} || produtos[codigo] === undefined){
        return (
            <S.Main>
                <S.NotFound>Produto não encontrado!</S.NotFound>
            </S.Main>
        );
    }
    const produto = produtos[codigo];

    function deleteProduct () {
        if (window.confirm("Você quer mesmo deletar " + produto.nome + "?")){
            delete produtos[codigo];
            localStorage.setItem("produtos", JSON.stringify(produtos));
            alert("Produto deletado com sucesso!");
            hist.push('/produtos');
        } else {
            alert("Exclusão abortada!");
        }
    }

    return (
        <S.Main>
            <S.ProductBkg>
                {
                    <ProdImg link={produto.link} />
                }
            </S.ProductBkg>
            <S.ProductInfo>
                <S.ProdTitle>{produto.title}</S.ProdTitle>
                <S.ProdDescriptionSection>
                    <S.ProdDescriptionParagrah>{produto.desc}</S.ProdDescriptionParagrah>
                </S.ProdDescriptionSection>
                <S.ProdInfoLabel>Estoque: {produto.qtd}</S.ProdInfoLabel>
                <S.ProdInfoLabel>Localização: {produto.local}</S.ProdInfoLabel>
                <S.ProdInfoLabel>Preço: R$ {produto.price}</S.ProdInfoLabel>
                <S.ProdInfoLabel>Custo: R$ {produto.cost}</S.ProdInfoLabel>
                <S.ButtonsDiv>
                    <S.DeleteButton onClick={deleteProduct}>Excluir</S.DeleteButton>
                    <S.EditButton>Alterar</S.EditButton>
                </S.ButtonsDiv>
            </S.ProductInfo>
        </S.Main>
    );
}


function ProdImg (props) {
    if (props.link){
        return (
            <S.ProductImg src={props.link} alt="Product Picture" />
        );
    }
    return (
        <S.Heading2>Não há imagem</S.Heading2>
    );
}