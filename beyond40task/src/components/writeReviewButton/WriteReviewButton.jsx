import React from 'react'
import { QuestionAnswerTwoTone } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import './writeReviewButton.css'

export default function WriteReviewButton() {
    return (
        <div>
            <div className="button">
                <button><QuestionAnswerTwoTone/> Ask a question</button>
            </div>
        </div>
    )
}
