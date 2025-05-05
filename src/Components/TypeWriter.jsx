import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const words = ["Hello!", "Welcome to INKTech Solutions"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setTypingStarted(true);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!typingStarted) return;

    const currentWord = words[wordIndex];
    let timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(50);
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
        setSpeed(100);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, typingStarted]);

  return (
    <div className="w-full  h-auto ">
      <h1 className="text-4xl  lg:text-7xl font-bold">
        {text}
        <span className="animate-blink">|</span>
      </h1>
    </div>
  );
};

export default Typewriter;
