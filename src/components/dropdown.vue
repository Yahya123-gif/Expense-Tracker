<template>
    <div class="container">
      <ul class="language-switcher">
        <li @click="changeLanguage('fr')" :class="{ active: currentLocale === 'fr' }">
          <span>FR</span>
        </li>
        <li @click="changeLanguage('ar')" :class="{ active: currentLocale === 'ar' }">
          <span>AR</span>
        </li>
        <li @click="changeLanguage('en')" :class="{ active: currentLocale === 'en' }">
          <span>ENG</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentLocale: this.$i18n.locale,
      };
    },
    methods: {
      changeLanguage(locale) {
        this.currentLocale = locale;
        this.$i18n.locale = locale;
      },
    },
    watch: {
      '$i18n.locale': function (newLocale) {
        this.currentLocale = newLocale;
      },
    },
  };
  </script>
  
  <style scoped>
  .container{
    position: fixed;
    top: 15px;

    left: 80%;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .language-switcher {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 8px;
  }
  
  .language-switcher li {
    cursor: pointer;
  }
  
  .language-switcher span {
    padding: 5px 10px;
    color: white;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .language-switcher .active span {
    background-color: #4CAF50;;
    color: white;
  }
  @media (max-width: 768px) {
    .container{
    position: fixed;
    top: 15px;

    left: 60%;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  }
  
  </style>