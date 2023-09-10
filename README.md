# 02.Web
Respositorios relacionados con la WEB (frontend, backend y FullStack)

Este repositorio esta construido con muestras, no se recomienda su uso a menos que sepas exactamente que estas haciendo.

En caso de uso lee primero el archivo a usar y perzonalizalo a tus circunstancias, existen partes creadas con este objetivo, por lo que si no se personaliza es posible que no funcione.


### ScriptsForEnvs
Scripts para crear proyectos en javascript vanilla y reactJS.

Ambos crean una app base para poder desarrollar proyectos web, es una alternativa propia a create-react-app o vite, no se recomienda su uso para produccion ya que esto es solo una muestra y un entorno de practicas, en caso de querer usar esto para produccion se necesita personalizacion y una refactorizacion pertinente, en el futuro se mejorara para uso en produccion.

Usan node y webpack como base, a estos se les aplica algunas configuraciones que hacen su uso mas comodo, tienen un servidor de desarrollo, se aplica sass para estilos y estos tienen responsive desing muy basico que deben ser perzonalizados en caso de desarrollar una app.

    - webpack-js-vanilla.sh
    - webpack-react.sh

#### Uso de los scripts
Estos scripts estan echos para correr mediante shell, al poder ser utilizados mediante shell es posible ejecutarlos mediante otro script o keybinds. Necesitas ejecutar el script y un argumento que sera el nombre de tu proyecto.

Uso base con shell:

    - $ {script} {nombre de tu proyecto}
    - $ ./webpack-js-vanilla-sh $1
    - $ ./webpack-react-sh $1

webpack-js-vanilla.sh:

    - $ ./webpack-js-vanilla.sh myJavascriptVanillaProyect

webpack-react.sh:

    - $ ./webpack-react.sh myReactProyect

