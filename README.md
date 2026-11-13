# VetPlusFelin – Landing

Landing page ficticia (sin integraciones) hecha con React + Vite.

## Requisitos
Node.js 20+ y npm.

## Comandos
```bash
npm install      # instalar dependencias
npm run dev      # servidor local (http://localhost:5173)
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # ESLint
```

## Estructura
```
src/
  main.jsx          # entrada
  App.jsx           # composición de secciones
  styles/           # tokens.css (variables), reset.css, base.css, index.css
  components/ui/    # componentes reutilizables (botones, tarjetas…)
  components/layout/# contenedor, cabecera, pie
  sections/         # una carpeta/archivo por sección de la landing
  hooks/            # lógica reutilizable
  data/             # contenido (textos, listas) separado de la UI
  assets/           # imágenes y SVG
```

## Ajustes visuales
Colores, tipografía, espaciados y radios se controlan desde `src/styles/tokens.css`
(también editables en vivo en DevTools sobre `:root`).
