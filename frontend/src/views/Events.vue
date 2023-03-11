<template>
  <div>
    <div v-if="loading">
      <Loading></Loading>
    </div>
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
              <p class="event-date">Date: {{ event.date | formatDate }}</p>
              <p class="event-time">Time: {{ event.time | formatTime }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name: "events-view",
  components: {
    Loading
  },
  data() {
    return {
      loading: false
    };
  },
  computed:{
     ...mapState({
        events: state => state.events
    })
  },
  methods: {
   ...mapActions(['getEvents']),
    async fetchEventsData() {
      this.loading = true;
      await this.getEvents()
      this.loading = false;

    }
  },
  beforeMount() {
    this.fetchEventsData();
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
