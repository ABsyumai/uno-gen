<script setup lang="ts">
import { defineProps, PropType, computed } from 'vue';
import { Card } from '../def/card';
const props = defineProps({
  data: {
    type: Object as PropType<Card>,
    required: true
  },
  // idx: {
  //   type: Number,
  //   required: true
  // }
})
const emits = defineEmits({
})
// const fill = computed(()=>{
//   props.data.color === "black" ? "#ffffff" : "#000000"
// })
// const stroke = computed(()=>{
//   props.data.color === "black" ? "#000000"
// })
const k = 1.5;
const width = 56*k;
const height = 87*k;
</script>

<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
  <rect x="0" y="0" :width="width" :height="height" :fill="data.color" />
  <text x="10" y="20" stroke="#000000" fill="#ffffff" stroke-width="0.5" >{{data.ty}}</text>
</svg>
</template>

<script lang="ts">


</script>