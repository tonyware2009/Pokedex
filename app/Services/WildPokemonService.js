import { ProxyState } from "../AppState.js";
import { pokiapi } from "./AxiosService.js";

class WildPokemonService {
  async getAllPokemon() {
    const res = await pokiapi.get('')
    console.log(res.data)
    ProxyState.pokemon = res.data.results;
    console.log(ProxyState.pokemon)
  }

}

export const wildPokemonService = new WildPokemonService