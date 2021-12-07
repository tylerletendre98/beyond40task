import Header from './components/header/Header';
import ReviewsAverage from './components/reviewsAverage/ReviewsAverage'
import ReviewerStars from './components/reviewerStars/ReviewerStars';
import WriteReviewButton from './components/writeReviewButton/WriteReviewButton';
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
        <div className="button-left">
          <WriteReviewButton/>
        </div>
      </div>
    </div>
  );
}

export default App;
