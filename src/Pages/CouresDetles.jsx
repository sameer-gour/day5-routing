import React from 'react'
import { useParams } from 'react-router'

function CouresDetles() {
    const par = useParams();
  return (
    <div>
        <h1>{par.id} page details</h1>
    </div>
  )
}

export default CouresDetles