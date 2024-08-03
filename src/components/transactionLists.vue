<template>
  <div>
    <h3>{{ $t('historyy') }}</h3>
    <ul id="list" class="list">
      <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
        {{ transaction.text }} <span>${{ transaction.amount }}</span>
        <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['transactiondeleted']);

const deleteTransaction = (id) => {
  emit('transactiondeleted', id);
};
</script>

<style scoped>
/* Add styles here if needed */
</style>