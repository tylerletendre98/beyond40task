import Header from './components/header/Header';
import ReviewsAverage from './components/reviewsAverage/ReviewsAverage'
import WriteReviewButton from './components/writeReviewButton/WriteReviewButton';
import AskQuestionButton from './components/AskQuestion/AskQuestionButton';
import './App.css'




function App() {
  return (
    <div className="App">
      <div className="header"> 
        <Header/>
      </div>
      <div className="body">
        <div>
          <ReviewsAverage/> 
        </div>
        <div className="review-button">
          <AskQuestionButton/>
          <WriteReviewButton/>
        </div>
      </div>
    </div>
  );
}

export default App;
