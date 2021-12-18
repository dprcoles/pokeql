import React from "react"
import { PAGE_SIZE } from "@/utils/constants"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

interface PagerProps {
  totalItems: number
  currentPage: number
  changePage: (page: number) => void
}

const Pager: React.FC<PagerProps> = ({ totalItems, currentPage, changePage }) => {
  const lastPage = Math.ceil(totalItems / PAGE_SIZE)
  return (
    <div className="flex flex-row py-4 px-2 text-lg">
      {currentPage !== 1 && (
        <>
          <button
            className="flex p-4 bg-gray-50 hover:text-white hover:bg-page-alt-color rounded-md"
            onClick={() => changePage(currentPage - 1)}
          >
            <MdKeyboardArrowLeft size="1.5em" />
            <span className="hidden md:inline">Previous Page</span>
          </button>
        </>
      )}
      <div className="mx-auto p-4">
        Page <b>{currentPage}</b> of <b>{lastPage}</b>
      </div>
      {currentPage !== lastPage && (
        <>
          <button
            className="flex p-4 bg-gray-50 hover:text-white hover:bg-page-alt-color rounded-md"
            onClick={() => changePage(currentPage + 1)}
          >
            <span className="hidden md:inline">Next Page</span>
            <MdKeyboardArrowRight size="1.5em" />
          </button>
        </>
      )}
    </div>
  )
}

export default Pager
