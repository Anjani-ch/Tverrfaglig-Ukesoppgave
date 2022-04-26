# Tverrfaglig_Ukesoppgave
Tverrfaglig_Ukesoppgave i VG2 Informasjonsteknologi

### Dette prosjektet inneholder 3 brancher
main => intro til prosjekt, hoved nettside til oppgaven, dokumentasjon av produksjonsløsning, og prosjektmetodikk
<br />
docs-site => dokumentasjon nettside til passport js, dokumentasjon av utviklingsløsning for nettsiden
<br />
login-site => demo login side med passport js, dokumentasjon av utviklingsløsninger for nettsiden

<br />

# Prosjektmetodikk
Prosjektmetodikk er viktig fordi man har en struktur på det man skal gjøre. Man kan fordele oppgaver, også tar man det man vil løse istedenfor at man må prøve å tenke ut et sted å starte. Man ser også progresjon i det man gjør som kan gjøre det motiverende å jobbe videre, og hvis man f.eks jobber med flere folk så kan man se hva som trengs å jobbe mer med individuelt, eller som en gruppe. Hvis man f.eks ser at et problem har stått på "in progress" i noen dager så kan man tenke at man trenger flere som jobber med det problemet, eller hvis det er mange oppgaver som står igjen som f.eks er om autentisering, så kan gruppen se det også vil alle prioritere det ved å velge relevante oppgaver til det de henger bak etter.

# Produksjonsløsning
## IP Plan
| Name        | Desc                          | IP            | Address           |
|-------------|-------------------------------|---------------|-------------------|
| Elev-LAB-01 | Gateway                       | 10.12.1.1/24  |                   |
| DHCP-DC     | Domain Controller, DHCP, DNS  | 10.12.1.80/24 |                   |
| anjanilocal | Documentation site web server | 10.12.1.69/24 | anjani.ikt-fag.no |
| anjanidemo  | Demo site web server          | 10.12.1.85/24 | anjani.local      |
|             |                               |               |                   |
|             |                               |               |                   |
| DHCP Scope  |                               |               |                   |
| Name        | Main                          |               |                   |
| Desc        | Scope for client devices      |               |                   |
| Mask        | 255.255.255.0                 |               |                   |
| IP Range    | 10.12.1.100 - 10.12.1.200     |               |                   |
|             |                               |               |                   |

# Valg av produksjonsløsning
Windows Server: Enkel oppsett av DHCP og DNS. Jeg har erfaring med det fra før.
<br />
Ubuntu Server: Enkel oppsett av web server, og brannmur. Jeg har erfaring med det fra før.

# Valg av utviklingsløsning
Node JS: Jeg valgte å bruke Node JS fordi jeg ville følge MVC struktur og kunne ha ryddig struktur i koden jeg skrev. Jeg ville også benytte bruker av template engine for å dele HTML-en min inn i flere filer for å gjøre det lettere å jobbe med.
