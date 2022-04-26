# Tverrfaglig_Ukesoppgave
Tverrfaglig_Ukesoppgave i VG2 Informasjonsteknologi

### Påloggingsiden er hostet på ett VM testmiljø
URL: [anjani.ikt-fag.no](http://anjani.ikt-fag.no)

<br />

# Prosjekt dokumentasjon

## Struktur
```
Tverrfaglig_Ukesoppgave
 |- config
 |  |- db.js
 |  |- passport.js
 |- controllers
 |  |- authController.js
 |  |- bcryptController.js
 |  |- viewController.js
 |- middleware
 |  |- auth.js
 |- models
 |  |- User.js
 |- public
 |  |- css
 |  |  |- styles.css
 |  |- img
 |  |  |- passport-logo.png
 |  |- js
 |  |  |- main.js
 |- routes
 |  |- routes.js
 |- views
 |  |- partials
 |  |  |-docs
 |  |  | |- passport-local
 |  |  | |  |- authenticate.ejs
 |  |  | |  |- configuration.ejs
 |  |  | |  |- implementation.ejs
 |  |  | |  |- localStrategy-params.ejs
 |  |  | |  |- localStrategy-request.ejs
 |  |  | |  |- middleware-func.ejs
 |  |  | |  |- middleware-route.ejs
 |  |  | |- passport-local.ejs
 |  |  |- alert.ejs
 |  |  |- footer.ejs
 |  |  |- head.ejs
 |  |  |- navbar.ejs
 |  |- 404.ejs
 |  |- docs.ejs
 |  |- index.ejs
 |  |- login.ejs
 |  |- secret.ejs
 |  |- signup.ejs
 |  |- summary.ejs
 |- .env
 |- .gitignore
 |- app.js
 |- package-lock.json
 |- package.json
 |- README.md
```

## Dependencies
<ul>
    <li>bcryptjs</li>
    <li>connect-flash</li>
    <li>dotenv</li>
    <li>ejs</li>
    <li>email-validator</li>
    <li>express</li>
    <li>express-session</li>
    <li>mongoose</li>
    <li>passport</li>
    <li>passport-local</li>
</ul>

=======
### Dokumentasjon nettsiden er hostet på en VM
URL: [anjani.ikt-fag.no](http://anjani.ikt-fag.no)

### Dette prosjektet inneholder 3 brancher
main => intro til prosjekt, hoved nettside til oppgaven, dokumentasjon av produksjonsløsning, og prosjektmetodikk
>>>>>>> 73a3642a9d06a0f4b660a4ce49a3c6c616e559f2
<br />

## Installasjon
Du må klone prosjektet, naviger til mappen, og installer nødvendige dependencies

```
git clone https://github.com/Anjani-ch/Tverrfaglig_Ukesoppgave.git
cd Tverrfaglig_Ukesoppgave
npm install
```

<br />

## Development
```
npm run dev
```
Det vil startes en local server med nettsiden på [localhost:3000](http://localhost:3000)

<br />

## Produksjon
```
npm run start
```

# Produksjonsløsning
| Name        | Desc                          | IP            | Address           |
|-------------|-------------------------------|---------------|-------------------|
| anjanilocal | Web Server | 10.12.1.69/24 | anjani.ikt-fag.no |

# Valg av produksjonsløsning
Ubuntu Server: Enkel oppsett av web server, og brannmur. Jeg har erfaring med det fra før.

# Valg av utviklingsløsning
Node JS: Jeg valgte å bruke Node JS fordi jeg ville følge MVC struktur og kunne ha ryddig struktur i koden jeg skrev. Jeg ville også benytte bruker av template engine for å dele HTML-en min inn i flere filer for å gjøre det lettere å jobbe med.

# Prosjektmetodikk
Prosjektmetodikk er viktig fordi man har en struktur på det man skal gjøre. Man kan fordele oppgaver, også tar man det man vil løse istedenfor at man må prøve å tenke ut et sted å starte. Man ser også progresjon i det man gjør som kan gjøre det motiverende å jobbe videre, og hvis man f.eks jobber med flere folk så kan man se hva som trengs å jobbe mer med individuelt, eller som en gruppe. Hvis man f.eks ser at et problem har stått på "in progress" i noen dager så kan man tenke at man trenger flere som jobber med det problemet, eller hvis det er mange oppgaver som står igjen som f.eks er om autentisering, så kan gruppen se det også vil alle prioritere det ved å velge relevante oppgaver til det de henger bak etter.
