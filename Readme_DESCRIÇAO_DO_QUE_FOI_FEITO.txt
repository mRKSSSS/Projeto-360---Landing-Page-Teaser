======================================
Equipa 1 - Volvo XC40 - Front End
======================================
======================================
Landing Page - Fase Teaser da Campanha
======================================

Informação Importante:
=====================
Nesta pasta estão presentes 3 versões desta página (v1, v2 e v3):
	- A v1 foi uma versão inicial realizada para testar o conceito 
	com a equipa de trabalho e mostrar ao cliente na apresentação, 
	enquando ainda não existia design final para a página.
	-> Para aceder à V1: tease-fullpage-v1.html

	- A v2 é a versão intermedia realizada seguindo o design inicial 
	e os wireframes disponibilizados ao Front End.
	-> Para aceder à V2: tease-fullpage-v2.html

	- A v3 é a versão final seguindo o design final.
	-> Para aceder à V3: tease-fullpage-v3.html

Objetivo principal da equipa de trabalho para esta página:
==========================================================
- Criar uma Landing Page para a primeira fase da campanha, com
formato teaser, que segue linhas de design que estejam de acordo 
com o conceito criativo "O Poder do Desconhecido".
- Esta Landing Page de Tease tem um pequeno jogo/quiz onde o utilizador
vai poder descobrir o seu desconhecido!

Componentes desta Landing Page Teaser:
======================================
1. Preloader Volvo:

	- Antes da página ser carregada, é mostrada uma animação de
	2 segundos com o logo da Volvo. A animação está feita em CSS,
	e é carregada por JQuery.

2. Barra de Navegação
	
	- Todo o site tem uma barra de navegação fixa no topo da página
	onde o ultizador pode deslocar-se para o quiz, ou de volta para 
	o topo	da página. Esta barra de navegação foi inserida utilizado 
	o Bootstrap, com custom css's para edição da mesma. Foi também 
	inserido um custom hamburger icon com animação entre a sua 
	abertura e o seu fecho.

3. Hero com Contador decrescente e input de E-mail:

	- O hero é composto por um contador que irá estar em contagem
	decrescente até à fase de Reveal da campanha. Na fase de
	Reveal, a landing page já será outra completamente diferente,
	com informação relativa ao evento final.

	- O contador está desenvolvido em plain JavaScript, com um
	setInterval para que este seja atualizado a cada 1 segundo.

	- Foi inserido um campo de input de email, onde o user
	poderá incluir o seu e-mail para receber futuramente mais
	informações sobre o evento final, depois de o contador chegar ao
	fim (o input para email só está presente na v2).

	- Existe na base do hero um scroll down realizado em JQuery, 
	onde ao ser clicado, o utilizador irá ser levado ao proximo 
	componente do site.

4. Jogo do Desconhecido:

	- Depois do hero inicial, o user pode jogar um pequeno jogo
	onde irá encontrar o seu desconhecido. Neste jogo, o user 
	precisa apenas de carregar nos botões de "certo"/"sim" 
	e "cruz"/"não", ou carregar no próprio volante da Volvo para 
	seleccionar estas mesmas opções a cada pergunta que lhe é 
	mostrada. Ao fazer hover no volante, existe uma
	transformação com rotação em CSS para o volante rodar para a
	esquerda e para a direita!

	-> Perguntas:

	- Antes da primeira pergunta, é disponibilizado um pequeno 
	"helper" para o utilizador perceber e testar como se responde
	às perguntas utilizando os botões e/ou o volante da Volvo. Este
	"helper" poderá ser acedido sempre que o utilizador assim o
	desejar com um anchor para o mesmo em cada uma das perguntas, 
	e tem o formato exactamente igual ao das perguntas que têm que
	ser respondidas.

	- Sempre que o utilizador carregar no botão "certo"/"sim" ou no
	volante para a direita para simular a resposta afirmativa, existe 
	uma variavel counter em JavaScript que irá incrementar 2 unidades. 

	- Existem ao todo 10 perguntas a que o utilizador irá ter que
	responder, e no final, existem 5 possibilidade de resposta
	que poderão aparecer ao utilizador, dependendo do valor da
	variável contador referido anteriormente.

	- Toda a funcionalidade deste componente foi realizada utilizando
	a bilbioteca do JQuery, onde é mais facil manipular os eventos
	de click e hover nos icones e volante, adicionar e remover
	classes ao icone e ao volante, fazer bind e unbind dos icones e
	do volante e realizar os fadeIn's e fadeOut's à medida que as 
	perguntas vão sendo respondidas. Para além disto, são também
	utilizadas funcionalidades de JQuery para traversing no DOM 
	(siblings, parent, next, etc).

	- Em cada pergunta, existe a indicação do progresso do utilizador
	em relação às perguntas a que está a responder:
		- Na versão V2, no topo da caixa da pergunta, existe uma 
		linha vermelha com gradiente (vermelho para branco), 
		realizada em CSS, que irá ajudar o utilizador a perceber 
		quanto ainda falta para acabar o jogo.
		- Na versão V3, logo abaixo do volante, existe uma série
		de caixas redondas, que são preenchidas a branco a cada
		pergunta que o utilizador responde.

	-> Resposta Final:

	- Por fim, ao ser respondida a 10ª e ultima pergunta, será 
	disponibilizada ao utlizador uma frase do seu desconhecido
	de acordo com o valor da variável do contador. Esta frase tem 
	também uma imagem de background associada ao tema da frase.

	- Este componente final da frase de resposta é introduzido
	no DOM dinamicamente através de JQuery. 

	- Existe neste componente final da resposta ainda a possibilidade
	de partilhar a mesma através dos icones do Facebook e Instagram.

5. Footer 

	- Por ultimo, foi introduzido no final da página um footer com
	links para os principais conteudos do site oficial da Volvo
	(pedir proposta, configurador, etc.), e com links para as
	redes sociais.

Resumo das tecnologias utilizadas nesta Lading Page Teaser:
===========================================================
- HTML
- CSS / SASS
- JavaScript
- JQuery
- Bootstrap
