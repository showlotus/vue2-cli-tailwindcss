# Use TailwindCSS in Vue Cli with Vue2

[Reference](https://blog.csdn.net/zqd_java/article/details/136568490)
[禁用 preflight style](https://github.com/tailwindlabs/tailwindcss/pull/7742)

## Install

```
npm install -D autoprefixer@^9 postcss@^7 tailwindcss@npm:@tailwindcss/postcss7-compat
```

## Config

新建 `style.css` 文件

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在项目入口文件（例如：`main.js` ）中引入 `style.css`

```js
import 'style.css'
```

创建配置文件

```shell
npx tailwindcss init
```

根据项目修改配置

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 根据自己项目来定，可能是 ./src/**/*.{js,ts,jsx,tsx}
  purge: ['./src/*.{js,jsx,vue}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

添加 `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
