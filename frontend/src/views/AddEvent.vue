<template>
  <div>
    <el-form class="add-event" ref="form" :model="form" label-width="120px">
      <el-form-item label="Event name">
        <el-input
          placeholder="Enter the event name"
          v-model="form.name"
        ></el-input>
      </el-form-item>

      <el-form-item label="Event time">
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

      <el-form-item label="Event location">
        <el-input
          placeholder="Enter the location of the event"
          v-model="form.location"
        ></el-input>
      </el-form-item>

      <el-form-item label="Event description">
        <el-input
          placeholder="Give a short description for the following event"
          type="textarea"
          v-model="form.desc"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="addButton" type="primary" @click="onSubmit"
          >Add Event</el-button
        >
        <el-button class="cancelButton" @click="oncancel">Cancel</el-button>
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
        name: "",
        location: "",
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
.addButton {
  width: 230px;
}

.cancelButton {
  width: 230px;
  margin-left: 20px;
}
</style>
