<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { LineChart } from '../charts';

defineProps<{
  data: { x: number; y: number }[], currencyName: string, currencyPrice: string
}>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        {{ currencyName }}
      </CardTitle>
      <CardDescription>
        {{ currencyPrice }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <LineChart :data="data" />
    </CardContent>
    <CardFooter>
      <Button variant="ghost">Time</Button>
      <Button variant="ghost">Price</Button>
    </CardFooter>
  </Card>
</template>