# Added pre-commit hooks

lint and prettify before sending to server

_todo: dockerizing dev and prod modes
_

!! image not centered. another assets is requested

# React boilerplate on port 3000:

Features: devServer, modules,fonts, ReactRouter

### ReactRouter fixed devServer

**
NOTE! important!!!
only ubuntu style works for old and new browser.
EOF, TTF, WOF2 missing for MULI!!!**

#### CSS/SCSS modules enabled

`import './App.css'`

or module

`import styles from './App.module.scss"`

#### Fonts Support:

( WOFF - Web Open Font Format - REC - not supports IE6-8 Opera Mini all)
For fonts support check branch with withFonts.

git checkout withFonts
as example added Muli Fonts

`

````language
- src/
  --- assets/
  ----- fonts/
  ------- Muli-Regular.woff
  ------- Muli-Regular.woff2


including with @font-face definition

```language
`
 @font-face {
  font-family: 'Muli Regular';
  font-style: normal;
  font-weight: normal;
  src:
    url('./assets/fonts/Muli-Regular.woff2') format('woff2'),
    url('./assets/fonts/Muli-Regular.woff') format('woff');
}
````

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

**Note: about user roles.**
when create a new user role/ because it can have different routes/contributions, it will have different layout.
steps to add, for a admin role:

1. Add it own route in a separate routing file(see ./src/publicRoutes.js).
2. Do his AdminLayout (Navbar will be rendered for all routes, a HOC). example of Layout:

```
<>
<NavBar/>
{props.children}
<Footer/>
<>
```

3. Import Layout in App.js and put it on else block
   if (user==="admin) {
   layoutToDisplay = user === 'public' && (
   <AdminLayout>
   <AdminRenderRoutes routes={ADMINROUTES} />
   </AdminLayout>
   );
   }
4. Test it!
