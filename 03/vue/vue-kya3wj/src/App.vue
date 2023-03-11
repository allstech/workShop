<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    -->
    <RouterView />

    <footer
      class="
        fixed
        bottom-0
        left-0
        w-full
        flex
        items-center
        justify-center
        bg-slate-900
        py-2
      "
    >
      <RouterLink
        to="/"
        class="
          px-4
          py-2
          rounded-lg
          bg-cyan-400
          shadow-lg shadow-lime-500/50
          border-2 border-black
          outline outline-1 outline-white
        "
      >
        Home
      </RouterLink>

      <RouterLink
        to="/character"
        class="
          px-4
          py-2
          rounded-lg
          bg-cyan-400
          shadow-lg shadow-lime-500/50
          border-2 border-black
          outline outline-1 outline-white
        "
      >
        Char
      </RouterLink>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
