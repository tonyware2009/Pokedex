export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.stats = data.stats
    this.weight = data.weight
    this.height = data.height
    this.abilities = data.abilities
    this.id = data.id
    this.sprite = data.sprite
    this.index = data.index
  }
}