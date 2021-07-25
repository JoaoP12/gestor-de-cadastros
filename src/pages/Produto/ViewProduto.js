import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as S from '../../styled/common/styled-view';
 
export default function ViewProduto () {
    const { codigo } = useParams();
    const produtos = JSON.parse(localStorage.getItem("produtos")) || {};
    const history = useHistory();
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
            history.push('/produtos');
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
            <S.MainInfo>
                <S.Title>{produto.title}</S.Title>
                <S.ProdDescriptionSection>
                    <S.ProdDescriptionParagrah>{produto.desc}</S.ProdDescriptionParagrah>
                </S.ProdDescriptionSection>
                <S.InfoLabel>Estoque: {produto.qtd}</S.InfoLabel>
                <S.InfoLabel>Localização: {produto.local}</S.InfoLabel>
                <S.InfoLabel>Preço: R$ {produto.price}</S.InfoLabel>
                <S.InfoLabel>Custo: R$ {produto.cost}</S.InfoLabel>
                <S.ButtonsDiv>
                    <S.DeleteButton onClick={deleteProduct}>Excluir</S.DeleteButton>
                </S.ButtonsDiv>
            </S.MainInfo>
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