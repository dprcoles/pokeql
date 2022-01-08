import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import { ParsedUrlQuery } from "querystring"
import { GET_POKEMON_DETAIL, GET_POKEMON_SLUGS } from "@/utils/queries"
import { PokemonCard } from "@/components/pokedex/pokemon"
import Wrapper from "@/components/Wrapper"
import { API_LANGUAGE_ID, MAX_POKEMON_ID, MIN_POKEMON_ID } from "@/utils/constants"
import Loading from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"
import client from "@/utils/client"
import { PokemonPageData, PokemonSlug } from "@/types/PokemonData"
import { ApolloError } from "@apollo/client"

interface PokemonProps {
  loading: boolean
  data: PokemonPageData
  error: ApolloError | undefined | null
}

interface IParams extends ParsedUrlQuery {
  pokemon: string
}

const Pokemon: React.FC<PokemonProps> = ({ loading, data, error }) => {
  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : error || !data ? (
        <ErrorMessage />
      ) : (
        <PokemonCard
          data={data.pokemon}
          evolution={data.evolution}
          prev={data.prev}
          next={data.next}
        />
      )}
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { pokemon },
  } = await client.query({
    query: GET_POKEMON_SLUGS,
    variables: {
      maxPokemonId: MAX_POKEMON_ID,
    },
  })

  const paths = pokemon.map((slug: PokemonSlug) => {
    const pokemon = String(slug.id)
    return {
      params: { pokemon },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { pokemon } = context.params as IParams
  const parsedSlug = parseInt(pokemon)

  const nextPokemonId = parsedSlug == MAX_POKEMON_ID ? MIN_POKEMON_ID : parsedSlug + 1
  const prevPokemonId = parsedSlug == MIN_POKEMON_ID ? MAX_POKEMON_ID : parsedSlug - 1

  const { loading, data, error } = await client.query({
    query: GET_POKEMON_DETAIL,
    variables: {
      id: parsedSlug,
      languageId: API_LANGUAGE_ID,
      nextId: nextPokemonId,
      prevId: prevPokemonId,
    },
  })

  return {
    props: {
      loading,
      data,
      error: error || null,
    },
  }
}

export default Pokemon
