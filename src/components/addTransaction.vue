<template>
  <h3>{{ $t('addNewTransaction') }}</h3>
  <form id="form" @submit.prevent="addTransaction">
    <div class="form-control">
      <label for="text">{{ $t('text') }}</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount">
        {{ $t('amount') }} <br />
      </label>
      <input type="text" id="amount" placeholder="Enter amount..." v-model="amount" />
    </div>
    <button class="btn">{{ $t('addTransaction') }}</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('');
const amount = ref('');
const emit = defineEmits(['transactionSubmited']);
const toast = useToast();

const addTransaction = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled');
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  if (isNaN(transactionData.amount)) {
    toast.error('Amount must be a number');
    return;
  }

  emit('transactionSubmited', transactionData);

  text.value = '';
  amount.value = '';
};
</script>

<style scoped>
/* Add styles here if needed */
</style>