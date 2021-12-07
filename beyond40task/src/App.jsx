import Header from './components/header/Header';
import ReviewsAverage from './components/reviewsAverage/ReviewsAverage'




function App() {
  return (
    <div className="App">
      <div className="header"> 
        <Header/>
      </div>
      <div className="body">
        <ReviewsAverage/>
      </div>
    </div>
  );
}

export default App;
