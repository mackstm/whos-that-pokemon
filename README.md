<div align='justify'>

# Who's that Pokémon?

## Índice
- [Descripción](#index01)
- [Reto 1](#index02)
- [Reto 2](#index03)

### Descripción <a name="index01"></a>

Repositorio dedicado al seguimiento del desarrollo de la aplicación Vue basado en el juego del anime de Pokémon "¿Cuál es ese Pokémon?". Dicho seguimiento se hará con retos.

### Reto 1: Iniciando Proyecto Pokemon Game <a name="index02"></a>

<img src="img/reto1/img01.png" alt="Iniciando Proyecto Pokemon Game" style="display: block; margin: 0 auto"/>

Hablemos un poco sobre algunas de las opciones que se han elegido. El proyecto se hará en Typescript. Las demás opciones son:

- Vue Router: Utilizado para crear SPA (Single Page Application), es decir, aplicaciones con varias rutas pero solo una página. El equivalente en React es BrowserRouter. Nuestra aplicación solo tendrá una ruta, por lo tanto no es necesario.
- Pinia: Librería para Vue que permite compartir un estado para todos los componentes, similar al contexto en React. Es una forma de pasar datos a componentes que no interactúan directamente entre sí
- Vitest: Librería de testing para Vue
- ESLint: Muestra los errores y warnings durante el desarrollo.
- Prettier: Herramienta de formateo utilizado para que se vea, como su nombre indica, prettier.

Ejecutemos ahora los comandos que nos indica Vue en la imagen anterior

<img src="img/reto1/img02.png" alt="Siguiendo indicaciones" style="display: block; margin: 0 auto"/>

Comprobamos que se ha lanzado

<img src="img/reto1/img03.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Este proyecto seguirá la estructura Vue de Composition API, y la arquitectura estará basada en "screaming architecture".

Composition API es un método de hacer componentes en Vue que ofrece una forma más sencilla de programar, simplemente agregando "setup" al script e indicando las variables y funciones pertinentes. Se diferencia de Option API en cuanto a la sencillez y legibilidad del código, puesto que con Option API habría que inicializar el componente con data() y poner propiedades y métodos por separado.

Screaming architecture es una forma de estructurar el proyecto que fomenta la claridad. La estructura de carpetas debe estar hecha de una forma que cualquier persona pueda saber qué hace cada parte a simple vista.

<img src="img/reto1/img04.png" alt="App.vue básico" style="display: block; margin: 0 auto"/>

Dejamos el fichero App.vue con la estructura básica, indicándole que usaremos TypeScript pasándole el atributo lang. Observamos que directamente nos da el setup de Composition API. Borramos base.css y logo.svg puesto que no los usaremos, y renombramos main.css a styles.css, cambiando el import en main.ts:

<img src="img/reto1/img05.png" alt="main.ts" style="display: block; margin: 0 auto"/>

Y al ejecutar npm run dev, comprobamos que funciona:

<img src="img/reto1/img06.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Finalmente, vamos a aplicarle Tailwind CSS:

<img src="img/reto1/img07.png" alt="Tailwind" style="display: block; margin: 0 auto"/>

<img src="img/reto1/img08.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

<img src="img/reto1/img09.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

<img src="img/reto1/img10.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

<img src="img/reto1/img11.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Y con esto ya completamos el reto 1!

### Reto 2: Estructura de la aplicación <a name="index03"></a>

Ahora que lo tenemos inicializado, vamos a estructurar nuestro proyecto para seguir la arquitectura screaming architecture que mencionamos anteriormente. Borramos la carpeta components y creamos en su lugar modules, y dentro de ella pokemon.

A su vez, creamos una carpeta composables. Los composables son el equivalente a los hooks de react, nos permiten reutilizar lógica que normalmente necesitaríamos escribir en cada componente. De manera estándar, llamamos al fichero algo significativo como "mouse" y dentro crearíamos una función "useMouse".

Por último, recreamos components y agregamos una carpeta views. La estructura nos quedaría así:

<img src="img/reto2/img01.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Ahora en views generamos el archivo PokemonGame.vue. Gracias a nuestra estructura screaming architecture, tenemos claro que tendrá lógica relazionada con la visualización de nuestra aplicación. Ahora, con la extensión de Vue VScode Snippets escribimos en el fichero:

```vue
vbase-3-ts-setup
```

Y nos genera la estructura básica de un componente usando Composition API y typescript.

<img src="img/reto2/img02.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Ahora dividimos la estructura de PokemonGame en secciones. Primero una sección que indique al usuario que se están cargando los Pokémons:

<img src="img/reto2/img03.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Las clases de tailwind añadidas básicamente ayudan a centrar y el texto y que la sección ocupe la pantalla, y animate-pulse realiza una animación de transparencia y opacidad constante. Ahora modificamos App.vue para llamar al componente.

<img src="img/reto2/img04.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Ahora vemos el resultado:

<img src="img/reto2/img05.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>


</div>