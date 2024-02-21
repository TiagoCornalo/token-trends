import { PricePoint } from "@/types";

type CoinGeckoPriceResponse = {
  prices: [number, number][];
};


const transformCoinGeckoData = (response: CoinGeckoPriceResponse): { chartData: PricePoint[]; lastPrice: string } => {
  const chartData: PricePoint[] = response.prices.map((price, index) => ({
    x: index,
    y: price[1],
  }));

  const lastPrice: string = chartData.length > 0
    ? chartData[chartData.length - 1].y.toFixed(2)
    : '';

  return { chartData, lastPrice };
}

export default transformCoinGeckoData;