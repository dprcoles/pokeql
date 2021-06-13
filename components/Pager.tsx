import React from 'react'
import { PAGE_SIZE } from '@/utils/constants'
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

interface PagerProps {
  totalItems: number
  currentPage: number
  changePage(page: number): any
}

const Pager: React.FC<PagerProps> = ({ totalItems, currentPage, changePage }) => {
  const lastPage = Math.ceil(totalItems / PAGE_SIZE)
  return (
    <div className="flex flex-row p-4 text-lg">
      {currentPage !== 1 && (
        <>
          <button className="px-1" onClick={() => changePage(1)}>
            <AiOutlineStepBackward size="1.5em" />
          </button>
          <button className="px-1" onClick={() => changePage(currentPage - 1)}>
            <MdKeyboardArrowLeft size="1.5em" />
          </button>
        </>
      )}
      <div className="mx-auto">
        Page <b>{currentPage}</b> of <b>{lastPage}</b>
      </div>
      {currentPage !== lastPage && (
        <>
          <button className="px-1" onClick={() => changePage(currentPage + 1)}>
            <MdKeyboardArrowRight size="1.5em" />
          </button>
          <button className="px-1" onClick={() => changePage(lastPage)}>
            <AiOutlineStepForward size="1.5em" />
          </button>
        </>
      )}
    </div>
  )
}

export default Pager
