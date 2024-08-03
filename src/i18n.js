import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    expenseTracker: 'Expense Tracker',
    yourBalance: 'Your Balance',
    income: 'Income',
    expense: 'Expense',
    transactionHistoryDetails: 'Transaction History Details',
    addNewTransaction: 'Add new transaction',
    text: 'Text',
    historyy:'history',
    amount: 'Amount (negative - expense, positive - income)',
    addTransaction: 'Add transaction',
    downloadHistory: 'Download history',
  },
  fr: {
    expenseTracker: 'Suivi des dépenses',
    yourBalance: 'Votre Solde',
    income: 'Revenu',
    expense: 'Dépense',
    transactionHistoryDetails: 'Détails de l\'historique des transactions',
    addNewTransaction: 'Ajouter une nouvelle transaction',
    text: 'Texte',
    historyy:'l\'historique',
    amount: 'Montant (négatif - dépense, positif - revenu)',
    addTransaction: 'Ajouter une transaction',
    downloadHistory: 'Télécharger l\'historique',
  },
  ar: {
    expenseTracker: 'متتبع النفقات',
    yourBalance: 'رصيدك',
    income: 'الدخل',
    expense: 'المصروف',
    transactionHistoryDetails: 'تفاصيل سجل المعاملات',
    addNewTransaction: 'إضافة معاملة جديدة',
    text: 'النص',
    amount: 'المبلغ (سالب - مصروف، موجب - دخل)',
    addTransaction: 'إضافة معاملة',
    downloadHistory: 'تحميل السجل',
    historyy:' السجل',
  },
};

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;