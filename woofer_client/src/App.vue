
<template>
  <div id="app">
    <main>
    <!-- This is where components that every page is placed, the navbar and footer, the rest of the pages flow through here when the router does its thing -->
      <navbar1 :user="user" @interface="user = $event" />
      <router-view :user="user" @interface="user = $event" />
    </main>
    <footer1 class="sticky" />
  </div>
</template>

<script>
// For vue you have to import components to the main page
  import navbar1 from "./components/navbar.vue";
  import footer1 from "./components/footer.vue";
  import localStorages from "@/services/localStorage";
  // This exporting the main engine of the entire application. 
  export default {
    name: "App",
    // You've got to list the components here to export
    components: {
      navbar1,
      footer1
    },
    data() {
      return {
        // To use Vue's reactivity you have to call the variable so vue watches for a change in state. So sign-in/out
        user: ""
      };
    },
    methods: {
      checkUser() {
        return localStorages.getLocal();
      }

    },
    // Mounted is part of the lifecycle of vue, important for data change or sending data back and forth
    mounted() {
      this.user = this.checkUser();
      console.log(this.user);
    }
  };

</script>

<style>
  #app {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #797979;
  }

  main {
    min-height: calc(100vh - 70px);
  }

  .sticky {
    height: 50px;
  }

  .btn {
    font-family: "Montserrat", sans-serif;
    text-transform: capitalize;
    background-color: #10c5cc;
  }

  h5,
  h6 {
    line-height: 1.6;
    color: #b20e7b;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #0ac6cb;
  }

  

</style>
