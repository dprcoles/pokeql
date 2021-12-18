import React from "react"
import { BiSad } from "react-icons/bi"

const NoResults: React.FC = () => (
  <div>
    <div className="flex justify-center text-5xl font-extrabold py-2">
      <BiSad size="2em" />
    </div>
    <p className="text-center text-2xl font-bold">No results found</p>
    <p className="text-center text-md">
      Try adjusting your search or filter to find what you&apos;re looking for
    </p>
  </div>
)

export default NoResults
