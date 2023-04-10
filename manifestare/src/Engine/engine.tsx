import React, { useState, useEffect } from "react";
import axios from "axios";
import Typed from "react-typed";

interface Quote {
  Cita: string;
  author: string;
}

const Quote: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(-1);
  const [usedQuoteIndexes, setUsedQuoteIndexes] = useState<number[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await axios.get("https://api.jsonbin.io/v3/b/64170e63c0e7653a058aac7e", {
        headers: {
          "X-Master-Key": "$2b$10$xFC7BlC/9mfhK2jwRMo.IemTR8HRFha0TZyWFgA8n./iRCF2kjqpG" // Pass the master key as a header
        }
      });
      const quotes = response.data.record.map((quote: any) => ({ Cita: quote.Cita, author: quote.author }));
      setQuotes(quotes);
      setCurrentQuoteIndex(Math.floor(Math.random() * quotes.length));
    };
    fetchQuotes();
  }, []);

  const getNextQuote = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    while (usedQuoteIndexes.includes(newIndex)) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    setCurrentQuoteIndex(newIndex);
    setUsedQuoteIndexes([...usedQuoteIndexes, newIndex]);
    if (usedQuoteIndexes.length === quotes.length - 1) {
      setUsedQuoteIndexes([]);
    }
  };

  return (
    <div>
      {currentQuoteIndex >= 0 && (
        <Typed
          strings={[`${quotes[currentQuoteIndex].Cita} — ${quotes[currentQuoteIndex].author}`]}
          typeSpeed={120}
          backSpeed={40}
          backDelay={2000}
          onComplete={getNextQuote}
          showCursor={false}
          fadeOut={true}
          fadeOutDelay={2000}
          loop={true}
          smartBackspace={false}
        />
      )}
    </div>
  );
};

export default Quote;