import axios from 'axios';

const BASE_URL = import.meta.env.VITE_COINGECKO_API_URL;


const getCoinMarketChart = async (coinId: string) => {
  const response = await axios.get(`${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=1`);
  return response.data;
}

export default {
  getCoinMarketChart,
};