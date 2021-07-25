import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../../styled/common/styled-form';
import { v4 as uuid } from 'uuid';

export default function FormularioCadastro () {
    const history = useHistory();

    const [ pfChecked, setPfChecked ] = useState(true);
    const [ nome, setNome ] = useState('');
    const [ cpf_cnpj, setCpf_cnpj ] = useState('');
    const [ rua, setRua ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ num, setNum ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ nomeFantasia, setNomeFantasia ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ CEP, setCEP ] = useState('');
    const [ cidade, setCidade] = useState('');
    
    function handleSubmit (event) {
        event.preventDefault();
        const codigo_cliente = uuid();
        let clientes = {};
        if (localStorage.getItem("clientes") !== null){
            clientes = JSON.parse(localStorage.getItem("clientes"));
        }

        clientes[codigo_cliente] = {
            nome: nome,
            doc: cpf_cnpj,
            tipo: cpf_cnpj.length === 11 ? "PF" : "PJ",
            rua: rua,
            bairro: bairro,
            num: num,
            tel: phone,
            CEP: CEP,
            email: email,
            cidade: cidade
        }

        if (clientes[codigo_cliente].tipo === "PJ") {
            clientes[codigo_cliente].nomeFantasia = nomeFantasia;
        }
        if (complemento !== ''){
            clientes[codigo_cliente].complemento = complemento;
        }

        localStorage.setItem("clientes", JSON.stringify(clientes));
        alert("Cliente cadastrado com sucesso!");
        history.push(`/produtos/${codigo_cliente}`);
    }
    
    return (
        <S.Main>
            <S.Form onSubmit={handleSubmit}>
                <S.FormTitle>Cadastrar Cliente</S.FormTitle>
                <S.RadioGroup>
                    <S.RadioOption>
                        <S.RadioButton id="PF" type="radio" name="pf-pj" onChange={(e) => {
                            setPfChecked(true);
                        }} defaultChecked />
                        <S.Label htmlFor="PF" >Pessoa Física</S.Label>
                    </S.RadioOption>
                    <S.RadioOption>
                        <S.RadioButton id="PJ" type="radio" name="pf-pj" onChange={(e) => {
                            setPfChecked(false);
                        }} />
                        <S.Label htmlFor="PJ">Pessoa Jurídica</S.Label>
                    </S.RadioOption>
                </S.RadioGroup>
                <S.SectionTitle>Identificação</S.SectionTitle>
                <S.Label htmlFor="customer-name">Nome/Razão Social</S.Label>
                <S.LargeTextInput id="customer-name" type="text" required value={nome} onChange={ (e) => setNome(e.target.value) } /> 
                <S.Label htmlFor="customer-email">E-mail</S.Label>
                <S.LargeTextInput id="customer-email" type="email" required value={email} onChange={ (e) => setEmail(e.target.value) } /> 
                <S.Label htmlFor="customer-phone">Telefone</S.Label>
                <S.LargeTextInput id="customer-phone" type="text" minLength="10" maxLength="10" value={phone} required onChange={ (e) => setPhone(e.target.value) } />
                {
                    <RemainingInfo PJ={!pfChecked} set={ {setCpf_cnpj, setNomeFantasia}} get={ {cpf_cnpj, nomeFantasia} } />
                }
                <S.Section>
                    <S.SectionTitle>Endereço</S.SectionTitle>
                    <S.Label htmlFor="customer-street" maxLength="70">Cidade</S.Label>
                    <S.LargeTextInput id="customer-street" type="text" required value={cidade} onChange={ (e) => setCidade(e.target.value) } />
                    <S.Label htmlFor="customer-street" maxLength="70">Rua</S.Label>
                    <S.LargeTextInput id="customer-street" type="text" required  value={rua} onChange={ (e) => setRua(e.target.value) } />
                    <S.Container>
                        <S.InputBox>
                            <S.Label htmlFor="customer-neighborhood">Bairro</S.Label>
                            <S.NormalTextInput id="customer-neighborhood" maxLength="50" value={bairro} type="text" required onChange={ (e) => setBairro(e.target.value) } /> 
                        </S.InputBox>
                        <S.InputBox>
                            <S.Label htmlFor="customer-home-num">Número</S.Label>
                            <S.SmallTextInput id="customer-home-num" type="text" maxLength="5" value={num} required onChange={ (e) => setNum(e.target.value) } /> 
                        </S.InputBox>
                    </S.Container>
                    <S.Container>
                        <S.InputBox>
                            <S.Label htmlFor="customer-complement">Complemento</S.Label>
                            <S.NormalTextInput id="customer-complement" type="text" value={complemento} onChange={ (e) => setComplemento(e.target.value) } /> 
                        </S.InputBox>
                        <S.InputBox>
                            <S.Label htmlFor="customer-postal-code">CEP</S.Label>
                            <S.SmallTextInput id="customer-postal-code" type="text" value={CEP} minLength="8" maxLength="8" required onChange={ (e) => setCEP(e.target.value) } /> 
                        </S.InputBox>
                    </S.Container>
                    <S.SubmitButton type="submit" value="Enviar" />
                </S.Section>
            </S.Form>
        </S.Main>
    );
}
function RemainingInfo (props) {
    if (props.PJ){
        return (
            <>
                <S.Label htmlFor="customer-cnpj">CNPJ</S.Label>
                <S.LargeTextInput id="customer-cnpj" type="text" minLength="14" maxLength="14" value={props.get.cpf_cnpj} required onChange={ (e) => props.set.setCpf_cnpj(e.target.value) } /> 
                <S.Label htmlFor="customer-nome-fantasia">Nome Fantasia</S.Label>
                <S.LargeTextInput id="customer-nome-fantasia" type="text" value={props.get.nomeFantasia} onChange={ (e) => props.set.setNomeFantasia(e.target.value) } /> 
            </>
        );
    }
    return (
        <>
            <S.Label htmlFor="customer-cpf">CPF</S.Label>
            <S.LargeTextInput id="customer-cpf" type="text" minLength="11" maxLength="11" value={props.get.cpf_cnpj} required onChange={ (e) => props.set.setCpf_cnpj(e.target.value) } />
        </>
    );
}
