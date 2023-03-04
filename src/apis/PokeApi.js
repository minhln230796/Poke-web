import axios from "axios";

export default class PokeApi {
    static listPokemon(offset = 0, limit = 10) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    }

    static getPokemonDetail(id) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    }
}