import useSWR from 'swr';

/* Call useCoinPrice() to get the price of any coin existing at coinGecko's database.
  Receives 3 string props: coinName, currency, precision, and returns an object containing 
  coinPrice, isLoading, isError. Use API id as coinName, you can get the API id of the coin 
  you like at coigecko's website. Read more here: https://www.coingecko.com/en/api/documentation */

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function useCoinPrice(
  coinName = 'pancakeswap-token',
  currency = 'USD',
  precision = '3'
) {
  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=${currency}&precision=${precision}`,
    fetcher
  );

  const coinPrice = data && data[coinName][currency.toLowerCase()];

  return {
    coinPrice: coinPrice,
    isLoading,
    isError: error,
  };
}

export default useCoinPrice;
