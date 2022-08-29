import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { PokemonFull, VersionGroupDetail } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';


interface Props{
    pokemon: PokemonFull
}

const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{
            ...StyleSheet.absoluteFillObject,
        }}>
        <View style={{
            ...styles.container,
            marginTop:375,
        }}>

            {/* Typo */}
            <Text style={styles.title}>Types</Text>
            <View style={{flexDirection:'row'}}>
                {
                    pokemon.types.map(({type}) => (
                        <Text
                        style={{
                            ...styles.regularText,
                            marginRight:10
                        }}
                        key={type.name}
                        >
                            {type.name}
                        </Text>
                    ))
                }
            </View>

            {/* Peso */}
            <Text style={styles.title}>Peso</Text>   
            <Text style={styles.regularText}>{pokemon.weight} lb</Text>   

        </View>    

        <View style={styles.container}>
            <Text style={styles.title}>Sprites</Text>
        </View>

        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <FadeInImage
                uri={pokemon.sprites.front_default}
                style={styles.basicSprites}
            />
            <FadeInImage
                uri={pokemon.sprites.back_default}
                style={styles.basicSprites}
            />
            <FadeInImage
                uri={pokemon.sprites.front_shiny}
                style={styles.basicSprites}
            />
            <FadeInImage
                uri={pokemon.sprites.back_default}
                style={styles.basicSprites}
            />
        </ScrollView>



        <View style={styles.container}>

            {/* Habilidades */}
            <Text style={styles.title}>Habilidades base</Text>
            <View style={{flexDirection:'row'}}>
                {
                    pokemon.abilities.map(({ability}) => (
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight:10
                            }}
                            key={ability.name}
                        >
                            {ability .name}
                        </Text>
                    ))
                }
            </View>
            <Text style={styles.title}>Movimientos</Text>
            <View style={{flexWrap:'wrap', flexDirection:'row'}}>
                {
                    pokemon.moves.map(({move}) => (
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight:10
                            }}
                            key={move.name}
                        >
                            {move .name}
                        </Text>
                    ))
                }
            </View>

                {/* Stats */}
            <View>
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat,i) => (
                            <View
                                style={{flexDirection:'row'}}
                                key={stat.stat.name + i}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight:10,
                                        width: 150,
                                    }}
                                >
                                    {stat.stat.name}
                                </Text>

                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight:'bold'
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>

                    {/* Sprite Final */}
                    <View style={{
                        marginBottom:20,
                        alignItems:'center'
                    }}>
                        <FadeInImage
                            uri={pokemon.sprites.front_default}
                            style={styles.basicSprites}
                        />
                    </View>

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,        
    },
    title:{
        fontWeight:'bold',
        fontSize:22,      
        marginTop:20 
    },
    regularText:{
        fontSize:19,
        textTransform:'capitalize'
    },
    basicSprites:{
        width: 100,
        height: 100,
    }
});

export default PokemonDetail
