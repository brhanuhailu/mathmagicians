import { useState, useEffect } from 'react';

const Quote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quoteResponse, setQuoteResponse] = useState([]);

  useEffect(() => {
    const category = 'happiness';
    const quApiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const apiKey = 'pQyOBaGG15eHG4sDxS/97g==qjMkIgljqs18YGWd';
    const getQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(quApiUrl,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': apiKey,
            },
          });
        const data = await response.json();
        setQuoteResponse(data);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    getQuote();
  }, [setIsLoading, setError]);

  if (isLoading) return <h2>Quote is Loading</h2>;
  if (error) return <h2>Something went wrong! or connetion failed</h2>;

  return (
    <div className="qoutes">
      <h1> Quotes from Api about happiness</h1>
      {quoteResponse.map((quotes) => (
        <div key={quotes.id}>
          {quotes.quote}
          <strong>
            <em className="author">{quotes.author}</em>
            {' '}
          </strong>
        </div>
      ))}
    </div>
  );
};

export default Quote;
