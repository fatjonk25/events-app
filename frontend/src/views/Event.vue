<template>
  <div>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="event-details">
      <h2>{{ event.name }}</h2>
      <div class="details-container">
        <div class="details-row">
          <i class="far fa-calendar-alt"></i>
          <p>{{ event.date | formatDate }}</p>
        </div>
        <div class="details-row">
          <i class="far fa-clock"></i>
          <p>{{ event.time | formatTime }}</p>
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
import {mapState, mapActions} from 'vuex'

import Loading from '../components/Loading.vue'
export default {
  name: "event-view",
  components: {
    Loading
  },
  props: ["id"],
  data() {
    return {
      loading: false
    };
  },
  computed:{
    ...mapState({
      event: state => state.event
    })
  },
  methods: {
    ...mapActions(['getEvent']),
    async fetchSingleEvent(){
      this.loading = true;
      await this.getEvent(this.id)
      this.loading = false
    }
  },
  beforeMount() {
    this.fetchSingleEvent();
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
