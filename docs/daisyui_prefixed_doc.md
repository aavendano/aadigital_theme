# ✅ daisyUI 5 con prefijo personalizado `a-`

Este documento es una adaptación completa del documento oficial de DaisyUI 5 para reflejar el uso de **prefijo personalizado `a-`**, aplicado tanto a clases de DaisyUI como de Tailwind CSS.

---

## ⚙️ Configuración base

```css
@import "tailwindcss";
@plugin "daisyui" {
  prefix: a-;
}
```

También puedes declarar un tema personalizado con prefijo así:

```css
@plugin "daisyui/theme" {
  name: "playlovetoys";
  default: true;
  prefersdark: false;
  color-scheme: light;

  --color-base-100: oklch(100% 0 0);
  --color-primary: hsl(268, 41%, 33%);
  /* etc... */
}
```

---

## 🧠 Reglas generales de uso

1. Todas las clases de DaisyUI (componentes, partes, modificadores, colores, tamaños) llevan el prefijo `a-`, por ejemplo:
   - `a-btn`
   - `a-alert-success`
   - `a-card-body`
2. Las clases de utilidad de Tailwind también deben escribirse con prefijo:
   - `a-bg-red-500`
   - `a-text-center`
   - `a-m-4`
3. Si usas clases responsive o variants, se conservan igual:
   - `sm:a-btn`
   - `hover:a-bg-primary`
4. Si necesitas forzar estilos con `!`, se mantiene al final:
   - `a-text-blue-500!`

---

## 🧩 Ejemplos adaptados

### Botón básico:
```html
<button class="a-btn a-btn-primary a-btn-lg">Click</button>
```

### Alerta:
```html
<div class="a-alert a-alert-warning">
  ¡Advertencia!
</div>
```

### Tarjeta:
```html
<div class="a-card a-card-bordered">
  <div class="a-card-body">
    <h2 class="a-card-title">Título</h2>
    <p>Contenido</p>
  </div>
</div>
```

---

## 🎨 Temas y colores

Cuando defines un tema, como `playlovetoys`, puedes usar colores semánticos como `a-bg-primary` o `a-text-base-content`, y estos cambiarán automáticamente según el tema activo.

Por ejemplo:
```html
<div class="a-bg-base-100 a-text-base-content">
  <h1 class="a-text-primary">Hola</h1>
</div>
```

---

## 📌 Notas adicionales

- El archivo `tailwind.config.js` ya **no es requerido** en Tailwind v4.
- El prefijo `a-` aplica globalmente si lo defines en el plugin DaisyUI.
- Puedes cambiar el prefijo en el futuro si lo necesitas (por ejemplo `x-`, `pl-`, etc.)

---

Si deseas que te genere un archivo `.html` de ejemplo con varios componentes reales ya adaptados al prefijo `a-`, ¡dímelo y te lo preparo!

