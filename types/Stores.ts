export type PokedexStore = {
  search: string
  updateSearch: (search: string) => void
  pageNumber: number
  updatePageNumber: (pageNumber: number) => void
}
