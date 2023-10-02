import React from 'react'

const Rating = ({rating}) => {

    let ratingArray = Array(5).fill(false)
    for(let i=0;i<rating;i++){
        ratingArray[i] = true;
    }

  return (
    <>
        { ratingArray.map((value, index) => (
            value ?
            (<i key={index} className="bi bi-star-fill text-yellow-500 mr-1"></i>) : 
            (<i key={index} className="bi bi-star text-yellow-500"></i> )
        )) }
    </>
  )
}

export default Rating