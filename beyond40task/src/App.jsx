import Header from './components/header/Header';
import ReviewsAverage from './components/reviewsAverage/ReviewsAverage'
import ReviewerStars from './components/reviewerStars/ReviewerStars';




function App() {
  return (
    <div className="App">
      <div className="header"> 
        <Header/>
      </div>
      <div className="body">
        <ReviewsAverage/> <ReviewerStars/>
      </div>
    </div>
  );
}

export default App;
