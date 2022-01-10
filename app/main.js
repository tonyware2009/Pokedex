import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokeController } from "./Controllers/WildPokeController.js";
import { MyPokemonController } from "./Controllers/MyPokemonController.js"

class App {
  myPokemonController = new MyPokemonController()
  wildPokeController = new WildPokeController()
}

window["app"] = new App();
