# INSTRUÇÕES PARA USO

1 - Verifique se o node está instalado em sua máquina através do comando:
  ```javascript
  node --version
  ```
 Observação: caso o mesmo não esteja instalo, será necessário a sua instalação, para isso basta seguir às instruções descritas no site oficial [https://nodejs.org/en/](https://nodejs.org/en/).

2 - Realizar um git clone do projeto para baixar em sua máquina, através do comando:
  ```javascript
  git clone https://github.com/JuniorDuarte93/pegadaCarbono.git
  ```
  
3 - Abrir o prompt de comando Windows ou Linux e navegar até a pasta do projeto. (........\pegadaCarbono) e baixar os módulos no node, através do comando:
   ```javascript
   npm install
   ```
4 - A essa altura já temos o projeto completo em nossa máquina, para inicicar o mesmo basta usarmos o comando:
```javascript
  node index.js
  ```
Após esse comando iremos receber a mensagem "Iniciado" isso indica que tudo deu certo e já podemos acessar o nosso servidor localmente através do endereço 
[http://localhost:3000](http://localhost:3000)

5 - Agora chegou a hora de realizarmos o teste da nossa API para isso podemos usar o Postman ou algum outro programa de sua preferência.

5.1 - Faremos a requisição ao nosso servidor local utilizando o método POST através do endereço "http://localhost:3000/pegadaCarbono".

5.2 - No Headers utilizamos o Content-Type - Application/json

5.3 - No Body usaremos o corpo abaixo, onde cada item representa um parâmetro da requisção para que o servidor calcule o gasto total de Co2.
<p>{</P>
	<p>"energiaKwhMes": 1,</p>
	<p>"gasCozinhaKgMes":1,</p>
	<p>"gasNaturalM3Mes":1,</p>
	<p>"veicPGasolinaKmMes":1,</p>
	<p>"veicMGasolinaKmMes":1,</p>
	<p>"veicGGasolinaKmMes":1,</p>
	<p>"motoGasolinaKmMes":1,</p>
	<p>"veicPEtanolKmMes":1,</p>
	<p>"veicMEtanolKmMes":1,</p>
	<p>"veicGEtanolKmMes":1,</p>
	<p>"motoEtanolKmMes":0,</p>
	<p>"carroDieselKmMes":1,</p>
	<p>"onibusDieselUrbanoKmMes":1,</p>
	<p>"onibusDieselRodoviaKmMes":1,</p>
	<p>"carroGnvKmMes":1,</p>
	<p>"viagemNacionalKmMes":1,</p>
	<p>"viagemInternacionalKmMes":1,</p>
	<p>"aterroResiduosKgDia":1</p>
<p>}</p>

5.4 - Realizamos um Send e verificamos a resposta obtida do nosso servidor que será o quantidade de Co2 de cada item e no final a quantidade total gasta de Co2.
