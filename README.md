# Urbanio

 ![version](https://img.shields.io/badge/version-1.1.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/argon-dashboard-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-dashboard-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/argon-dashboard-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-dashboard-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Alt tag](/src/assets/img/readme/login.png)

## Iniciar

- `npm i`
- `npm start`

## Explicación Front

- Primero existen dos formas de loguearse: admin o user
- routes.js -> acceso y enrutamiento a cada microservicio
- assets -> recursos
- components -> componentes de React
- views -> componentes para renderizar el front
- index.js -> primero se renderiza el Auth para que haya login 

## Style

- Change icon size login -> frontend/src/assets/scss/argon-dashboard/custom/navbars/_navbar.scss
- Change bg color upper -> frontend/src/assets/scss/argon-dashboard/custom/mixins/_background-variant.scss

**Complex Documentation**

Each element is well presented in a very complex documentation. You can read more about the idea behind this [dashboard here](https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=creativetim). You can check the [components here](https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=creativetim) and the [foundation here](https://demos.creative-tim.com/argon-dashboard/#/documentation/colors?ref=creativetim).

**Example Pages**

If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages. You will be able to quickly set up the basic structure for your web project.


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Demo

| Dashboard Page | Icons Page | Tables Page | Maps Page |
| --- | --- | ---  | ---  |
| [![Dashboard Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-react/dashboard-page.png?raw=true)](https://demos.creative-tim.com/argon-dashboard-react/#/admin/index)  | [![Icons Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-react/icons-page.png?raw=true)](https://demos.creative-tim.com/argon-dashboard-react/#/admin/icons)  | [![Tables Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-react/tables-page.png?raw=true)](https://demos.creative-tim.com/argon-dashboard-react/#/admin/tables)  | [![Maps Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-react/maps-page.png?raw=true)](https://demos.creative-tim.com/argon-dashboard-react/#/admin/maps)  

| Register Page | Login Page Page | Profile Page  |
| --- | --- | ---  |
| [![Login Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-react/register-page.png)](https://demos.creative-tim.com/argon-dashboard-react/#/auth/register)  | [![Login Page Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-react/login-page.png?raw=true)](https://demos.creative-tim.com/argon-dashboard-react/#/auth/login)  | [![Profile Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-react/user-page.png?raw=true)](https://demos.creative-tim.com/argon-dashboard-react/#/admin/user-profile)  

[View More](https://demos.creative-tim.com/argon-dashboard-react?ref=adr-github-readme)


## Quick start

- `npm i argon-dashboard-react`
- [Download from Github](https://github.com/creativetimofficial/argon-dashboard-react/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/argon-dashboard-react?ref=adr-github-readme).
- Install with [Bower](https://bower.io/?ref=creativetim): ```bower install argon-dashboard-react```.
- Clone the repo: `git clone https://github.com/creativetimofficial/argon-dashboard-react.git`.


## Documentation
The documentation for the Material Kit is hosted at our [website](https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview).


## File Structure
Within the download you'll find the following directories and files:

```
Argon Dashboard React
.
├── Documentation
│   └── documentation.html
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── argon-dashboard-react.css
    │   │   ├── argon-dashboard-react.css.map
    │   │   └── argon-dashboard-react.min.css
    │   ├── fonts
    │   │   └── nucleo
    │   ├── img
    │   │   ├── brand
    │   │   ├── icons
    │   │   │   └── common
    │   │   └── theme
    │   ├── scss
    │   │   ├── argon-dashboard-react.scss
    │   │   ├── bootstrap
    │   │   │   ├── mixins
    │   │   │   └── utilities
    │   │   ├── core
    │   │   │   ├── alerts
    │   │   │   ├── avatars
    │   │   │   ├── badges
    │   │   │   ├── buttons
    │   │   │   ├── cards
    │   │   │   ├── charts
    │   │   │   ├── close
    │   │   │   ├── custom-forms
    │   │   │   ├── dropdowns
    │   │   │   ├── footers
    │   │   │   ├── forms
    │   │   │   ├── headers
    │   │   │   ├── icons
    │   │   │   ├── list-groups
    │   │   │   ├── maps
    │   │   │   ├── masks
    │   │   │   ├── mixins
    │   │   │   ├── modals
    │   │   │   ├── navbars
    │   │   │   ├── navs
    │   │   │   ├── paginations
    │   │   │   ├── popovers
    │   │   │   ├── progresses
    │   │   │   ├── separators
    │   │   │   ├── tables
    │   │   │   ├── type
    │   │   │   ├── utilities
    │   │   │   └── vendors
    │   │   ├── custom
    │   │   └── react
    │   └── vendor
    │       ├── @fortawesome
    │       │   └── fontawesome-free
    │       │       ├── LICENSE.txt
    │       │       ├── css
    │       │       ├── js
    │       │       ├── less
    │       │       ├── scss
    │       │       ├── sprites
    │       │       ├── svgs
    │       │       │   ├── brands
    │       │       │   ├── regular
    │       │       │   └── solid
    │       │       └── webfonts
    │       └── nucleo
    │           ├── css
    │           └── fonts
    ├── components
    │   ├── Footers
    │   │   ├── AdminFooter.jsx
    │   │   └── AuthFooter.jsx
    │   ├── Headers
    │   │   ├── Header.jsx
    │   │   └── UserHeader.jsx
    │   ├── Navbars
    │   │   ├── AdminNavbar.jsx
    │   │   └── AuthNavbar.jsx
    │   └── Sidebar
    │       └── Sidebar.jsx
    ├── index.js
    ├── layouts
    │   ├── Admin.jsx
    │   └── Auth.jsx
    ├── routes.js
    ├── variables
    │   └── charts.jsx
    └── views
        ├── Index.jsx
        └── examples
            ├── Icons.jsx
            ├── Login.jsx
            ├── Maps.jsx
            ├── Profile.jsx
            ├── Register.jsx
            └── Tables.jsx
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



## Resources
- Demo: <https://demos.creative-tim.com/argon-dashboard-react/#/admin/index?ref=adr-github-readme>
- Download Page: <https://www.creative-tim.com/product/argon-dashboard-react?ref=adr-github-readme>
- Documentation: <https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-github-readme>
- License Agreement: <https://www.creative-tim.com/license?ref=adr-github-readme>
- Support: <https://www.creative-tim.com/contact-us?ref=adr-github-readme>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/argon-dashboard-react/issues?ref=creativetim)
- **Kit:**


## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com/?ref=adr-github-readme)

- Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md?ref=creativetim)




![Product Gif](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-react/argon-dashboard-react.gif)
