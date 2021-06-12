import React from 'react'
import Wrapper from './Wrapper'
import Spinner from './Spinner'

const Loading: React.FC = () => (
  <Wrapper>
    <div className="text-lg text-center">
      <Spinner />
      <p>Loading...</p>
    </div>
  </Wrapper>
)

export default Loading
