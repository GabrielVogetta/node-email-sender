# Node Email Sender
## Api para enviar emails através do email react.email.sender@gmail.com

## Desenvolvido com:
- <a href='https://nodejs.org/en/'><img width='20px' align='center' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'/> <strong style='color: #fdfdfd;'>NodeJS</strong></a>
- <a href='https://nodemailer.com/about/'><img width='20px' align='center' src='https://github.com/nodemailer.png'/> <strong style='color: #fdfdfd;'>Nodemailer</strong></a>

## Sobre
Meu primeiro projeto em NodeJs, utilizando os módulos <a href='https://nodejs.org/api/http.html'>http</a> e <a href=''>nodemailer</a>.<br>
A aplicação possui uma página principal de apresentação em html e lida com o módulo <a href='https://nodejs.org/api/fs.html'>file system</a> do NodeJs.<br>
Deploy foi feito no <a href='https://www.heroku.com/'>heroku</a>, utilizando <a href='https://devcenter.heroku.com/articles/heroku-cli'>heroku cli</a>.

Node Email Sender é um projeto simples, mas um grande passo para entender como é o javascript no back end, seja criando um http server e retornando um 'hello world!' ou lendo um arquivo html. <br>
Mas também lidando com respostas, métodos http, status http, cabeçalho de resposta e corpo de requisição.

Também foi importante para criar experiência com aplicações externas como a api do gmail e o heroku, aprendendo a fazer o primeiro deploy no heroku e criando aplicação no <a href='https://cloud.google.com/'>google cloud</a> para autenticar com <a href='https://www.treinaweb.com.br/blog/o-que-e-oauth-2'>OAuth2</a>.

Por fim, fui introduzido ao conceito de controllers e routes, criando as rotas:
- <a href='https://node-email-sender-gves.herokuapp.com/'>/</a> : página html de introdução
- <a href='https://node-email-sender-gves.herokuapp.com/sendEmail'>/sendEmail</a> : api
- <a href='https://node-email-sender-gves.herokuapp.com/notFound'>not found</a> : rotas não encontradas

e controllers para responder requisições:
- <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400'>inválidas</a> : sem body ou sem email do destinatário
- <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405'>com método não permitido</a>
- <a href='https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request'>de comprovação CORS</a>
- <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201'>bem sucedida</a>