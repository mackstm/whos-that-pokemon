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
