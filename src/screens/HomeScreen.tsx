import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native';
import React from 'react'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import PokemonCard from '../components/PokemonCard'

const HomeScreen = () => {

  const {top} = useSafeAreaInsets()
  const {simplePokemonList, loadPokemons} =usePokemonPaginated()


  return (
    <>      
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View 
        style={{alignItems:'center'}}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={simplePokemonList}
          numColumns={2}

          //Header
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom:10
            }}>Pokedex</Text>
          )}

          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({item}) => (<PokemonCard pokemon={item}/>)}
        
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={(
            <ActivityIndicator 
              style={{height:100}}
              size={20}
              color='grey'
            />
          )}
        />
      </View>

    </>
  )
}

export default HomeScreen