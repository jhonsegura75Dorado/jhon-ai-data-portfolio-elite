# Jhon Segura · Data & AI Portfolio

Portafolio profesional construido con **React, Tailwind CSS y GitHub Pages** para comunicar impacto, arquitectura y criterio técnico en menos tiempo.

**Sitio:** [jhonsegura75dorado.github.io/jhon-ai-data-portfolio](https://jhonsegura75dorado.github.io/jhon-ai-data-portfolio/)

La narrativa prioriza tres casos principales —segmentación 360, forecasting transaccional y agente SQL— y mantiene el resto como evidencia complementaria filtrable.

- Problemas reales identificados.
- Iniciativas propuestas por criterio propio.
- Soluciones construidas.
- Stack técnico utilizado.
- Impacto y mejora visible por proyecto.
- Estudios, credenciales y reconocimientos.
- Publicaciones técnicas y enlaces verificables.
- Confidencialidad explícita para casos del sector financiero.

---

## 1. Tecnologías utilizadas

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- GitHub Pages

---

## 2. Estructura del proyecto

```text
jhon-ai-data-portfolio/
├── public/
│   └── profile-photo.svg
├── src/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Methodology.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SocialProof.jsx
│   │   ├── TechStack.jsx
│   │   └── Books.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── books.js
│   │   └── tools.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 3. Cómo ejecutarlo localmente

Instala Node.js y luego ejecuta:

```bash
npm install
npm run dev
```

Abre el enlace local que aparece en la terminal, normalmente:

```text
http://localhost:5173/
```

---

## 4. Cómo personalizar información

### Editar proyectos

Abre:

```text
src/data/projects.js
```

Cada proyecto tiene esta estructura:

```javascript
{
  title: 'Nombre del proyecto',
  category: 'Dashboards',
  status: 'Producto analítico',
  problem: 'Problema identificado...',
  initiative: 'Qué propusiste por iniciativa propia...',
  solution: 'Solución construida...',
  stack: ['Python', 'SQL', 'Streamlit'],
  impact: 'Impacto generado o esperado...',
  improvement: 'Mejora visible o valor que aporta el proyecto...',
  visual: 'Tipo de visualización usada',
  github: 'https://github.com/...'
}
```

### Editar herramientas y logos

Abre:

```text
src/data/tools.js
```

### Editar estudios, credenciales y reconocimientos

Abre:

```text
src/components/SocialProof.jsx
```

### Cambiar enlaces de GitHub, LinkedIn o correo

Revisa estos componentes:

```text
src/components/Hero.jsx
src/components/Contact.jsx
```

### Activar la descarga del CV

El archivo actual `public/cv-jhon-segura.pdf` es solo un marcador de posición. Antes de agregar un botón de descarga, reemplázalo por el PDF real y valida que abra correctamente en la versión publicada.

---

## 5. Cómo desplegar gratis en GitHub Pages

### Paso 1: Crear repositorio en GitHub

Crea un repositorio, por ejemplo:

```text
jhon-ai-data-portfolio
```

### Paso 2: Subir el código

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primer portafolio web"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/jhon-ai-data-portfolio.git
git push -u origin main
```

### Paso 3: Desplegar

Ejecuta:

```bash
npm run deploy
```

Esto crea una rama llamada `gh-pages` y publica la carpeta `dist`.

### Paso 4: Activar GitHub Pages

En GitHub:

```text
Settings → Pages → Build and deployment → Source: Deploy from a branch
Branch: gh-pages / root
Save
```

Tu sitio quedará en una URL parecida a:

```text
https://TU_USUARIO.github.io/jhon-ai-data-portfolio/
```

---

## 6. Diseño de esta versión

- Hero de posicionamiento con propuesta de valor específica para Data & AI.
- Jerarquía clara: tres casos estrella y proyectos secundarios bajo demanda.
- Casos estructurados por problema, decisión, sistema construido y valor.
- Navegación reducida y optimizada para móvil y teclado.
- Stack técnico presentado por capacidades, no como colección de logos.
- SEO, metadatos sociales, datos estructurados y foco visible accesible.
- CTA directo a correo, LinkedIn y GitHub; el CV se habilita únicamente cuando exista un PDF válido.

---

## 7. Recomendaciones antes de publicar

- Reemplaza `public/profile-photo.svg` por una foto profesional real.
- Revisa cada mejora visible en `src/data/projects.js` para que coincida exactamente con lo que puedes defender en entrevista.
- Agrega imágenes anonimizadas de tus dashboards o arquitecturas.
- Enlaza artículos de LinkedIn y demos públicas si las tienes.
- Mantén tus proyectos como casos de valor: problema, iniciativa, solución, impacto y mejora.

---

## 8. Mensaje central del portafolio

> No solo ejecuto requerimientos. Detecto problemas, propongo soluciones y construyo productos de datos con impacto.


## Solución si aparece error con lucide-react o Vite

Este proyecto usa versiones estables fijadas en `package.json` para evitar errores por paquetes `latest`.

Si ya habías instalado dependencias antes, limpia la instalación local y vuelve a instalar:

```bash
rmdir /s /q node_modules
del package-lock.json
npm cache clean --force
npm install
npm run dev
```

Si usas PowerShell y `npm` está bloqueado, abre la terminal como **Command Prompt / CMD** dentro de Visual Studio Code.
