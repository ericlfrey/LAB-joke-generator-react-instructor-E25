import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';

function Home() {
  const [buttonText, setButtonText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (buttonText === 'Get a Joke' || buttonText === 'Get Another Joke') {
      setShow(false);
      setButtonText('Get Punchline');
      getJoke().then(setJoke);
    }
    if (buttonText === 'Get Punchline') {
      setShow(true);
      setButtonText('Get Another Joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '50vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <p>{joke.setup}</p>
      {show ? <p>{joke.delivery}</p> : ''}
      <Button style={{ marginTop: 'auto' }} onClick={handleClick}>{buttonText}</Button>
    </div>
  );
}

export default Home;
