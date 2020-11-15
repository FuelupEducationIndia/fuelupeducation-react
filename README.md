# React boilerplate:

based on https://github.com/rwieruch/advanced-react-webpack-babel-setup

Features:

React17, Babel7, Webpack5, HotReload Dev server module and more

#### CSS/SCSS modules enabled

`import './App.css'`

or module

`import styles from './App.module.scss"`

#### Fonts Support:

`

- src/
  --- assets/
  ----- fonts/
  ------- OpenSans-Bold.woff
  ------- OpenSans-Bold.woff2
  ------- OpenSans-Regular.woff
  ------- OpenSans-Regular.woff2
  ------- OpenSans-Italic.woff
  ------- OpenSans-Italic.woff2 `

including with @font-face definition

````language
`
 @font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: normal;
  src:
    url('./assets/fonts/OpenSans-Regular.woff2') format('woff2'),
    url('./assets/fonts/OpenSans-Regular.woff') format('woff');
}
````
