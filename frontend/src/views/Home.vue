<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(item, index) in images" :key="index">
      <img class="imageUrl" :src="item.imageUrl" :alt="item.altText" />
      <h3 class="medium">{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import salle from "../assets/images/salle.avif";
import drone from "../assets/images/drone.avif";
import saudi from "../assets/images/saudi.png";
import hardware from "../assets/images/hardware.avif";
import desk from "../assets/images/desk.avif";
import tech2 from "../assets/images/tech2.jpg";

export default {
  name: "home - view",
  data() {
    return {
      images: [
        {
          imageUrl: tech2,
        },
        {
          imageUrl: drone,
        },
        {
          imageUrl: salle,
        },
        {
          imageUrl: saudi,
        },
        {
          imageUrl: hardware,
        },
        {
          imageUrl: desk,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .home-img {
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
} */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.imageUrl {
  width: 600px;
}
</style>
