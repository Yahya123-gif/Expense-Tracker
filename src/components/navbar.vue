<template>
  <div class="topnav">
    <a class="active">
      <font-awesome-icon icon="home" /> YL
    </a>
    <div class="nav-right">
      <div class="login-container">
        <button type="submit" @click="downloadPDF">
          <font-awesome-icon icon="download" /> {{ $t('downloadHistory') }}
        </button>
      </div>
      <a href="javascript:void(0);" class="icon" @click="toggleNavMenu">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <div class="nav-menu" :class="{ 'show': showNavMenu }">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';

const showNavMenu = ref(false);

const toggleNavMenu = () => {
  showNavMenu.value = !showNavMenu.value;
};

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
  width: 100%;
  position: fixed;
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
  font-weight: 800;
  text-decoration: none;
  font-size: 35px;
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

/* Responsive styles */
@media (max-width: 768px) {
  .topnav {
  width: 100%;
  position: fixed;
  padding: 10px 0px;
}

.topnav a {
  padding: 5px 5px;
  font-size: 17px;
}

.nav-right {
  display: flex;
  position: relative;
  left: -80px;
  width: 200px;
 
  align-items: center;
}
.nav-right  button{
  border-radius: 20px;
  padding:5px;
}
.login-container {
  margin-left: 16px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 2px 2px;
  margin: 2px 0;
  border: none;
  cursor: pointer;
  width: auto;
}

}

@media screen and (min-width: 600px) {
  
}
</style>