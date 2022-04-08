import Header from './components/Header';
import FeedbackList from './components/feedback/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/feedback/FeedbackStats';
import FeedbackForm from './components/feedback/FeedbackForm.';
import { v4 as uuidv4 } from 'uuid';
// import FeedbackForm from './components/feedback/FeedbackForm';
// import Card from './components/common/Card';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);


  function deleteFeedback(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((item) => {
          console.log(item);
          return item.id !== id;
        })
      );
    } else {
      console.log('Nothing deleted!');
    }
  }

  // console.log(feedback);
  return (
    <>
      <Header />
      <FeedbackForm
        addFeedback={(userFeedback) => {
          userFeedback.id = uuidv4();
          setFeedback([...feedback, userFeedback]);
        }}
      />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      <FeedbackStats feedback={feedback} />
      
    </>
  );
};

export default App;
