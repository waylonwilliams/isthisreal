import { useState } from 'react';
import { Button } from './components/ui/button';

export default function Quiz() {
  const images = [
    { src: 'book.jpg', isAI: false },
    { src: 'dj.jpg', isAI: false },
    { src: 'panda.webp', isAI: true },
    { src: 'ronaldo.webp', isAI: true },
    { src: 'seoul.jpeg', isAI: false },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleGuess = (guess: boolean) => {
    if (images[currentImageIndex].isAI === guess) {
      setScore(score + 1);
    }

    if (currentImageIndex + 1 < images.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
          <main className="w-full h-screen bg-[#e4e4e4]">

    <div className="text-center p-5">
      <h1 className="text-4xl font-bold">AI or not?</h1>
      {showScore ? (
        <div>
          <h2 className="text-2xl font-semibold mt-8">
            Your Score: {score} / {images.length}
          </h2>
          <Button
            onClick={() => {
              setCurrentImageIndex(0);
              setScore(0);
              setShowScore(false);
            }}
            className="mt-8">Try again</Button>
        </div>
      ) : (
        <div>
          <img
            src={images[currentImageIndex].src}
            alt="Guess if AI or not"
            className="w-96 h-96 mt-10 object-cover mx-auto border-4 border-black rounded-lg"
          />
          <div className="mt-5">
            <Button
              onClick={() => handleGuess(true)}
              className='mr-4'
            >
              AI
            </Button>
            <Button
              onClick={() => handleGuess(false)}
              className='ml-4'
              variant={'outline'}
            >
              Not AI
            </Button>
          </div>
        </div>
      )}
    </div></main>
  );
};