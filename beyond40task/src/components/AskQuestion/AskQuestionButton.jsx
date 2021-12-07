import React from 'react'
import { QuestionAnswerTwoTone } from '@material-ui/icons'
import './askQuestionButton.css'

export default function AskQuestionButton() {
    return (
        <div className="question-button">
            <button><QuestionAnswerTwoTone/> Ask a question</button>
        </div>
    )
}
