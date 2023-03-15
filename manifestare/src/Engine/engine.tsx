import React, { useState, useEffect } from "react";
import axios from "axios";
import Typed from "react-typed";

interface Quote {
  text: string;
  author: string;
}

const Quote: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
    useEffect(() => {
      const fetchQuotes = async () => {
        const response = await axios.get("https://type.fit/api/quotes");
        const quotes = response.data.map((quote: any) => ({ text: quote.text, author: quote.author }));
        setQuotes(quotes);
      };
      fetchQuotes();
    }, []);
  
    const getNextQuote = () => {
      setCurrentQuoteIndex((currentQuoteIndex + 1) % quotes.length);
    };
  
    return (
      <div>
        {quotes.length > 0 && (
          <Typed
            strings={[`${quotes[currentQuoteIndex].text} — ${quotes[currentQuoteIndex].author}`]}
            typeSpeed={80}
            backSpeed={40}
            onComplete={getNextQuote}
            showCursor={false}
            fadeOut={true}
            fadeOutDelay={2000}
            loop={true}
            loopCount={Infinity}
            smartBackspace={false}
          />
        )}
      </div>
    );
  };
  

export default Quote;