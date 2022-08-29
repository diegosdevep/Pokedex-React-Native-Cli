import { View, Text, Platform,FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';



const screenWidth = Dimensions.get('window').width

const SearchScreen = () => {
    const {top} = useSafeAreaInsets()
    const {isFetching, simplePokemonList} = usePokemonSearch()

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('')


    useEffect(() => {
      
      if(term.length === 0){
        return setPokemonFiltered([])
      }

      if(isNaN(Number(term))){
        setPokemonFiltered(
          simplePokemonList.filter(
            poke => poke.name.toLowerCase().includes(term.toLowerCase())
          )
        )
      }else{
        const pokemondById = simplePokemonList.find(poke => poke.id === term)
        setPokemonFiltered(
          (pokemondById) ? [pokemondById] : []
        )
      }


    }, [term])
    

    if(isFetching){
        return <Loading/>
    }
    

  return (
    <View style={{
        flex:1,
        marginTop: (Platform.OS === 'ios') ? top : top + 10,
        marginHorizontal:20,
    }}>
        <SearchInput
          onDebounce={(value) => setTerm(value)}
          style={{
            position: 'absolute',
            zIndex: 999,
            width: screenWidth - 40,
            top: (Platform.OS === 'ios') ? top : top + 15
          }}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={pokemonFiltered}
          numColumns={2}

          //Header
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom:10,
              marginTop:(Platform.OS === 'ios') ? top : top + 70
            }}>{term}</Text>
          )}

          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({item}) => (<PokemonCard pokemon={item}/>)}
        
        />
    </View>
  )
}




export default SearchScreen