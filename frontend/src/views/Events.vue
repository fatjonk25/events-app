<template>
  <div>
    <div v-for="event in events" :key="event.id">
      <div class="events">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="event-name">{{ event.name }}</span>
            <router-link :to="{name: 'event',  params: {id: event.id} }">
              <el-button class="details" style="float: right; padding: 3px 0" type="text"
                >Details</el-button
              >
            </router-link>
            <p class="event-location ">Location: {{ event.location }}</p>
            <div class="date-time">
              <p class="event-date">Date: {{ event.date }}</p>
              <p class="event-time">Time: {{ event.time }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "events-view",
  data() {
    return {
      events: [],
    };
  },
  methods: {
    async getEvents() {
      const response = await fetch("http://localhost:3000/events");

      const data = await response.json();
      this.events = data;
    },
  },
  beforeMount() {
    this.getEvents();
  },
};
</script>

<style scoped>
.events {
  width: 600px;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 650px;
  margin: 24px;
}

.event-name {
  display: inline-block;
  font-size: 42px;
  margin-bottom: 16px;
  color: #000;
}

.date-time {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}

.box-card p {
  margin-bottom: 10px;
   font-size: 18px;
}

.details {
  font-size: 16px;
  font-weight: bold;
  color: #212529;
}
</style>
