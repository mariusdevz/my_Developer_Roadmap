import { useState } from "react";
import "../styles.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "It always seems impossible until it's done.",
      author: "Nelson Mandela",
    },
    {
      quote: "Success is not final, failure is not fatal.",
      author: "Winston Churchill",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="btns">
        <button onClick={handlePrev}>⏮️</button>
        <button onClick={handleNext}>⏭️</button>
      </div>
    </div>
  );
};

export default Testimonials;
