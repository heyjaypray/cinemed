# Welcome to TITAN’s Documentation!

### Thank you for purchasing the template!
If you have any questions that are beyond the scope of this help file, Please feel free to ask via https://tawk.to/themebiotic
Thank you.

**TITAN** is not just a single template! We will continue to add templates regularly to this bundle. We will add many carefully arranged templates for different sectors and various needs. Please visit https://titan.themebiotic.com for all templates.

## Folder structure

| Folder     | Description                              |
| ---------- | ---------------------------------------- |
| **build**  | The codes of your site created by Webpack. |
| **client** | All your client side codes.              |
| **doc**    | Template api documentation created by esdocs |
| **tools**  | Webpack scripts and tools                |



## Client Code hierarchy

| Folder         | Description                              |
| -------------- | ---------------------------------------- |
| **assets**     | It is the folder where all your assets used in temples are kept in their original state. _logo, images, files_ etc. |
| **components** | Constant components used within the site. Like _Header, Footer, Menu_ etc. |
| **config**     | Your page's basic settings like _Site name, url, seo metas, social media links_ etc. |
| **layouts**    | The layouts used in the theme are defined here. |
| **pages**      | All of your pages are kept in this folder. |
| **styles**     | All styles used in the theme are defined here. |
| **utils**      | The small tools used within the site are defined here. |



## Page Routers

| File path             | Description                              |
| --------------------- | ---------------------------------------- |
| /client/**routes.js** | All your pages and sub pages are defined by this router. Once you have created a new page, you need to define it in this router. |

##### Sample Router usage

```react
import React from "react";
import { Route, IndexRoute } from "react-router";

// Pages
import { HomePage } from "./pages/Home/";

// Components
import { GlobalHeader } from "./components/Header/";
import { GlobalFooter } from "./components/Footer/";

// Layout
import { MainLayout } from "./layouts/";

// Default Layout
const layout = {
  header: GlobalHeader,
  footer: GlobalFooter,
};

 /* All Theme Routes
  * @type {Object} All Theme routes
  */
const routes = (
  <Route path="/" component={ MainLayout } >
    <IndexRoute components={ { ...layout, main: HomePage } } />
    <Route path="/home" components={ { ...layout, main: HomePage } } />
  </Route>
);
```



## Requirements

* **NodeJs** https://nodejs.org/

## Commands

Before we start developing the template, there are some modular that need to be installed. To install these requirements, first follow the steps below.

###### INSTALL REQUIREMENTS
```sh
$ npm install
```
if you're using **Yarn package manager** then run following command

```sh
$ yarn install
```

###### START DEVELOPMENT SERVER

Once the requirements have been loaded, you can now run the development server with the following command.

```sh
$ npm start
# or
$ yarn start
```

Once the development server starts running, you will see a message like the one below.

```verilog
Dev server listening at http://0.0.0.0:3000
webpack built 55b4889cdef33b615fba in 5314m
```

You can now start editing your pages on http://localhost:3000

###### BUILD YOUR CODES
Once you have made the necessary edits and you now believe that your page is ready for publication, you can now deploy your code with the following command.

```sh
$ npm run build
# or
$ yarn build
```
This may take a little longer depending on the system.  When everything is done, you will find a fully working copy of the page in the **build folder** and an optimized version of your assets.  Now all you need to do is load the **build folder** to the server or wherever you want to use it. Since these codes do not require any server, they can also be used directly in places like github pages, dropbox or AWS s3 etc.

Also You can use the following command to print packages uncompressed.

```sh
$ npm run build:unzip
# or
$ yarn build:unzip
```

###### TEST
The Jest is ready for you to test your codes,  You can find a sample test code in the **utils folder**  ``/client/utils/utils.test.js``  Using this example you can write test codes according to your needs. If your test codes are ready, you can start the test by running the following code.
```sh
$ npm run test
# or
$ yarn test
```

## Source and Credits

All the contents used in the template are provided from the following sources. You’ll also find related content license rights.

#### Icons
* **Fontawesome (v4.7.0)**
  Created by Dave Gandy
  License: Font Awesome licensed under SIL OFL 1.1 · Code licensed under MIT License · Documentation licensed under CC BY 3.0
  http://fortawesome.github.io/Font-Awesome/icons/

#### Images

* **Pixabay ( Free photos )**
  License: CC0 Public Domain ( https://creativecommons.org/choose/zero/ )
  Free for commercial use / No attribution required
  http://pixabay.com/

* **GraphicsFuel**
  License: Free License
  The freebie resources provided on GraphicsFuel.com are free for use in both personal and commercial projects including single or multiple projects such as app or themes.
  http://www.graphicsfuel.com/terms/

* **Pixeden**
  License: Free License
  All our resources* are royalty free for use in both personal and commercial projects.
  http://www.pixeden.com/license 

* **GraphicBurger**
  License: All resources are royalty free for use in both personal and commercial projects ( http://graphicburger.com/license/ )
  http://graphicburger.com/

* **Unsplash**
  License: Free CC0 (do whatever you want) https://creativecommons.org/choose/zero/
  http://unsplash.com/

### Styles and UI
Tachyons  is used as **CSS framework**. Use the link below to examine all the CSS codes and examples used in the theme. 

###### TACHYONS
- http://tachyons.io/docs/
