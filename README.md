# Tverrfaglig_Ukesoppgave - Påloggingside

### Påloggingsiden er hostet på ett VM testmiljø
URL: [anjani.demo](http://anjani.demo)

<br />

# Prosjekt dokumentasjon

## Struktur
```
tverrfaglig_ukesoppgave
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
 |  |- js
 |  |  |- main.js
 |- routes
 |  |- routes.js
 |- views
 |  |- partials
 |  |  |- alert.ejs
 |  |  |- footer.ejs
 |  |  |- head.ejs
 |  |- 404.ejs
 |  |- index.ejs
 |  |- login.ejs
 |  |- secret.ejs
 |  |- signup.ejs
 |- .env
 |- .gitignore
 |- app.js
 |- package-lock.json
 |- package.json
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

<br />

## Installasjon
Du må klone prosjektet, naviger til mappen, og installer nødvendige dependencies

```
git clone -b login-site https://github.com/Anjani-ch/Tverrfaglig_Ukesoppgave.git
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
