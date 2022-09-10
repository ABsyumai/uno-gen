<script setup lang="ts">
import { ref, Ref } from "vue";
import { newDeck, Card as CardType, cardSorter } from "@def/card"
import Card from "./Card.vue";
const deck: Ref<CardType[]> = ref(newDeck());
const hand: Ref<CardType[]> = ref([])
const grave: Ref<CardType[]> = ref([])
const lastDiscard: Ref<CardType|undefined> = ref(undefined)
function reset() {
  const v = newDeck()
  deck.value = v;
  hand.value = []
  grave.value = []
  lastDiscard.value = undefined
}
function drow() {
  const c = deck.value.shift();
  if (c != null) {
    hand.value.push(c);
    hand.value.sort(cardSorter);
  } else {
    console.warn("deck is empty")
  }
}

function discard(idx: number){
  const c = hand.value[idx];
  if (c != null) {
    hand.value.splice(idx,1)
    lastDiscard.value = c
    grave.value.push(c)
  }
}
function refresh() {
  deck.value =  deck.value.concat(grave.value.sort(()=> Math.random() - 0.5))
  grave.value = []
}
</script>

<template>
  <div>
    <v-container>
      <v-row hight="90">
        <v-col>
          <v-btn @click="reset">初期化</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="drow">山札から引く</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="refresh">捨て札を山札に戻す</v-btn>
        </v-col>
        <v-col>山札残り: {{deck.length}}</v-col>
        <v-col v-if="lastDiscard != null">
          最後の捨て札: <Card :data="lastDiscard"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="card, idx in hand">
          <Card :data="card" :idx="idx" @click="discard(idx)"/>
          <!-- <v-card title>
            {{card}}
          </v-card> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>