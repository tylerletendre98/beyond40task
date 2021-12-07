import React from 'react'
import CreateIcon from '@material-ui/icons/Create'
import { Button } from '@material-ui/core'
import './writeReviewButton.css'

export default function WriteReviewButton() {
    return (
        <div>
            <div className="button">
                <button><CreateIcon/> Write a Review</button>
            </div>
        </div>
    )
}
