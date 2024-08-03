<template>
    <div class="topnav">
      <a class="active" href="#home">
        <font-awesome-icon icon="home" /> YL-OFDEAT
      </a>
      <div class="nav-right">
        <div class="login-container">
          <button type="submit" @click="downloadPDF">
            <font-awesome-icon icon="download" /> {{ $t('downloadHistory') }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import buttondrop from './dropdown.vue';
  import { ref } from 'vue';
  import html2pdf from 'html2pdf.js';
  
  const downloadPDF = () => {
    const element = document.querySelector('.pdf-content');
    const opt = {
      margin: 1,
      filename: 'transaction_history.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().from(element).set(opt).save();
  };
  </script>
  
  <style>
  .topnav {
    background-color: #333;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
  
  .topnav a {
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .nav-right {
    display: flex;
    align-items: center;
  }
  
  .login-container {
    margin-left: 16px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: auto;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  /* Hide pdf-only elements on the webpage */
  .pdf-only {
    display: none;
  }
  </style>