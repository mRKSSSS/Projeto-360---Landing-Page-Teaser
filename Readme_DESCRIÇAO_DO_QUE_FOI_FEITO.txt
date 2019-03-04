======================================
Equipa 1 - Volvo XC40 - Front End
======================================
======================================
Landing Page - Fase Teaser da Campanha
======================================

Informa��o Importante:
=====================
Nesta pasta est�o presentes 3 vers�es desta p�gina (v1, v2 e v3):
	- A v1 foi uma vers�o inicial realizada para testar o conceito 
	com a equipa de trabalho e mostrar ao cliente na apresenta��o, 
	enquando ainda n�o existia design final para a p�gina.
	-> Para aceder � V1: tease-fullpage-v1.html

	- A v2 � a vers�o intermedia realizada seguindo o design inicial 
	e os wireframes disponibilizados ao Front End.
	-> Para aceder � V2: tease-fullpage-v2.html

	- A v3 � a vers�o final seguindo o design final.
	-> Para aceder � V3: tease-fullpage-v3.html

Objetivo principal da equipa de trabalho para esta p�gina:
==========================================================
- Criar uma Landing Page para a primeira fase da campanha, com
formato teaser, que segue linhas de design que estejam de acordo 
com o conceito criativo "O Poder do Desconhecido".
- Esta Landing Page de Tease tem um pequeno jogo/quiz onde o utilizador
vai poder descobrir o seu desconhecido!

Componentes desta Landing Page Teaser:
======================================
1. Preloader Volvo:

	- Antes da p�gina ser carregada, � mostrada uma anima��o de
	2 segundos com o logo da Volvo. A anima��o est� feita em CSS,
	e � carregada por JQuery.

2. Barra de Navega��o
	
	- Todo o site tem uma barra de navega��o fixa no topo da p�gina
	onde o ultizador pode deslocar-se para o quiz, ou de volta para 
	o topo	da p�gina. Esta barra de navega��o foi inserida utilizado 
	o Bootstrap, com custom css's para edi��o da mesma. Foi tamb�m 
	inserido um custom hamburger icon com anima��o entre a sua 
	abertura e o seu fecho.

3. Hero com Contador decrescente e input de E-mail:

	- O hero � composto por um contador que ir� estar em contagem
	decrescente at� � fase de Reveal da campanha. Na fase de
	Reveal, a landing page j� ser� outra completamente diferente,
	com informa��o relativa ao evento final.

	- O contador est� desenvolvido em plain JavaScript, com um
	setInterval para que este seja atualizado a cada 1 segundo.

	- Foi inserido um campo de input de email, onde o user
	poder� incluir o seu e-mail para receber futuramente mais
	informa��es sobre o evento final, depois de o contador chegar ao
	fim (o input para email s� est� presente na v2).

	- Existe na base do hero um scroll down realizado em JQuery, 
	onde ao ser clicado, o utilizador ir� ser levado ao proximo 
	componente do site.

4. Jogo do Desconhecido:

	- Depois do hero inicial, o user pode jogar um pequeno jogo
	onde ir� encontrar o seu desconhecido. Neste jogo, o user 
	precisa apenas de carregar nos bot�es de "certo"/"sim" 
	e "cruz"/"n�o", ou carregar no pr�prio volante da Volvo para 
	seleccionar estas mesmas op��es a cada pergunta que lhe � 
	mostrada. Ao fazer hover no volante, existe uma
	transforma��o com rota��o em CSS para o volante rodar para a
	esquerda e para a direita!

	-> Perguntas:

	- Antes da primeira pergunta, � disponibilizado um pequeno 
	"helper" para o utilizador perceber e testar como se responde
	�s perguntas utilizando os bot�es e/ou o volante da Volvo. Este
	"helper" poder� ser acedido sempre que o utilizador assim o
	desejar com um anchor para o mesmo em cada uma das perguntas, 
	e tem o formato exactamente igual ao das perguntas que t�m que
	ser respondidas.

	- Sempre que o utilizador carregar no bot�o "certo"/"sim" ou no
	volante para a direita para simular a resposta afirmativa, existe 
	uma variavel counter em JavaScript que ir� incrementar 2 unidades. 

	- Existem ao todo 10 perguntas a que o utilizador ir� ter que
	responder, e no final, existem 5 possibilidade de resposta
	que poder�o aparecer ao utilizador, dependendo do valor da
	vari�vel contador referido anteriormente.

	- Toda a funcionalidade deste componente foi realizada utilizando
	a bilbioteca do JQuery, onde � mais facil manipular os eventos
	de click e hover nos icones e volante, adicionar e remover
	classes ao icone e ao volante, fazer bind e unbind dos icones e
	do volante e realizar os fadeIn's e fadeOut's � medida que as 
	perguntas v�o sendo respondidas. Para al�m disto, s�o tamb�m
	utilizadas funcionalidades de JQuery para traversing no DOM 
	(siblings, parent, next, etc).

	- Em cada pergunta, existe a indica��o do progresso do utilizador
	em rela��o �s perguntas a que est� a responder:
		- Na vers�o V2, no topo da caixa da pergunta, existe uma 
		linha vermelha com gradiente (vermelho para branco), 
		realizada em CSS, que ir� ajudar o utilizador a perceber 
		quanto ainda falta para acabar o jogo.
		- Na vers�o V3, logo abaixo do volante, existe uma s�rie
		de caixas redondas, que s�o preenchidas a branco a cada
		pergunta que o utilizador responde.

	-> Resposta Final:

	- Por fim, ao ser respondida a 10� e ultima pergunta, ser� 
	disponibilizada ao utlizador uma frase do seu desconhecido
	de acordo com o valor da vari�vel do contador. Esta frase tem 
	tamb�m uma imagem de background associada ao tema da frase.

	- Este componente final da frase de resposta � introduzido
	no DOM dinamicamente atrav�s de JQuery. 

	- Existe neste componente final da resposta ainda a possibilidade
	de partilhar a mesma atrav�s dos icones do Facebook e Instagram.

5. Footer 

	- Por ultimo, foi introduzido no final da p�gina um footer com
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
