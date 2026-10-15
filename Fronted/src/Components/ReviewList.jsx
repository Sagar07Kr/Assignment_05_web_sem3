import React from 'react'

function ReviewList({reviewdata}) {
  return (
        <>
        <h1>Customer Reviews :- </h1>
        {
            reviewdata.map((ele, index) => {
                return(
                    <div className='reviewcard'>
                        <h1>ReviewerName : {ele.reviewerName}</h1>
                        <h2>Rating : {ele.rating} ⭐️</h2>
                        <h3>Comment : {ele.comment}</h3>
                        <h2>Date : {ele.date}</h2>
                        <h3>ReviewerEmail : {ele.reviewerEmail}</h3>
                    </div>
                )
            })
        }
       </>
  )
}

export default ReviewList