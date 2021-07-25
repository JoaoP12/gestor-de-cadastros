import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as S from '../../styled/common/styled-view';

export default function ViewCliente () {
    const { codigo } = useParams();
    const clientes = JSON.parse(localStorage.getItem("clientes")) || {};
    const history = useHistory();

    function deleteCustomer () {
        if (window.confirm("Você quer mesmo deletar " + cliente.nome + "?")){
            delete clientes[codigo];
            localStorage.setItem("clientes", JSON.stringify(clientes));
            alert("Cliente deletado com sucesso!");
            history.push("/clientes");
        } else {
            alert("Exclusão abortada!");
        }
    }

    if (clientes === {} || clientes[codigo] === undefined) {
        return (
            <S.Main>
                <S.NotFound>Cliente não encontrado!</S.NotFound>
            </S.Main>   
        );
    }
    const cliente = clientes[codigo];

    return (
        <S.Main>
            <S.MainInfo>
                <S.Title>{cliente.nome}</S.Title>
                <S.InfoLabel>{ cliente.tipo === "PF" ? "CPF" : "CNPJ" }:{cliente.doc}</S.InfoLabel>
                <S.InfoLabel>Tipo: { cliente.tipo === 'PF' ? "Pessoa Física" : "Pessoa Jurídica" }</S.InfoLabel>
                <S.InfoLabel>Rua: { cliente.rua }</S.InfoLabel>
                <S.InfoLabel>Número: { cliente.num }</S.InfoLabel>
                <S.InfoLabel>Bairro: { cliente.bairro }</S.InfoLabel>
                <S.InfoLabel>CEP: { cliente.CEP }</S.InfoLabel>
                <S.InfoLabel>Cidade: { cliente.cidade }</S.InfoLabel>
                {
                    cliente.complemento !== undefined ? <S.InfoLabel>Complemento: { cliente.complemento }</S.InfoLabel> : ""
                }
                {
                    cliente.tipo === "PJ" ? <S.InfoLabel>Nome Fantasia: { cliente.nomeFantasia }</S.InfoLabel> : ""
                }
                <S.InfoLabel>Email: { cliente.email }</S.InfoLabel>
                <S.InfoLabel>Telefone: { cliente.tel }</S.InfoLabel>
                <S.ButtonsDiv>
                    <S.DeleteButton onClick={deleteCustomer}>Excluir</S.DeleteButton>
                </S.ButtonsDiv>
            </S.MainInfo>
        </S.Main>
    );
}