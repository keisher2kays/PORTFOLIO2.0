// src/hooks/useTypingEffect.js

import { useState, useEffect } from 'react';

const useTypingEffect = (phrases, typingSpeed) => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let timeoutId;
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (typedText.length < currentPhrase.length) {
      timeoutId = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, typingSpeed);
    } else {
      timeoutId = setTimeout(() => {
        setTypedText('');
        setPhraseIndex(phraseIndex + 1);
      }, 1500); 
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, phraseIndex, phrases, typingSpeed]);

  return (
    <>
      {typedText}
      <span className="typing-cursor">|</span>
    </>
  );
};

export default useTypingEffect;