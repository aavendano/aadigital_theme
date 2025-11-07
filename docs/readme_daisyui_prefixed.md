# README — Configuración de Tailwind CSS + daisyUI 5 con prefijo `a:`

Este proyecto está configurado para utilizar Tailwind CSS v4 junto con daisyUI 5, usando un **prefijo personalizado `a:`** en todas las clases. Esto asegura aislamiento, evita conflictos con otras librerías y mantiene consistencia en proyectos complejos o generados por múltiples fuentes (incluyendo asistentes AI).

---

## 📦 Instalación

1. **Instalar dependencias**:

```bash
npm install -D tailwindcss @tailwindcss/cli daisyui
```

2. **Archivo de entrada CSS** (ej: `src/input.css`):

```css
@import "tailwindcss";
@plugin "daisyui" {
  prefix: a:;
}
```

3. **Compilar el CSS**:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

4. **Usar en HTML**:

```html
<link rel="stylesheet" href="./dist/output.css" />
```

---

## ⚙️ Tema personalizado opcional

Puedes definir un tema visual directamente en el CSS:

```css
@plugin "daisyui/theme" {
  name: "playlovetoys";
  default: true;
  color-scheme: light;
  --color-primary: hsl(268, 41%, 33%);
  --color-secondary: #F4436C;
  --color-accent: #0C7489;
  /* ...otros colores y variables... */
}
```

> El uso de variables como `--color-primary` permite adaptar visualmente todos los componentes automáticamente.

---

## ✅ Reglas para usar el prefijo `a:`

| Elemento         | Ejemplo con prefijo                        |
|------------------|--------------------------------------------|
| Clase de DaisyUI | `a:btn`, `a:alert-error`, `a:card-body`     |
| Clase Tailwind   | `a:bg-base-100`, `a:p-4`, `a:text-lg`       |
| Responsive       | `md:a:grid-cols-2`, `hover:a:text-primary`  |
| Forzado `!`      | `a:text-primary!`                           |

**Nota**: El prefijo `a:` aplica globalmente tanto para DaisyUI como para Tailwind, gracias a la configuración en el bloque `@plugin`.

---

## 🔧 Herramientas compatibles

Este setup es ideal para:

- Shopify themes
- Vue o React apps
- Proyectos multitenant donde los estilos deben evitar conflictos
- Proyectos con contenido generado por AI

---

## 📁 Estructura recomendada

```
├── src/
│   └── input.css
├── dist/
│   └── output.css
├── index.html
├── README.md
```

---

## 🧪 Verificación rápida

```html
<button class="a:btn a:btn-primary a:btn-lg">
  ¡Funciona con prefijo!
</button>
```

---

## 📚 Referencias

- [Tailwind CSS v4](https://tailwindcss.com/docs/installation)
- [daisyUI 5](https://daisyui.com/docs/)
- [Custom Theme Generator](https://daisyui.com/theme-generator/)

---

Para mayor integración o generación automática de clases prefijadas, puedes usar este README como base para configurar tus herramientas AI o plantillas de proyecto.

