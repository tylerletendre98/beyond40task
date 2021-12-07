import React from 'react'
import ReactStars from 'react-rating-stars-component'



export default function ReviewerStars() {

    return (
        <div>
            <ReactStars
            count={5}
            size={25}
            activeColor='#E89F0E'
            isHalf={true}
            />
        </div>
    )
}
