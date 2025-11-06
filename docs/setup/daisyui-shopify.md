
# 🪄 Instalación y Configuración de DaisyUI en un Tema de Shopify

Este documento describe el proceso para **instalar, configurar y compilar DaisyUI** dentro de un **tema de Shopify**, utilizando:
- Tailwind CSS con prefijo `t-`
- DaisyUI con prefijo `d-`
- Build local mediante **Gulp** o **Tailwind CLI**

---

## 📦 1. Prerrequisitos

Asegúrate de tener instalado en tu entorno de desarrollo:
- Node.js 18+  
- npm o pnpm  
- Acceso al código fuente de tu tema Shopify (por ejemplo: `/theme/` o `/shopify-theme/`)
- Un flujo de compilación (Gulp o Tailwind CLI)

---

## ⚙️ 2. Instalación de dependencias

Ejecuta en la raíz del proyecto:

```bash
npm install -D tailwindcss postcss autoprefixer daisyui
````

Luego inicializa la configuración de Tailwind:

```bash
npx tailwindcss init -p
```

Esto genera:

```
tailwind.config.js
postcss.config.js
```

---

## 🎨 3. Estructura de archivos recomendada

```
/shopify-theme/
│
├── assets/
│   ├── tailwind.css          # archivo fuente principal
│   ├── output.css            # CSS compilado final
│
├── src/
│   └── tailwind/
│       └── components.css    # opcional, para overrides
│
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🧩 4. Configuración de `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 't-', // Prefijo de todas las clases Tailwind
  content: [
    './**/*.liquid',
    './**/*.html',
    './**/*.js',
  ],

  theme: {
    extend: {
      colors: {
        brand: '#EC4899',
        accent: '#22D3EE',
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    prefix: 'd-', // Prefijo para las clases DaisyUI
    themes: [
      {
        playlove: {
          primary: '#8B5CF6',
          secondary: '#EC4899',
          accent: '#22D3EE',
          neutral: '#1E293B',
          'base-100': '#FFFFFF',
        },
      },
    ],
  },
}
```

---

## 🧵 5. Archivo `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 💅 6. CSS fuente (`assets/tailwind.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Puedes agregar tus overrides aquí */
```

---

## ⚡ 7. Compilación del CSS

### Opción A — Con Tailwind CLI

```bash
npx tailwindcss -i ./assets/tailwind.css -o ./assets/output.css --watch --minify
```

### Opción B — Con Gulp

Crea una tarea simple de compilación:

```js
// gulpfile.js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

gulp.task('build-css', () => {
  return gulp
    .src('assets/tailwind.css')
    .pipe(postcss([tailwindcss(), require('autoprefixer')]))
    .pipe(gulp.dest('assets/'));
});
```

Ejecuta:

```bash
gulp build-css
```

---

## 🧠 8. Integración en el tema Shopify

En tu layout principal (`layout/theme.liquid`):

```liquid
{{ 'output.css' | asset_url | stylesheet_tag }}
```

Asegúrate de **no incluir Tailwind desde CDN**, ya que el build local ya produce todo el CSS necesario con DaisyUI integrado.

---

## 🧪 9. Verificación de prefijos

Ejemplo de uso en un componente Liquid o HTML:

```liquid
<button class="d-btn d-btn-primary t-rounded-lg t-shadow-md">
  Comprar ahora
</button>
```

El resultado:

* `d-btn d-btn-primary` → estilos DaisyUI
* `t-rounded-lg t-shadow-md` → utilidades Tailwind

---

## 📊 10. Optimización de build (producción)

Cuando el tema esté listo para producción:

```bash
NODE_ENV=production npx tailwindcss -i ./assets/tailwind.css -o ./assets/output.css --minify
```

Esto eliminará todas las clases no usadas y reducirá el CSS a un tamaño mínimo.

---

## 🧱 11. (Opcional) Archivo `llms.txt` para consistencia AI

Crea en la raíz de tu dominio:

```
# playlovetoys/llms.txt
Framework: Tailwind + DaisyUI
Tailwind prefix: t-
DaisyUI prefix: d-
Theme: playlove
Allowed components: d-btn, d-card, d-alert, d-navbar, d-input, d-modal
Style policy: No inline styles. Use only t-/d- classes.
```

Esto ayuda a que los asistentes de IA generen HTML consistente con tu sistema de diseño.

---

## ✅ Resultado esperado

Al finalizar la configuración, podrás usar **Tailwind y DaisyUI en tu tema Shopify** con total aislamiento de clases, alta coherencia visual y capacidad de expansión futura sin conflictos con otras librerías.

---

**Mantenimiento recomendado:**

* No edites el CSS generado. Siempre modifica el fuente (`tailwind.css`).
* Versiona tu `tailwind.config.js` y tu `llms.txt` junto al código del tema.
* Si en el futuro agregas nuevos componentes, ejecuta nuevamente el build para actualizar el CSS.

---
