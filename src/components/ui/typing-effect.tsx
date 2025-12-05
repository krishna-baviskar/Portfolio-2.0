"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export default function TypingEffect({ 
  texts, 
  className, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delay = 2000 
}: TypingEffectProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timeoutRef.current = setTimeout(handleTyping, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, delay]);

  return (
    <div className={cn("inline-block", className)}>
      <span>{text}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
}
