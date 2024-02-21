<script setup lang="ts">
import { Line } from '@unovis/ts/components/line';
import { VisXYContainer, VisLine, VisTooltip } from '@unovis/vue'

interface DataRecord {
  x: number
  y: number
}

defineProps<{ data: DataRecord[] }>()
const x = (d: DataRecord) => d.x
const y = (d: DataRecord) => d.y

const triggers = {
  [Line.selectors.line]: (d: DataRecord) => `<span>x :  ${d.x}<br / >y :  ${d.y}< / span>`
}
</script>

<template>
  <VisXYContainer :data="data">
    <VisLine :x="x" :y="y" color="#41b883" />
    <VisTooltip :triggers="triggers" />
  </VisXYContainer>
</template>