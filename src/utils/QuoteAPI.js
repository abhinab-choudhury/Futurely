export default async function QuoteAPI(setQuoteText, setLoading, setResult) {
  const url = import.meta.env.VITE_QUOTE_API_URI;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_QUOTE_API_KEY,
      'X-RapidAPI-Host': 'love-quote.p.rapidapi.com'
    }
  };
  try {
    setResult('');
    setLoading(true);
    await fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteText(data.quote);
        setLoading(false);
      });
  } catch (error) {
    return 'Something Went Wrong';
  }
}
