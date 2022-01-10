export const pokiapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 8000

})

export const sandboxapi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Tony/pokemon',
  timeout: 8000
})