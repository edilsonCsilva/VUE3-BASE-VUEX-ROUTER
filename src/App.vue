<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/">Go to Home</router-link>
      <br/>
      <router-link to="/about">Go to About</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
 

export default {
  name: "App",
  components: {
  
  },
};
</script>

<style>
 
</style>
