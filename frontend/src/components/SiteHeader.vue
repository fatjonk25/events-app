<template>
 <nav class="navbar navbar-expand-xxl w-100% bg-body-tertiary navi shadow-sm p-3 mb-5 bg-body-tertiary rounded">
  <div class="container-fluid ml-90">
    <a class=" logo navbar-brand" href="http://localhost:8080/">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link " aria-current="http://localhost:8080/" href="http://localhost:8080/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="About" href="About">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Events">EVENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="add-event">ADD EVENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="LoginForm">LOGIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="LoginForm">REGISTER</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>
nav{
  font-size: large;
  padding-left: 10px;
}
nav ul{
  margin-left: 62%;
}


</style>
<script setup>

</script>