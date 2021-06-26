import React from 'react'
import Spinner from './Spinner'

const Loading: React.FC = () => (
  <div className="text-lg text-center">
    <Spinner />
    <p>Loading...</p>
  </div>
)

export default Loading
