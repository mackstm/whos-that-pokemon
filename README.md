<div align='justify'>

# Who's that Pokémon?

<img src="img/misc/whosthatpokemon.png" alt="Who's that Pokémon?" style="display: block; margin: 0 auto"/>

## Índice
- [Descripción](#index01)
- [Reto 1](#index02)
- [Reto 2](#index03)
- [Reto 3](#index04)
- [Reto 4](#index05)
- [Reto 5](#index06)
- [Reto 6](#index07)

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

¡Y con esto ya completamos el reto 1!

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

Si quisiéramos ocultarlo podríamos hacerlo con la directiva v-show sobre la etiqueta section, poniendo su valor a false:

```html
<section v-show="false" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
</section>
```

Ahora otra sección con el mensaje de "¿Cuál es ese Pokémon?":

```html
  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>¿Cuál es ese Pokémon?</h1>
    <!--PokemonPicture-->
    <!--PokemonOptions-->
  </section>
```

Los comentarios de PokemonPicture y PokemonOptions indican donde irán dichos componentes. Como su nombre indica, PokémonPicture es el componente que muestra la imagen del Pokémon, cogiéndola de la API. PokemonOptions se encargará de mostrar los botones con las elecciones, consultando con la API para conseguir tres Pokémon aleatorios y el correcto.

Con esto hemos acabado el segundo reto.

### Reto 3: Creando el esqueleto de Pokémon Game <a name="index04"></a>

Ahora que hemos dado estructura a nuestro proyecto, podemos empezar a generar un pequeño esqueleto de lo que acabará siendo nuestra aplicación. Aún no vamos a conectar con la API, así que cogeremos una imagen de Volcarona para este ejemplo.

<img src="img/reto3/img01.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Esto es un buen comienzo, pero si vemos la imagen del Pokémon tal cual el juego pierde su gracia. Vamos a usar tailwind para ponerla en negro y darle un tamaño uniforme de 200 pixeles, quedando el código tal que así:

```html
<template>

  <img v-bind:src="imgUrl" class="brightness-0 h-[200px]" alt="Volcarona"/>

</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const imgUrl = ref('https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/637.png');

</script>

<style scoped>

</style>
```

<img src="img/reto3/img02.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Ahora que no sé qué Pokémon es, pasemos al componente PokemonOptions. Para este reto solamente vamos a simular las opciones.

<img src="img/reto3/img03.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

```html
<template>
  <div v-for="item in options">
    <div>Option {{ item }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const options = ref([1,2,3,4]);
</script>

<style scoped>

</style>
```

Las opciones se ven un poco aburridas. Vamos a convertirlas en botones con las siguientes clases tailwind:

```html
<button class="bg-purple-600 hover:bg-purple-700 mb-2 p-2 w-[150px] text-white rounded-full">Option {{ item }}</button>
```

En lugar de poner el class directamente sobre el botón, podemos limpiar bastante nuestro código HTML con @apply en el apartado de estilos:

```html
<template>
  <div v-for="item in options">
    <button>Option {{ item }}</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const options = ref([1,2,3,4]);
</script>

<style scoped>

  button {
    @apply bg-purple-600 hover:bg-purple-700 mb-2 p-2 w-[150px] text-white rounded-full
  }

</style>


```

<img src="img/reto3/img04.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Finalmente, para poner nuestro color de fondo a #f1f1f1, vamos a nuestro styles.css y agregamos:

```css
html,
body {
  background-color: #f1f1f1;
}
```

<img src="img/reto3/img05.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

¡Reto 3 completado!

### Reto 4: Conectar con la API usando Axios <a name="index05"></a>

¡Por fin vamos a utilizar la PokeApi!

Antes de hacer nada, creamos un archivo en assets llamado "animations.css" con el siguiente código:

```css
.fade-in {
    animation: fadeIn 0.3s;
    -webkit-animation: fadeIn 0.3s;
    -moz-animation: fadeIn 0.3s;
    -o-animation: fadeIn 0.3s;
    -ms-animation: fadeIn 0.3s;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
```

Se trata de una simple animación que se verá cuando cargue el Pokémon. Lo siguiente será crear nuestro primer composable: usePokemonGame. También crearemos un enum con los tres estados de nuestro juego, el cual se encontrará en la carpeta interfaces en pokemon. Cabe mencionar que no es una interfaz como tal.

Como ya se ha mencionado, el juego tendrá tres estados: 

```ts
export enum GameStatus {
  Playing = 'playing',
  Won = 'won',
  Lost = 'lost',
}
```

En la misma carpeta nos hacemos un index.ts que nos servirá de archivo de barril, es decir, un archivo donde podemos exportar varios archivos y hacer solo un import de varios ficheros con un solo path, quedando el código más limpio. 

```ts
import { GameStatus } from "@/modules/pokemon/interfaces";
import { ref } from "vue";

export function usePokemonGame() {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  return {
    gameStatus,
  }
}
```

Ahora creamos la carpeta api dentro de la de pokemon y un archivo pokemonApi.ts para hacer las llamadas pertinentes a la api mediante Axios, una librería de javascript que ofrece más comodidad que un simple fetch a la hora de hacer peticiones HTTP, ya que axios nos transforma automáticamente los datos de la respuesta parseada en un json. Lo hemos usado antes en React y React-Native.

Podríamos limitarnos a los primeros 151 Pokémon, pero me da que esa silueta de antes no está entre ellos, así que vamos a limitarlo a la quinta generación. Me da la sensación de que ahí encontraré mi respuesta. ¿Cuál es ese Pokémon? Para limitar los pokémon que nos escupe la api, utilizamos el siguiente enlace= https://pokeapi.co/api/v2/pokemon?offset=493&limit=156. Este enlace nos devuelve los pokémon de la quinta generación.

```ts
import axios from "axios";

const pokemonApi = {
  get: get
}
async function get(limiter: string): Promise<any> {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon' + limiter);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default pokemonApi;

```

Entonces lo usamos en usePokemonGame:

```ts
import pokemonApi from "@/modules/pokemon/api/pokemonApi";
import { GameStatus } from "@/modules/pokemon/interfaces";
import { onMounted, ref } from "vue";

export function usePokemonGame() {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemon = async () => {
    const response = await pokemonApi.get('?offset=493&limit=156');
    console.log(response.data)
  }

  onMounted(() => {
    getPokemon();
  })

  return {
    gameStatus,
  }
}
```

Vamos a usarlo en PokemonGame.vue para comprobar que funciona.

```html
<script setup lang="ts">
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import { usePokemonGame } from '@/composables/usePokemonGame';

const { gameStatus } = usePokemonGame();
</script>
```

<img src="img/reto4/img02.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Esto es bueno para nosotros, pero esta lista nos está dando datos que no queremos. Solo nos interesan la ID y el nombre, así que vamos a hacernos un tipado estricto en el archivo pokemon-list.response.ts que crearemos en la carpeta de interfaces. Usaremos json to ts para generar el type:

```ts
interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeInfo[];
}

interface PokeInfo {
  name: string;
  url: string;
}
```

Ahora nos aseguramos de usar el tipo en pokemonApi y usePokemonGame:

pokemonApi:
```ts
import axios from "axios";

const pokemonApi = {
  get: get
}
async function get<T>(limiter: string): Promise<any> {
  try {
    const response: T = await axios.get('https://pokeapi.co/api/v2/pokemon' + limiter);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default pokemonApi;
```

usePokemonGame:
```ts
import pokemonApi from "@/modules/pokemon/api/pokemonApi";
import { GameStatus } from "@/modules/pokemon/interfaces";
import { onMounted, ref } from "vue";

export function usePokemonGame() {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemon = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('?offset=493&limit=156');
    console.log(response.data.results)
  }

  onMounted(() => {
    getPokemon();
  })

  return {
    gameStatus,
  }
}
```

<img src="img/reto4/img03.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>
<img src="img/reto4/img04.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

¿Creen que la silueta de antes es uno de esos Pokémon de la imagen? Si tan solo supiera.

¡Reto 4 completado!

### Reto 5: Modificando método getPokemon() <a name="index06"></a>

Hay una cosa que comentamos en el anterior reto que nunca hemos resuelto realmente: solo necesitamos el nombre y la ID del Pokémon. Vamos a modificar el metodo getPokemon para que nos devuelva solo esos datos.

Creamos un archivo pokemon.interface.ts en la carpeta de interfaces:

```ts
export interface Pokemon {
  id: number;
  name: string;
}
```

Y realizamos las modificaciones pertinentes en usePokemonGame:

```ts
export function usePokemonGame() {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemon = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('?offset=493&limit=156');

    const pokemonArray = response.data.results.map( (pokemon: PokeInfo) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2];
      return {
        id: +id,
        name: pokemon.name
      }
    })

    return pokemonArray;

  }

  onMounted(async () => {
    const pokemonList = await getPokemon();
    console.log(pokemonList);
  })
```

Simplemente estamos metiendo cada trozo de la URL en un array que nos da el resultado y cogiendo el penúltimo elemento, que es justamente el número de la Pokédex del Pokémon (la ID). Ahora en la consola vemos:

<img src="img/reto5/img01.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Perfecto. Ahora será más facil encontrar lo que estoy buscando. No podré dormir tranquilo hasta que recupere lo que había detrás de la silueta.

La lista la queremos desordenada, así que hacemos una última modificación a getPokemon para reordenarla de manera aleatoria:

```ts
pokemonArray = pokemonArray.sort(() => 0.5 - Math.random());
```

Esto funciona porque porque sort decide el orden basado en si el número que se le pasa es positivo o negativo. Math.random() genera un número entre 0 y 1, entonces si le restamos 0.5, el resultado es positivo o negativo, y sort lo ordena de manera aleatoria. Sin embargo, no es la mejor forma de hacer un sort, puesto que está matemáticamente demostrado que tiene ciertas tendencias y en cuanto a eficiencia no es lo mejor (la complejidad es O(n log n)). En cambio, el algoritmo Fisher-Yates nos ofrece completa aletoriedad y eficiencia (complejidad O(n)).

```ts
  const shufflePokemon = (pokemonArray: Pokemon[]) => {
    for (let i = pokemonArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pokemonArray[i], pokemonArray[j]] = [pokemonArray[j], pokemonArray[i]];
    }
  }
```

Ahora comprobemos si es aleatorio:

<img src="img/reto5/img02.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Efectivamente.

### Reto 6: Se acerca el fin <a name="index07"></a>

Todo va bien, pero hay un problema: axios no siempre obtiene una respuesta inmediata. Por tanto, necesitamos una propiedad computada que se usará cuando mientras nuestra página se esté cargando. Una propiedad computada nos permite ver siempre de forma dinámica los cambios que se produzcan en nuestras propiedades, y nos ahorra tener que estar haciendo el check desde el propio template.

```ts
export function usePokemonGame() {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemonList = ref<Pokemon[]>([]);

  const isLoading = computed(() => pokemonList.value.length === 0);
```

Nos aseguramos también de devolverla:

```ts
return {
  gameStatus,
  isLoading,
}
```

Ahora viene la mejor parte de usar nuestra propiedad computada. En PokémonGame hacemos simplemente:

```html
<template>
  <section v-if="isLoading">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section v-else>
    <h1>¿Cuál es ese Pokémon?</h1>

    <PokemonPicture/>

    <PokemonOptions/>

  </section>
</template>
```

Vamos a cambiar tambien el onMounted para que la diferencia sea perceptible:

```ts
  onMounted(async () => {
    setTimeout(async () => {
      pokemonList.value = await getPokemon();
    }, 1000)

  })
```

Pero ahora lo cambiamos a como estaba antes porque cuanto más inmediata la carga mejor.

Necesitamos implementar las opciones, así que vamos allá. Necesitamos una nueva propiedad reactiva:

```ts
const pokemonOptions = ref<Pokemon[]>([]);
```

Y una nueva función para poder manejarlas:

```ts
const getNextOptions = (amount: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemonList.value.slice(0, amount);
    pokemonList.value = pokemonList.value.slice(amount);
    console.log(pokemonOptions.value);
  }

  onMounted(async () => {
    pokemonList.value = await getPokemon();
    getNextOptions();
  })

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    getNextOptions
  }
```

La función getNextOptions nos asegura que el estado esté en Playing y que las opciones sean los n primeros (por defecto 4) pokémon de la lista. Por último, decrementa la lista completa.

<img src="img/reto6/img01.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

¿Será la silueta uno de esos 4? Siento que estoy olvidando algo importante.

En fin, necesitamos implementar la lógica para determinar el Pokémon correcto. Propiedad computada al rescate:

```ts
const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex];
})
```

Con esto aseguramos que un elemento aleatorio de las opciones sea el Pokémon correcto. Vamos a comprobarlo en nuestro componente.

<img src="img/reto6/img02.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Funciona, pero tampoco creo que sea Krookodile. Ah, espera, ¡no hemos vinculado la imagen con la del Pokémon correspondiente! Hagámoslo.

Primero pasamos la ID del Pokémon a nuestro componente PokemonPicture:

```html
<PokemonPicture :pokemonId="randomPokemon.id"/>
```

Y modificamos dicho componente para que cargue la imagen que corresponde:

```html
<template>

  <img v-bind:src="pkmnImage" class="brightness-0 h-[200px]" alt="pokemon"/>

</template>

<script setup lang="ts">
  interface Props {
    pokemonId: number
  }
  const props = defineProps<Props>();

  import { computed, ref } from 'vue';

  const pkmnImage = computed(() =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`
  );

</script>
```

<img src="img/reto6/img03.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Ahora nunca sabré lo que era. ¡Pero ahí tenemos a Krookodile! Creo.

Necesitamos una forma de mostrar la imagen completa al elegir la opción correcta. Lo solucionamos con otro prop:

```html
<PokemonPicture :pokemonId="randomPokemon.id" :showPokemon="true"/>
```

Lo ponemos por defecto a true para comprobarlo

Ahora en PokemonPicture:

```html
<template>

  <img v-if="!showPokemon" v-bind:src="pkmnImage" class="brightness-0 h-[200px]" alt="pokemon"/>

  <img v-else v-bind:src="pkmnImage" class="fade-in h-[200px]" alt="pokemon"/>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
  interface Props {
    pokemonId: number;
    showPokemon?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    showPokemon: false
  });

  const pkmnImage = computed(() =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`
  );

</script>

```

Le aplicamos desde ya la clase fade-in que tenemos de animations.css

<img src="img/reto6/img04.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

¡Es Serperior!

Bueno, ahora que comprobamos que funciona, agregamos una condición de que solo se muestre cuando no se esté jugando:

```html
<PokemonPicture :pokemonId="randomPokemon.id" :showPokemon="gameStatus !== GameStatus.Playing"/>
```

Vamos con las opciones. Pasamos a PokemonOptions por props el array de opciones:

```html
<PokemonOptions :options="pokemonOptions"/>
```

Y empezamos a modificar PokemonOptions:

```html
<template>

    <button v-for="{ name, id } in options" :key="id" class="capitalize">
      {{ name }}
    </button>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/modules/pokemon/interfaces';

interface Props {
  options: Pokemon[]
}

const props = defineProps<Props>();

</script>

<style scoped>

  button {
    @apply bg-purple-600 hover:bg-purple-700 mb-2 p-2 w-[150px] text-white rounded-full
  }

</style>

```

Hasta ahora, el componente recibe a través de props las opciones (las cuales ya están en orden aleatorio) y las recorre en los botones con v-for, mostrando el nombre de cada uno en el botón.

Necesitamos saber la opción que selecciona el usuario. Para ello utilizaremos defineEmits en PokemonOptions:

```ts
defineEmits<{selectedOption: [id: number]}>();
```

Y en el template:

```html
<button v-for="{ name, id } in options" :key="id" class="capitalize"
    @click="$emit('selectedOption', id)"
>
      {{ name }}
</button>
```

Y para recibirlo en PokemonGame:

```html
<PokemonOptions :options="pokemonOptions" @selected-option="onSelectedOption"/>
```

Y comprobamos mostrando por consola con esa función onSelectedOption:

```ts
const onSelectedOption = (pokemonId: number) => {
  console.log(pokemonId);
}
```


<img src="img/reto6/img05.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Desarrollemos esa función con la lógica de ganar. Creamos una nueva función checkAnswer en usePokemonGame que recibe el id y lo compara con la respuesta. Si el usuario gana, nuestro gameStatus cambia a WON, y si no, a LOST:

```ts
const checkAnswer = (pokemonId: number) => {
    if (pokemonId === randomPokemon.value.id) {
      gameStatus.value = GameStatus.Won;
    } else {
      gameStatus.value = GameStatus.Lost;
    }
  }
```

Perfecto, pero esto no es muy divertido. ¡Vamos a lanzar confeti cuando el usuario gane!

Instalamos el paquete:

```bash
npm install --save canvas-confetti
```

<img src="img/reto6/img06.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Ahora podemos lanzarlo cuando el usuario gane:

```ts
const checkAnswer = (pokemonId: number) => {
    if (pokemonId === randomPokemon.value.id) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      });
    } else {
      gameStatus.value = GameStatus.Lost;
    }
  }
```

Y ahora al seleccionar lanzamos la función checkAnswer:

```html
<PokemonOptions :options="pokemonOptions" @selected-option="checkAnswer"/>
```

Deshabilitaremos ahora los botones para que no se puedan pulsar cuando el usuario pierda o gane:

pokemonOptions:

```ts
interface Props {
  options: Pokemon[],
  blockSelection: boolean;
}
```

```html
<button v-for="{ name, id } in options" :key="id" class="capitalize"
    @click="$emit('selectedOption', id)"
    :disabled="blockSelection"
    >
      {{ name }}
</button>
```

PokemonGame:

```html
<PokemonOptions :options="pokemonOptions" :block-selection="gameStatus !== GameStatus.Playing" @selected-option="checkAnswer"/>
```

<img src="img/reto6/img07.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Vamos a implementarle también un contador de victorias para luego:

usePokemonGame:

```ts
const winCount = ref(0);

const checkAnswer = (pokemonId: number) => {
    if (pokemonId === randomPokemon.value.id) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      });
      winCount.value++;
    } else {
      gameStatus.value = GameStatus.Lost;
    }
}
```

PokemonGame:
```html
<div class="text-sm mt-2">
      Victorias: {{ winCount }}
</div>
```

Pero antes de implementar la jugabilidad infinita, vamos a decirle al usuario perdedor la opción correcta:

PokemonoOptions:

```html
<button v-for="{ name, id } in options" :key="id" class="capitalize"
    @click="$emit('selectedOption', id)"
    :disabled="blockSelection"
    :class="{ 'correct': id === correctOption && blockSelection }"
    >
      {{ name }}
</button>
```

```ts
interface Props {
  options: Pokemon[],
  blockSelection: boolean;
  correctOption: number;
}
```

```css
.correct {
  @apply bg-green-600;
}
```

PokemonGame:

```html
<PokemonOptions :options="pokemonOptions" :correct-option="randomPokemon.id"
    :block-selection="gameStatus !== GameStatus.Playing" @selected-option="checkAnswer"/>
```

<img src="img/reto6/img08.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Se propone poder hacer restart a la partida, pero en lugar de eso vamos a hacer que el juego dure para siempre. Para ello hay que hacer un par de cambios:

```ts
const checkAnswer = (pokemonId: number) => {
    if (pokemonId === randomPokemon.value.id) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      });
      winCount.value++;
    } else {
      gameStatus.value = GameStatus.Lost;
    }

    setTimeout(() => {
      restartGame();
    }, 5000);
  }

  const restartGame = async () => {
    gameStatus.value = GameStatus.Playing;
    pokemonList.value = await getPokemon();
    getNextOptions();
  }
```

Mentira, esto es todo lo que hay que cambiar. Le damos 5 segundos al jugador para que sepa que ha perdido o ganado y luego se reinicia el juego, manteniendo el contador de victorias.

<img src="img/reto6/img09.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Como se observa, se mantiene el contador. Por último, vamos a ponerle un contador para que el jugador sepa cuánto queda para el reinicio:

```ts
  const startTimer = () => {
    restartCounter.value = 5;
    const timer = setInterval(() => {
      restartCounter.value--;
      if (restartCounter.value === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  const checkAnswer = (pokemonId: number) => {
    if (pokemonId === randomPokemon.value.id) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      });
      winCount.value++;
    } else {
      gameStatus.value = GameStatus.Lost;
    }

    startTimer();

    setTimeout(() => {
      restartGame();
    }, 5000);
  }
```

Y ahora hay que mostrarlo en PokemonGame:

```html
<h3 class="mt-2">
      {{ gameStatus === GameStatus.Playing ? 'Adivina el Pokémon' : 'Intentalo de nuevo en: ' + restartCounter }}
</h3>
```

<img src="img/reto6/img10.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Y con eso, hemos acabado el último reto.

### Reto final: ???

Espera un momento, se supone que hemos acabado.

<img src="img/retofinal/img01.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

No me lo creo.

Ahora lo recuerdo todo.

<img src="img/retofinal/img02.png" alt="Comprobamos" style="display: block; margin: 0 auto"/>

Por fin te encuentro.

Verdaderamente este fue mi ¿Cuál es ese Pokémon?

</div>