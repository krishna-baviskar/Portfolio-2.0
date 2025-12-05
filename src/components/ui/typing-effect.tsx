 "use client";

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const fullText = text;

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loopNum, text, deletingSpeed, typingSpeed, delay]);

  return (
    <span className={className}>
      {displayedText}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingEffect;
