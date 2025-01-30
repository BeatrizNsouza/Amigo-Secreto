//Funçao 01: Adicionar amigo na lista
function adicionarAmigo(){
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

//Validando entrada:
    if (nome === "") {
        alert('Por favor, digite um nome válido.' );
        return;
    }
    
    const listaAmigos = document.getElementById('listaAmigos');
    const itemLista = document.createElement('li');
    itemLista.textContent=nome;
    listaAmigos.appendChild(itemLista); 
    
    //limpar campo de entrada 
    input.value = '';
}

//Funçao 02: Sorteio

function sortearAmigo(){
    const listaAmigos = document.getElementById('listaAmigos').children;
    if (listaAmigos.length === 0){
        alert ('Adicione pelo menos um amigo para sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado].textContent;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}<li>`;
}


//EXPLICAÇAO Funçao 01 -  
// Capturar o valor do campo de entrada: 
//document.getElementById('amigo'): Seleciona o elemento HTML com o ID amigo, que é o campo de texto onde o usuário digita o nome.

//input.value: Obtém o valor digitado pelo usuário no campo de texto.

//.trim(): Remove espaços em branco no início e no final do texto. Isso evita que o usuário adicione nomes vazios ou com espaços desnecessários.

//Motivo da escolha:
//getElementById: É usado porque o campo de texto tem um ID único (amigo), e essa é a maneira mais direta de selecionar um elemento pelo ID.

//.trim(): Garante que o nome seja válido, evitando entradas como apenas espaços em branco.

//VALIDAR ENTRADA :
//Verifica se o valor capturado (nome) está vazio ("").

//Se estiver vazio, exibe um alerta ao usuário solicitando que ele digite um nome válido.

//O return interrompe a execução da função, evitando que o código prossiga com um nome inválido.

//Motivo da escolha:
//Validação simples: É importante garantir que o usuário não adicione nomes vazios à lista.

//alert: É uma maneira rápida de informar o usuário sobre o erro, embora não seja a mais elegante. Pode ser substituído por uma mensagem na interface no futuro.

//SELECIONAR AMIGOS NA LISTA:
//Seleciona o elemento HTML com o ID listaAmigos, que é a lista (<ul>) onde os nomes dos amigos serão exibidos.

//Motivo da escolha:
//getElementById: Novamente, é usado porque a lista tem um ID único (listaAmigos), e essa é a maneira mais eficiente de selecioná-la.

//CRIAR UM NOVO ITEM PARA A LISTA
//document.createElement('li'): Cria um novo elemento <li> (item de lista).

//itemLista.textContent = nome: Define o conteúdo do <li> como o nome digitado pelo usuário.

//Motivo da escolha:
//createElement: É a maneira correta de criar um novo elemento HTML dinamicamente.

//textContent: Define o texto do elemento de forma segura, evitando problemas com HTML malicioso (em comparação com innerHTML).

//ADICappendChild: Adiciona o novo <li> (criado no Passo 4) como um filho da lista (<ul>), fazendo com que o nome apareça na interface do usuário.

//Motivo da escolha:
//appendChild: É o método padrão para adicionar elementos a um nó pai no DOM (Document Object Model).IONAR ITEM A LISTA
//LIMPAR CAMPO DE ENTRADA:
//Limpa o campo de texto após o nome ser adicionado à lista, preparando-o para uma nova entrada.

//Motivo da escolha:
//Melhora a experiência do usuário, evitando que ele precise apagar manualmente o nome anterior antes de digitar um novo.

//EXPLICAÇAO funçao 02:


//.children: Retorna uma coleção HTML (um array-like) com todos os elementos filhos de listaAmigos, ou seja, os itens da lista (<li>).

//VERIFICAR SE A LISTA ESTA VAZIA:
//Verifica se a lista de amigos está vazia (ou seja, se listaAmigos.length é igual a 0).

//Se estiver vazia, exibe um alerta ao usuário solicitando que ele adicione pelo menos um nome à lista.

//O return interrompe a execução da função, evitando que o código prossiga com uma lista vazia.

//Motivo da escolha:
//Validação importante: É necessário garantir que haja nomes na lista antes de realizar o sorteio.

//GERAR INDICE ALEATORIO:
// Math.random() * listaAmigos.length: Multiplica o número aleatório pelo número de itens na lista, resultando em um número entre 0 e o comprimento da lista (exclusive).

//Math.floor(): Arredonda o número para baixo, resultando em um índice válido para a lista (um número inteiro entre 0 e listaAmigos.length - 1).

//Motivo da escolha:
//Math.random(): É a maneira padrão de gerar números aleatórios em JavaScript.

//Math.floor(): Garante que o índice seja um número inteiro, adequado para acessar elementos da lista.

//listaAmigos[indiceSorteado]: Acessa o item da lista no índice gerado aleatoriamente.

//EXIBIR RESULTADO DO SORTEIO:
//document.getElementById('resultado'): Seleciona o elemento HTML com o ID resultado, que é a lista (<ul>) onde o resultado do sorteio será exibido.

//innerHTML: Define o conteúdo HTML do elemento resultado como um novo item de lista (<li>) contendo o nome do amigo sorteado.

//Motivo da escolha:
//innerHTML: É usado aqui para facilitar a inserção de um novo elemento HTML (<li>) diretamente na lista de resultados.

//Template string (``): Permite incluir variáveis (como amigoSorteado) diretamente no texto, tornando o código mais legível.
