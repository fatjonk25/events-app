<template>
  <div>
     <img class="home-img" src="../assets/images/events-home.jpg" alt="events-home">
     <div class="content">
      <h3>This is Home Page</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illum delectus tempora iure inventore exercitationem libero repellendus, autem mollitia odit commodi? Consectetur doloribus at pariatur tenetur voluptas ex debitis quibusdam.</p>
     </div>
  </div>
</template>

<script>
export default {
  name: 'home-view'
}
</script>

<style scoped>
.home-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.content {
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}
</style>