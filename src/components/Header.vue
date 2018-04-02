<template>
  <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="">
            <img class="header-logo" src="../assets/logo.png">
            <h1>GitHub API Tester</h1>
        </a>

        <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
        </div>
    </div>
    </nav>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
    .header-logo {
        margin-right: 10px;
    }
</style>