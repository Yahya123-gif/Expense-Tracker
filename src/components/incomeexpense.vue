<template>
    <div class="inc-exp-container">
      <div>
        <h4>{{ $t('income') }}</h4>
        <p id="money-plus" class="money plus">+${{ income }}</p>
      </div>
      <div>
        <h4>{{ $t('expense') }}</h4>
        <p id="money-minus" class="money minus">-${{incomminus  }}</p>
      </div>
    </div>
  </template>

  <script setup>
   import { defineProps } from 'vue';

   const props = defineProps({
    income:{
      type:Number,
      required:true
    },
    incomminus:{
      type:Number,
      required:true
    }
   })
  </script>