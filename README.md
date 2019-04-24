# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: async fará com que o script chamado seja carregado de forma assíncrona, assim o documento pode carregar ao mesmo tempo em que o script é carregado. Já o defer fará com que o script seja executado apenas quando o documento terminar de carregar.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Fará com que, após o carregamento feito com sucesso do script do google maps, irá chamar a função de index.js chamada initMap, que irá inicializar as configurações escolhidas.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: Isso fará com que a função initMap de index.js não seja chamada, o que não permitirá o carregamento do mapa. É necessário pelo menos uma chamada da API para criar o objeto do maps e indicando em qual div ficará este objeto (no caso a div com a id map do index.html). Isto é feito em `new google.maps.Map(document.getElementById('map'), mapOptions);`.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Uma forma que poderia fazer funcionar é adicionando antes de fechar a tag `<body>` uma tag de `<script>` escrito:
```html
window.onload = () => {
  initMap();
};
```

Isto fará com que, após o carregamento do documento, seja chamada a função initMap.

### e) Explique para que servem as seguintes tags do index.html: 
  ```
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  ```

R: A tag link irá informar ao navegador que o site é uma aplicação PWA, pois possui um arquivo manifest.json, o qual permite modificar sua aparência quando adicionada pelo usuário no celular, como título, descrição, cor da aplicação quando mostrado na lista de aplicativos ativos no celular, etc.

Já a tag meta name="theme-color" definirá a cor "tema" da aplicação quando adicionada como uma aplicação PWA. A outra tag meta name="apple-mobile-web-app-capable" informa os celulares de sistema iOS que o site é um PWA. Já que o navegador Safari não identifica através do manifest.json, é necessário avisar através de tags meta. Por último a tag meta name="apple-mobile-web-app-status-bar-style" definirá que a cor da barra da aplicação na lista de aplicativos ativos no celular com o sistema iOS será da cor preta.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não, pois não há o arquivo manifest.json no repositório da aplicação. Também não possui um arquivo js que atuará como service worker da aplicação, fazendo ela trabalhar offline.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: O método serve para executar funções ou modificar variáveis quando o componente é iniciado, normalmente um get de uma API. Há diversos outros métodos de lifecycle hooks, pela documentação atualmente há 8 funções diferentes, porém as mais importantes são a ngOnInit (normalmente se faz subscriptions de promises no início), ngOnChanges (para verificar modificações de variáveis do componente) e ngOnDestroy (onde normalmente se cancelam subscriptions de promises).

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: São tags que permitem reutilização e encapsulamento, assim podendo trabalhar diversas padronizações e personalizações. Um componente web pode possuir diretivas, que são definidas e que alteram o comportamento ou estilo do componente. Há também o que é chamado de shadow DOM, onde as alterações de estilo no componente são encapsuladas e não afetam os outros componentes.

### c) Para que serve a tag ngFor do angular?
R: Serve para criar um laço para repetir um determinado padrão no documento (listas, grades, etc), normalmente com uma lista de objetos json.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
```
legends: Array<string> = []
```
R: Representa uma variável na qual deve ser uma lista de strings. Caso coloque qualquer outro tipo (número, booleano, etc) retornará um erro.

### e) Como funciona a api Events do Ionic? Para que serve?
R: São eventos espefícios de componentes do Ionic, que servem para tornar os componentes reativos e assim poder se comunicar com as funções localizadas em *.page.ts.

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizá-las?
R: flexbox é um tipo novo do CSS que permite criar grades que ajustam conteúdos em linhas e colunas que facilitam a criação de layouts responsivos. As tags servem para facilitar isto para o desenvolvedor, não tendo que alterar diretamente em uma folha de estilo e assim podendo padronizar os layouts pelas páginas. 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R: O primeiro problema que identifiquei foram as vulnerabilidades que o npm identificou, com a seguinte mensagem:
```
found 71 vulnerabilities (2 low, 40 moderate, 29 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

Depois, a primeira página que me deparo é de erro com a API, "cannot get /"

Depois me deparo com um erro no terminal:
```
ERROR in src/app/home/home.page.ts(2,10): error TS2724: Module '"C:/Users/Giordanna/repos/avaliacoes-frontend/devops/node_modules/@ionic/angular/dist/index"' has no
exported member 'LoadingControlle'. Did you mean 'LoadingController'?
src/app/home/home.page.ts(15,31): error TS2304: Cannot find name 'LoadingController'.
src/app/home/home.page.ts(29,9): error TS2663: Cannot find name 'dismissLoading'. Did you mean the instance member 'this.dismissLoading'?

i ｢wdm｣: Failed to compile.
```

Isso indica erro de digitação na linha 2 de `home.page.ts` de `LoadingControlle` e falta do `this` em `dismissLoading` na linha 29.

Depois de corrigir isso, algumas imagens não estavam carregando, a qualidade das imagens não estava boa, e tinha espaço em branco na parte de baixo das imagens.

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

1) Primeiro de tudo as vulnerabilidades devem ser corrigidas com urgência, pois expõem a aplicação a riscos
2) Erro de digitação na linha 2 de `home.page.ts` de `LoadingControlle` e falta do `this` em `dismissLoading` na linha 29 impossibilitam que a aplicação funcione
3) Algumas imagens não estão carregando
4) A qualidade das imagens não está boa
5) Espaço em branco na parte de baixo das imagens
6) Corrigir atualizações que podem quebrar a aplicação

Primeiro realiza-se um `npm audit fix` para corrigir as vulnerabilidades, sobrando só as que poderiam quebrar a aplicação. Depois que a aplicação estiver funcionando normalmente será feito o reparo manual das outras vulnerabilidades para assim saber se foi uma mudança que quebrou algo da aplicação e se sim onde quebrou.

Segundo deve-se resolver os erros de digitaçãoem `home.page.ts`. Isso faz a aplicação carregar normalmente.

Terceiro, apesar da aplicação estar funcionando, há algumas imagens que não estão carregando. Após visitar o site que contém a API, viu-se que a a forma que era acessada a API estava desatualizada. Porém, mesmo atualizando para `https://picsum.photos/id/${salt}/200/200` ainda não corrige o problema. Verificou-se que a API já possui um endpoint de imagens aleatórias, e também basta um parâmetro para gerar imagens quadradas (`https://picsum.photos/200`). Para mostrar múltiplas imagens aleatórias é necessário colocar no final `?random=1`, sendo assim só precisa gerar uma lista de números de 1 até 500, e todas as imagens serão aleatórias.

Quarto, a qualidade das imagens não está boa. As imagens geradas são de 200x200, mas o CSS faz ela se tornar 300x300, gerando distorção da qualidade. Apenas mudas o endpoint para `https://picsum.photos/300?random=` resolverá o problema.

Quinto, há um espaço em branco das imagens. Isso é por conta delas serem inline-block. Usando flexbox elas ficam normal.

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: A ordem se deu por conta de ser importante resolver as diversas vulnerabilidades, porém que não quebraria a aplicação, pois a prioridade é fazer ela voltar a funcionar urgentemente. Utilizar `npm audit fix` é simples, rápido, e cobre boa parte das vulnerabilidades a serem resolvidas.

Depois a correção dos erros de digitação é rápida e faz com que a aplicação volte a funcionar como deveria, já é um impacto positivo para os usuários. Porém ainda havia o problema de algumas imagens não aparecerem.

O terceiro passo foi o mais complicado, pois foi necessário refazer a estrutura do componente em home.page.html e home.page.ts. A mudança para o usuário foi mínima, mas que resolvia o problema de algumas imagens estarem quebradas.

Por fim, o quarto e quinto passos foram mais por questão estética, mas foram fáceis de consertar e gera um impacto relativamente positivo para o usuário.

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: await fará com que a função assíncrona espere pela execução das promises dentro da função. Assim elas podem ser usadas ou como uma promise ou chamada normalmente por uma outra função async.

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: Isso permite usar funções assíncronas como promises.

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R: A lib serve para facilitar manipulação de objetos, arrays, strings, etc em JavaScript. Em home.page.ts ela é utilizada para verificar se um determinado valor é null ou undefined com a função _.isNil.
