# SJ - Gestão de Cadastros

## Índice

- [Sobre](#about)
- [Rodando o projeto](#getting_started)
- [Como Usar](#usage)
- [Para fazer](#todo)

## Sobre <a name="about"></a>

O projeto foi construído para o segundo desafio da primeira fase do treinamento Hiring Coders #2.
O desafio é criar um e-commerce para gestão de cadastros de clientes e produtos com o que aprendemos no treinamento.

Esse repositório contém a minha entrega do desafio, que foi construída com React e styled-componentes, de acordo com o conteúdo aprendido em aula.

## Rodando o projeto <a name="getting_started"></a>

As instruções a seguir te guiarão para rodar o site no seu ambiente local.

### Instalando
Após clonar o repositório remoto para o local, execute os seguintes comandos:
```
cd gestor-de-cadastros
npm i
```
Isso vai instalar as dependências necessárias para que o projeto funcione localmente.

### Iniciando o servidor
Depois que todas as dependências estiverem instaladas, você pode iniciar o servidor em modo de desenvolvimento com o comando ```yarn start```.
Depois de rodar o comando, o seu navegador de internet padrão será aberto e você verá a tela inicial:

![image](https://github.com/JoaoP12/gestor-de-cadastros/blob/master/examples/home_image.png)

>Caso o navegador não seja aberto automaticamente, você pode abri-lo e digitar 'localhost:3000' na barra de pesquisa.

### Como usar <a name="usage"></a>
Com o servidor funcionando e o a página aberta no navegador, o usuário pode usufruir das funcionalidades do projeto.

#### Home
Na página inicial, ou Home, pode-se ir às telas de clientes e produtos, onde serão gerenciados os cadastros dos mesmos.
A barra de opções que fica a esquerda está presente em todas as telas e expande quando o usuário passa o mouse por cima, mostrando as opções disponíveis.

#### Clientes/Produtos
As telas são parecidas, onde é possível cadastrar produtos no botão "Cadastrar Produto/Cliente", além de possuírem uma barra de pesquisa, e uma tabela que mostra os cadastros, como mostrado abaixo:

![image](https://github.com/JoaoP12/gestor-de-cadastros/blob/master/examples/customers_screen.png)

Passando o mouse por cima de cada cadastro na tabela, a cor ficará mais escura e o usuário tem a opção de clicar no registro para ver todas as informações do cadastro:

![image](https://github.com/JoaoP12/gestor-de-cadastros/blob/master/examples/lista_clientes.png)

![image](https://github.com/JoaoP12/gestor-de-cadastros/blob/master/examples/cadastro_cliente.PNG)

Obviamente, também é possível cadastrar produtos e clientes clicando no botão "Cadastrar (Produto ou Cliente)" de cada tela. Depois de clicar, um formulário será carregado. A imagem abaixo mostra o formulário de cadastro de clientes, mas o formulário de produtos é muito similar:

![image](https://github.com/JoaoP12/gestor-de-cadastros/blob/master/examples/cadastrar_cliente.PNG)

E então o usuário só tem que preencher os campos conforme as informações de seu cliente/produto e enviar.

#### Configurações
A tela de configurações ainda não foi implementada.

## Para fazer
- [ ] Implementar tela de configurações.
- [ ] Tornar a página responsiva.
- [ ] Permitir alteração dos cadastros.
- [ ] Melhorar design das páginas.
