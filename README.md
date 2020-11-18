todo: dockerizing dev and prod modes

# React boilerplate on port 3000:

thanks and based on https://github.com/rwieruch/advanced-react-webpack-babel-setup

Features:

React17, Babel7, Webpack5, HotReload Dev server module and more

#### CSS/SCSS modules enabled

`import './App.css'`

or module

`import styles from './App.module.scss"`

#### Fonts Support:

For fonts support check branch with withFonts.

git checkout withFonts
as example added Muli Fonts

`

````language
- src/
  --- assets/
  ----- fonts/
  ------- OpenSans-Bold.woff
  ------- OpenSans-Bold.woff2
  ------- OpenSans-Regular.woff
  ------- OpenSans-Regular.woff2
  ------- OpenSans-Italic.woff
  ------- OpenSans-Italic.woff2
``` `

including with @font-face definition

```language
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

#### Docker support (dev mode) run and build

docker-compose -f docker-compose.dev.yml up --build
not yet implemented!!!

### some useful github commands

\$ `git checkout <existing_branch>`

create and switch to it:
\$ `git checkout -b <new_branch>`

to a existiing one
\$`git branch <branch_name>`

or use switch

\$ `git switch <existing_branch>`

\$ `git switch -c <non_existing_branch>`

push: \$`git push origin <branch_name>

### About Prettier and it settings:

in .eslintrc :
disable Proptypes error:
`"react/prop-types": 0,`
disable no-used-var error:
`"no-unused-vars":0`

or commentat file beginning:
/_ eslint react/prop-types: 0 _/
or this:
/_ eslint react/forbid-prop-types: 0 _/

**
NOTE! important!!!
only ubuntu style works for old and new browser.
EOF, TTF, WOF2 missing for MULI!!!**
