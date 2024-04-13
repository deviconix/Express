Opis

Wykorzystując Node.js, Express.js, MongoDB oraz interface Mongoose wykonaj następujące zadanie.

Zaimportuj do bazy danych kolekcję z danymi o użytkownikach.

Napisz aplikację, która wyświetli tabelę z danymi o użytkownikach zawierającą:

1. Imię i nazwisko
2. Pełne dane adresowe
3. Aktywny link do strony WWW użytkownika

Jako bazę do wyświetlania danych możesz użyć template engine Handlebars

---

> Projekt wykorzystuje bazę danych mongoDB

> Wszystkie polecenia wykonuję w katalogu głównym projektu w terminalu [ConEmu](https://conemu.github.io/)

## cli (na razie działa w takiej składni)

#### import collection

```bash
bash ./cli/importCollection/user.sh
```

## init project

```
npm init -y
```

## w projekcie wykorzystywane są zależności

- express
- express-handlebars
- mongoose
- mongoose-lean-virtuals
- bootstrap 5 (łączy się w szablonie)

Instalowanie pakietów

```
npm i express express-handlebars mongoose mongoose-lean-virtuals
```

index.js

```javascript
const express = require('express');
const app = express();

// route root
app.get('/', function (req, res) {
  res.send('Hello world :-)');
});

// run server
const APP_PORT = 8080;
app.listen(APP_PORT, function () {
  console.log('Listen port :', APP_PORT);
  console.log('Server Run ...');
});
```
