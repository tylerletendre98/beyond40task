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
        <div>
            <div className="reviewsAverage-number">
                <h3>4.9</h3>
                <div className="reviewsAverage-stars">
                    <Star className={classes.star} /><Star className={classes.star} /><Star className={classes.star} /><Star className={classes.star} /><Star className={classes.star} />
                </div>
                <div>
                    <p>Based on 3,232 reviews</p>
                </div>
            </div>
        </div>
    )
}

