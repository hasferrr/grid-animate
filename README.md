# React + TypeScript + Vite + Tailwind CSS

- <https://vitejs.dev/guide/>
- <https://tailwindcss.com/docs/guides/vite>

```bash
bun create vite project-name --template react-ts
bun install -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

tailwind.config.js

```ts
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

./src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
