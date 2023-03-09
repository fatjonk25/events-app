<template>
  <div>
    <el-form class="add-event" ref="form" :model="form" label-width="120px">
      <el-form-item label="Event title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="Event place">
        <el-input v-model="form.place"></el-input>
      </el-form-item>
      <el-form-item label="Event time&date">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="form.date"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="Pick a time"
            v-model="form.time"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "add-event",
  data() {
    return {
      form: {
        title: "",
        place: "",
        date: "",
        time: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.add-event {
  width: 600px;
  margin: 0 auto;
}
</style>
