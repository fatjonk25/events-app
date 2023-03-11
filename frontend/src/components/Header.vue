<template>
  <div>
     <header class="header">
      <h3>Logo</h3>
      <nav>
        <ul class="nav-items">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/events">Events</router-link></li>
          <li><router-link to="/add-event">Add Event</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/LoginForm">Login</router-link></li>
          <li><router-link to="/RegisterForm">Register</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name:'header-component'
}
</script>

<style scoped>
.header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 0 40px;
}

.nav-items {
  display: flex;
  list-style: none;
}

.nav-items li {
  margin: 0 20px;
}

.nav-items li a {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 18px;
}
</style>