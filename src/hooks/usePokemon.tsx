import { useEffect, useState } from "react"
import { pokemonApi } from "../api/pokemonApi";
import { PokemonFull } from '../interfaces/pokemonInterfaces';






export const usePokemon = (id: string) => {
  
    const [isLoading, setIsLoading] = useState(true)
    const [pokemonInfo, setPokemonInfo] = useState<PokemonFull>({} as PokemonFull) //Previene el error y da el undefined cuando hacemos pokemon.moves


    const loadPokemon = async () => {
        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        setPokemonInfo(resp.data)
        setIsLoading(false)

    }

    useEffect(() => {
        loadPokemon()
        
    }, [])
    


    return {
        isLoading,
        pokemonInfo
    }
}

