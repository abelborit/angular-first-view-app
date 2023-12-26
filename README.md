# Angular & TypeScript - Angular First View App (https://abelborit.github.io/angular-first-view-app/)

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Esta es una sección de iniciación donde estaremos viendo temas básicos y temas puntuales de Angular que nos servirán para poder aprender esta tecnología. Aquí veremos:

  - Crear proyectos de Angular
  - Uso del AngularCLI - Angular Command Line Interface
  - Explicar cada archivo y directorio de un proyecto
  - Introducción al file system
  - One way data binding
  - Componentes
  - Módulos
  - Directivas creadas por Angular
  - ngIf y ngIf-else

* Una vez sentadas las bases de Angular en la sección anterior, vamos a seguir expandiéndolas con los siguientes temas:

  - Profundizar un poco más en los módulos
  - FormsModule
  - ngModel
  - @Inputs
  - @outputs
  - Servicios
  - Métodos en servicios
  - Depuraciones

* Ahora veremos temas de despliegue de aplicaciones en Angular. Aquí aprenderemos como generar el build de producción de nuestra aplicación y la desplegaremos en la web. El proceso de despliegue en otros servidores es virtualmente el mismo, tomar nuestra carpeta DIST (que contiene la aplicación con archivos HTML, CSS y JS) y desplegarla mediante FTP (preferiblemente sFTP) en el hosting deseado.

  FTP: es un protocolo de subida y bajada de archivos entre tu ordenador y un servidor. Este protocolo te permitirá subir o descargar archivos que estén en tu hosting y viceversa. Es un protocolo que se utiliza para transferir todo tipo de archivos entre equipos conectados a una red, por ejemplo Internet. Las cuentas de FTP son el medio estándar para gestionar el contenido alojado en un servidor web: enviar archivos, descargarlos, crear directorios, borrar ficheros, etc.

  - Generar build de producción
  - Desplegarlo rápidamente
  - Netlify
  - GitHub Pages (se copió el folder dist/angular-first-view-app y se cambió el nombre a docs)
  - npm Scripts para automatizar el proceso

### \* RECURSOS A USAR:

- uuid: https://www.npmjs.com/package/uuid
  - `npm i uuid`
  - `npm i --save-dev @types/uuid`
- del-cli: https://www.npmjs.com/package/del-cli
  - `npm i del-cli`
- copyfiles: https://www.npmjs.com/package/copyfiles
  - `npm i copyfiles`

### \* NOTAS:

- Al crear un nuevo módulo vemos que puede usar la dependencia de `import { CommonModule } from '@angular/common';` y hay otros módulos que también lo pueden usar entonces la primera vez que Angular carga ese 'CommonModule' ya lo almacena en memoria y eso hace que al usar otro módulo con esa dependencia de 'CommonModule' Angular ya no lo vuelva a cargar porque ya lo tiene en memoria y reutiliza el mismo 'CommonModule' almacenado en memoria y eso es algo que ayuda a que la velocidad de Angular sea bastante buena entonces se puede tener importada la dependencia de `import { CommonModule } from '@angular/common';` en varios lugares y eso no afectaría el rendimiento.

- Se añadirán algunos scrips en el package.json para que al hacer el build se cree la carpeta docs y también que en el index.html del buils en el <base href="/" /> se coloque así <base href="./" /> para no tener problemas con los archivos al subirlo a GitHub Pages

---

### \* Partes y/o archivos de este proyecto (https://angular.io/guide/file-structure)

- `.editorconfig`: al instalar la extensión `EditorConfig for VS Code` nos permite sobreescribir valores por defecto de nuestro editor de código, entonces lo que Visual Studio Code hace cuando encuentra un archivo .editorconfig básicamente establece las configuraciones por defecto en Visual Studio Code para este proyecto y este archivo hace que siga ciertas recomendaciones para que nuestro código luzca igual o similar cuando otras personas están trabajando en el mismo editor de código. Entonces `.editorconfig` es una configuración del editor de código. EditorConfig ayuda a mantener estilos de codificación consistentes para múltiples desarrolladores que trabajan en el mismo proyecto en varios editores e IDE. El proyecto EditorConfig consta de un formato de archivo para definir estilos de codificación y una colección de complementos de editor de texto que permiten a los editores leer el formato de archivo y adherirse a los estilos definidos. Los archivos EditorConfig son fácilmente legibles y funcionan bien con sistemas de control de versiones.

- `angular.json`: es un archivo importante y es raro que se hagan muchas modificaciones aquí, de vez en cuando se puede hacer una configuración global. Es un archivo donde le decimos a Angular ciertas configuraciones para la ejecución de nuestra aplicación por ejemplo, cual es el builder que vamos a utilizar, cual es el directorio de salida, cual es el archivo index que se usará para lanzar inicialmente la aplicación, cual es nuestro archivo principal o el main donde quedará todo nuestro bundle de nuestro código al final, etc.

- `tsconfig.app.json` / `tsconfig.json` / `tsconfig.spec.json`: son archivos de configuración de TypeScript. El archivo `tsconfig.app.json` es orientado a la aplicación y configuraciones como directorio de salida, etc. El archivo `tsconfig.json` son las recomendaciones para trabajar TypeScript dentro de Angular de una forma estandarizada. El archivo `tsconfig.spec.json` es similar al archivo `tsconfig.app.json` pero en este caso es orientado al testing.

- `.angular`: es una carpeta donde hay un casi 99.99% que no se tocará en proyectos porque incluso está en el .gitignore pero igual puede variar según el requerimiento del proyecto a realizar. Pero este directorio ayuda a Angular a manejar rápidamente cuando se detecta algún cambio y maneja el cache de nuestro proyecto en desarrollo y en construcción también.

- `.vscode`: es una carpeta donde hay un casi 99.99% que no se tocará en proyectos porque incluso está en el .gitignore pero igual puede variar según el requerimiento del proyecto a realizar. Pero este directorio es propio de Visual Studio Code y puede ser que se manipule por ejemplo en extensions.json al querer poner más recomendaciones o paquetes recomendados para que otros desarrolladores al montar la aplicación en modo de desarrollo les recomiende un set de instalaciones a realizar.

- `src\index.html`: tiene un <app-root></app-root> que es un componente personalizado y es donde se creará nuestra aplicación de Angular.

- `src\main.ts`: es el punto de entrada de nuestra aplicación de Angular y hay veces donde por ejemplo, si se está trabajando con Angular Universal o Angular en Ionic o Angular en Electron o Angular en otros lugares, no se estará trabajando con el `platformBrowserDynamic()` ya que es más que todo para navegadores web pero Angular + otra tecnología permitirá crear proyectos y aplicaciones de Angular para diferentes plataformas objetivo, en este caso estamos para la web y por eso está el `platformBrowserDynamic()`. Luego hace un bootstrap de nuestro módulo principal y si hay un error lo muestra en consola `bootstrapModule(AppModule).catch(err => console.error(err));`.

- `src\app`: es donde vamos a empezar a construir toda la lógica de nuestra aplicación, crear componentes, servicios, modulos, etc. y tiene los mismos archivos de .html, .css, .ts, .spec.ts o .jest (para el testing), etc. En `app.component.ts` es una clase y tiene un decorador @Component y ahí está difiniendo un 'app-root' el cual es igual al de index.html y básicamente este app.component.ts sería el componente principal que estamos montando ahí. Luego `app.module.ts` es el módulo principal y es un módulo muy importante y hay que tener cuidado porque un cambio que se haga ahí entonces puede afectar a la ejecución de la aplicación o no puede funcionar de la manera correcta. Técnicamente es muy facil que el app.module.ts crezca de manera descomunal pero hay técnicas para que mantener ajustados nuestros archivos para que tengan únicamente lo que necesitamos en ellos.

- `src\app\app.component.ts`: este archivo es el principal, explica cómo funciona el componente, qué dependencias tiene y los demás son como sus complementos para evitar que todo esté en un solo archivo.

- `src\assets\.gitkeep`: es para decir que la carpeta assets (donde están los recursos estáticos) sí le haga seguimiento en git.

---

# Angular First View App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
