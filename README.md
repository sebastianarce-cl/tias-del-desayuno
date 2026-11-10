# Fundación Tías del Desayuno — sitio web

Sitio estático (HTML + CSS + JS), sin dependencias ni compilación.

## Ver en tu computador
Abre la carpeta en Visual Studio Code → clic derecho en `index.html` → **Open with Live Server** (o doble clic en `index.html`).

## Publicar gratis con GitHub Pages
1. Crea una cuenta en https://github.com y un repositorio **público** nuevo (por ejemplo `tias-del-desayuno`), vacío.
2. En la carpeta del proyecto:
   ```bash
   git init -b main
   git add .
   git commit -m "Sitio web Fundación Tías del Desayuno"
   git remote add origin https://github.com/TU_USUARIO/tias-del-desayuno.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. En 1–2 minutos queda en: `https://TU_USUARIO.github.io/tias-del-desayuno/`

Si quieres la dirección más corta `https://TU_USUARIO.github.io/`, llama al repositorio exactamente `TU_USUARIO.github.io`.

## Editar contenido
- Textos de actividades, proyectos y sueños: arriba de `script.js`.
- Textos fijos (inicio, servicios, donación): `index.html`.
- Fotos: carpeta `img/` (mismo nombre de archivo para reemplazarlas).
