import React from 'react'
import './reviewsAverage.css'
import Star from '@material-ui/icons/Star'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    star:{
        color:'#E89F0E'
    }
}))
export default function ReviewsAverage() {

    const classes = useStyles()

    return ( 
        <div className="reviewsAverage-container">
            <div className="reviewsAverage-number">
                <h1>4.9</h1>
            </div>
            <div className="reviewsAverage-stars">
                <Star className={classes.star} /><Star className={classes.star} /><Star className={classes.star} /><Star className={classes.star} /><Star className={classes.star} />
            </div>
            <div className="reviewAverage-phrase">
                <p>Based on 3,232 Reviews</p>
            </div>
        </div>
    )
}

