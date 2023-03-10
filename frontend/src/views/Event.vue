<template>
  <div>
    <div class="event-details">
      <p>Event name: {{ event.name }}</p>
      <p>Event date: {{ event.date }}</p>
      <p>Event time: {{ event.time }}</p>
      <p>Event location: {{ event.location }}</p>
      <p>Event description: {{ event.desc }}</p>
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
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}

.event-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.event-details p {
  margin-bottom: 15px;
}

.event-details .date-time {
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
}

.event-details .location {
  font-size: 18px;
  margin-bottom: 15px;
}

.event-details .description {
  font-size: 16px;
  line-height: 1.5;
}
</style>
