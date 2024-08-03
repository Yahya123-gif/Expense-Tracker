<template>
    <h4>{{ $t('yourBalance') }}</h4>
    <h1 id="balance"><font-awesome-icon icon="dollar-sign" /> {{ totalBalance }}</h1>
  </template>
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    totalBalance:{
      type:  Number,
      required:true
    }
  })
  </script>