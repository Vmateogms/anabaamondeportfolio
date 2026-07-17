# ABP - PORTFOLIO

[🇪🇸 Español](#español) | [🇬🇧 English](#english) | [🇩🇪 Deutsch](#deutsch)

Live site: [anabaamondeperez.com](https://anabaamondeperez.com)


---

#Español

### 🚀 Sobre el proyecto

Portfolio fotografico persona constuido con **Astro**🚀 en modo **SSR (Server Side Rendering)**. El contenido (Biografía, fotos, proyectos) se sirve dináminacente desde un backend **PocketBase** configurable mediante un archivo .env, 
esto significa que al actualizar fotos o textos desde el panel de administración, los cambios se reflejan  en la web al instante, sin necesidad de recompilar ni desplegar nada.

### 🛠️ Stack técnico

- **[Astro](https://astro.build/)** (modo `server`, adapter `@astrojs/node`)
- **[PocketBase](https://pocketbase.io/)** como backend/CMS (base de datos + API + panel admin)
- **Node.js** como runtime del servidor
- **PM2** para mantener los procesos vivos en producción
- **Nginx** como proxy inverso
- **Let's Encrypt / Certbot** para HTTPS


### 📁 Estructura del proyecto

 
```
├── src/
│   ├── pages/
│   │   └── [lang]/
│   │   │ 
│   │   └── index.astro        
│   ├── components/
│   └── layouts/
├── public/
├── astro.config.mjs
├── .env                    
└── package.json
```

### Variables de entorno 

Crea un archivo ` .env` en la raiz del proyecto

```
PUBLIC_POCKETBASE_URL=https://tupocketbase.com
KLLUEVABACARDI_URL=https://www.instagram.com/@yourinstagram/
```

### 🚀 Desarrollo local
 
```bash
npm install
npm run dev
```
La web quedará disponible en `http://localhost:4321`.

### 📄 Licencia
 
Todos los derechos reservados © Ana Baamonde. Este código es de uso privado salvo indicación contraria.
 
---


## English
 
###  About the project
 
Personal photography portfolio built with **Astro** 🚀 in **SSR (Server-Side Rendering)** mode. Content (bio, photos, projects) is served dynamically from a **PocketBase** backend , meaning that whenever photos or text are updated from the admin panel, changes appear on the live site instantly, with no rebuild or redeploy required.
 
### 🛠️ Tech stack
 
- **[Astro](https://astro.build/)** (`server` output mode, `@astrojs/node` adapter)
- **[PocketBase](https://pocketbase.io/)** as backend/CMS (database + API + admin panel)
- **Node.js** as the server runtime
- **PM2** to keep production processes alive
- **Nginx** as reverse proxy
- **Let's Encrypt / Certbot** for HTTPS
### 📁 Project structure
 
```
├── src/
│   ├── pages/
│   │   └── [lang]/        
│   ├── components/
│   └── layouts/
├── public/
├── astro.config.mjs
├── .env                    
└── package.json
```
 
### ⚙️ Environment variables
 
Create a `.env` file in the project root:
 
```
PUBLIC_POCKETBASE_URL=https://yourpocketbase.com
INSTAGRAM_URL=https://www.instagram.com/@yourinstagram/
```
 
### 🚀 Local development
 
```bash
npm install
npm run dev
```
The site will be available at `http://localhost:4321`.
 
### 📦 Build & production deployment
 
> 💡 Since the site uses SSR, this process only needs to be repeated when the **code** changes. Content updates (photos, text) from PocketBase appear instantly, no redeploy needed.
 
### 📄 License
 
All rights reserved © Ana Baamonde. This code is for private use unless otherwise stated.
 
---

## Deutsch

### 🚀 Über das Projekt
Persönliches Fotografie-Portfolio, entwickelt mit **Astro** 🚀 im **SSR-Modus (Server Side Rendering)**. Die Inhalte (Biografie, Fotos, Projekte) werden dynamisch von einem **PocketBase**-Backend bereitgestellt, das über eine .env-Datei konfigurierbar ist.
Das bedeutet: Wenn Fotos oder Texte über das Admin-Panel aktualisiert werden, spiegeln sich die Änderungen sofort auf der Website wider – ohne dass ein erneutes Kompilieren oder Deployment nötig ist.

### 🛠️ Technischer Stack
- **[Astro](https://astro.build/)** (Modus `server`, Adapter `@astrojs/node`)
- **[PocketBase](https://pocketbase.io/)** als Backend/CMS (Datenbank + API + Admin-Panel)
- **Node.js** als Server-Runtime
- **PM2** zur dauerhaften Ausführung der Prozesse in der Produktion
- **Nginx** als Reverse-Proxy
- **Let's Encrypt / Certbot** für HTTPS

### 📁 Projektstruktur

```
├── src/
│   ├── pages/
│   │   └── [lang]/
│   │   │ 
│   │   └── index.astro        
│   ├── components/
│   └── layouts/
├── public/
├── astro.config.mjs
├── .env                    
└── package.json
```

### Umgebungsvariablen
Erstelle eine `.env`-Datei im Stammverzeichnis des Projekts

```
PUBLIC_POCKETBASE_URL=https://tupocketbase.com
INSTAGRAM_URL=https://www.instagram.com/@yourinstagram/
```

### 🚀 Lokale Entwicklung

```bash
npm install
npm run dev
```
Die Website ist dann unter `http://localhost:4321` erreichbar.

### 📄 Lizenz

Alle Rechte vorbehalten © Ana Baamonde. Dieser Code ist ausschließlich für den privaten Gebrauch bestimmt, sofern nicht anders angegeben.

