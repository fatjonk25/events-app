<template>
  <div>
      <div class="event-details">
        <p>{{event.name}}</p>
        <p>{{event.date}}</p>
        <p>{{event.time}}</p>
        <p>{{event.location}}</p>
        <p>{{event.desc}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name:'event-view',
  props:['id'],
  data() {
    return {
      event: {}
    }
  },
  methods: {
    async getEvent(){
      const response =  await fetch(`http://localhost:3000/events/${this.id}`);

      const data = await response.json();

      this.event = data;
    }
  },
  beforeMount(){
    this.getEvent();
  }
}
</script>

<style scoped>

.event-details {
  width: 780px;
  margin: 0 auto;
  background-color: brown;
}
</style>