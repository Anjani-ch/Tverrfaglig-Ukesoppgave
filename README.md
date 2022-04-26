# Tverrfaglig_Ukesoppgave - Dokumentasjon nettside

### Dokumentasjon nettsiden er hostet på en VM
URL: [anjani.ikt-fag.no](http://anjani.ikt-fag.no)

<br />

# Prosjekt dokumentasjon

## Struktur
```
Tverrfaglig_Ukesoppgave
 |- controllers
 |  |- viewController.js
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
 |  |  |- docs
 |  |  |  |- passport-local
 |  |  |  |  |- authenticate.ejs
 |  |  |  |  |- configuration.ejs
 |  |  |  |  |- implementation.ejs
 |  |  |  |  |- localStrategy-params.ejs
 |  |  |  |  |- localStrategy-request.ejs
 |  |  |  |  |- middleware-func.ejs
 |  |  |  |  |- middleware-route.ejs
 |  |  |  |- passport-local.ejs
 |  |  |- footer.ejs
 |  |  |- head.ejs
 |  |  |- navbar.ejs
 |  |- 404.ejs
 |  |- docs.ejs
 |  |- index.ejs
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
    <li>dotenv</li>
    <li>ejs</li>
    <li>express</li>
</ul>

<br />

## Installasjon
Du må klone prosjektet, naviger til mappen, og installer nødvendige dependencies

```
git clone -b docs-site https://github.com/Anjani-ch/Tverrfaglig_Ukesoppgave.git
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