<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { coinGeckoService } from '@/services';
import { transformMarketChart } from '@/utils';
import { CurrencyChartCard } from '@/components';
import { PricePoint } from "@/types";


const btcData = ref<{ chartData: PricePoint[]; price: string }>({ chartData: [], price: '' });
const bnbData = ref<{ chartData: PricePoint[]; price: string }>({ chartData: [], price: '' });


const fetchCurrencyData = async (currencyId: string) => {
  const rawData = await coinGeckoService.getCoinMarketChart(currencyId);
  const { chartData, lastPrice } = transformMarketChart({ prices: rawData.prices });

  return {
    chartData,
    price: lastPrice
  };
};

onMounted(async () => {
  btcData.value = await fetchCurrencyData('bitcoin');
  bnbData.value = await fetchCurrencyData('binancecoin');
});

</script>

<template>
  <div>
    <h1>Home</h1>
    <CurrencyChartCard :data="btcData.chartData" currencyName="BTC" :currencyPrice="`$${btcData.price}`" />
    <CurrencyChartCard :data="bnbData.chartData" currencyName="BNB" :currencyPrice="`$${bnbData.price}`" />
  </div>
</template>