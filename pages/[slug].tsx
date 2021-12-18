import React from "react"
import { GetServerSideProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { GET_POKEMON_DETAIL } from "@/utils/queries"
import { PokemonCard } from "@/components/pokedex/pokemon"
import Wrapper from "@/components/Wrapper"
import { API_LANGUAGE_ID, MAX_POKEMON_ID, MIN_POKEMON_ID } from "@/utils/constants"
import { useQuery } from "@apollo/client"
import Loading from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"

interface PokemonProps {
  id: number
  nextId: number
  prevId: number
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

const Pokemon: React.FC<PokemonProps> = ({ id, nextId, prevId }) => {
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      id,
      languageId: API_LANGUAGE_ID,
      nextId,
      prevId,
    },
  })

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

export const getServerSideProps: GetServerSideProps = async context => {
  const { slug } = context.params as IParams
  const parsedSlug = parseInt(slug)

  const nextPokemonId = parsedSlug == MAX_POKEMON_ID ? MIN_POKEMON_ID : parsedSlug + 1
  const prevPokemonId = parsedSlug == MIN_POKEMON_ID ? MAX_POKEMON_ID : parsedSlug - 1

  return {
    props: {
      id: parsedSlug,
      nextId: nextPokemonId,
      prevId: prevPokemonId,
    },
  }
}

export default Pokemon
