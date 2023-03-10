<template>
  <div>
    <div class="event-details">
      <h2>{{ event.name }}</h2>
      <div class="details-container">
        <div class="details-row">
          <i class="far fa-calendar-alt"></i>
          <p>{{ event.date }}</p>
        </div>
        <div class="details-row">
          <i class="far fa-clock"></i>
          <p>{{ event.time }}</p>
        </div>
        <div class="details-row">
          <i class="fas fa-map-marker-alt"></i>
          <p>{{ event.location }}</p>
        </div>
      </div>
      <p class="description">{{ event.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "event-view",
  props: ["id"],
  data() {
    return {
      event: {},
    };
  },
  methods: {
    async getEvent() {
      const response = await fetch(`http://localhost:3000/events/${this.id}`);

      const data = await response.json();

      this.event = data;
    },
  },
  beforeMount() {
    this.getEvent();
  },
};
</script>

<style scoped>
.event-details {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.event-details h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.details-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.details-row {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.details-row i {
  font-size: 24px;
  margin-right: 10px;
  color: #555;
}

.description {
  font-size: 18px;
  line-height: 1.5;
}
</style>
