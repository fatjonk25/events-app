<template>
  <div>
    <div v-for="event in events" :key="event.id">
      <div class="events">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ event.title }}</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >Details</el-button
            >
            <p>{{ event.date }}</p>
            <p>{{ event.time }}</p>
            <p>{{ event.place }}</p>
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
  width: 480px;
}
</style>
