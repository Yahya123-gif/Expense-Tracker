<template>
  <navbar />
  <dropdown />
  <div class="containerr">
    <div class="left">
      <Header />
      <balance :totalBalance="totalBalance" />
      <incomeExp :income="income" :incomminus="incomminus" />
    </div>
    <div class="center">
      <div class="pdf-content" id="transaction-content">
        <header class="pdf-header">
          <h1>{{ $t('transactionHistoryDetails') }}</h1>
        </header>
        <TransactionList @transactiondeleted="DeleteTransaction" :transactions="transactions" />
        <footer class="pdf-footer pdf-only">
          <p>BY YAHIA</p>
        </footer>
      </div>
    </div>
    <div class="right">
      <addTransaction @transactionSubmited="handleTransaction" />
    </div>
  </div>
</template>

<script setup>
import dropdown from './dropdown.vue';
import navbar from './navbar.vue';
import Header from './header.vue';
import balance from './balance.vue';
import incomeExp from './incomeexpense.vue';
import TransactionList from './transactionLists.vue';
import addTransaction from './addTransaction.vue';
import { computed, ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

const totalBalance = computed(() => {
  return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0);
});

const income = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

const incomminus = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

const handleTransaction = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });
  saveTransactionToLocalStorage();
  toast.success('Transaction added');
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 100000);
};

const DeleteTransaction = (id) => {
  transactions.value = transactions.value.filter(transaction => transaction.id !== id);
  saveTransactionToLocalStorage();
  toast.success('Transaction deleted');
};

const saveTransactionToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
};
</script>

<style>
.containerr {
  display: flex;
  flex-wrap: wrap;
}

.left, .center, .right {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
}

.pdf-content {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.pdf-header, .pdf-footer {
  text-align: center;
  margin: 20px 0;
}

.transaction-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.transaction-item {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}

.transaction-item .amount {
  color: #2ecc71;
}

.transaction-item .amount.negative {
  color: #e74c3c;
}
</style>