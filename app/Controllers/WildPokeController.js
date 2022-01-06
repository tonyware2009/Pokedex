import { ProxyState } from "../AppState.js"
import { wildPokemonService } from "../Services/WildPokemonService.js"
function _drawPokemon() {
  const pokiapi = ProxyState.pokemon
  let template = ''
  pokiapi.forEach(p => template += `<li class="selectable" onclick="app.wildPokeController.getActivePoke('${p.name}')">${p.name}</li>`)
  console.log(template)
  document.getElementById('wildpoke').innerHTML = template

}

async function _getAllPokemon() {
  try {
    await wildPokemonService.getAllPokemon()
  } catch (error) {
    console.log(error)
  }
}
export class WildPokeController {


  constructor() {
    ProxyState.on('pokemon', _drawPokemon)
    console.log('wild here')
    _getAllPokemon()
  }

  async getActivePoke(name) {
    try {

    } catch (error) {

    }
    console.log(name)
  }
}

