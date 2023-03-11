<template>
  <div>
    <div class="form-container">
      <el-form class="add-event" :rules="rules" ref="form" :model="form" label-width="120px">
        <el-form-item class="form-item" label="Event Name:" prop="name">
          <el-input
            placeholder="Enter the event name"
            v-model="form.name"
          ></el-input>
        </el-form-item>

        <el-form-item class="form-item" label="Event Date:" prop="date">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="form.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
        </el-form-item>
        <el-form-item class="form-item" label="Event Time:" prop="time">
          <el-col :span="11">
            <el-time-picker
              placeholder="Pick a time"
              v-model="form.time"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item class="form-item" label="Event Location:" prop="location">
          <el-input
            placeholder="Enter the location of the event"
            v-model="form.location"
          ></el-input>
        </el-form-item>

        <el-form-item class="form-item" label="Event Description:" prop="desc">
          <el-input
            placeholder="Give a short description for the following event"
            type="textarea"
            v-model="form.desc"
          ></el-input>
        </el-form-item>
        <el-form-item class="form-item">
          <el-button class="addButton" type="primary" @click="onSubmit('form')"
            >Add Event</el-button
          >
        </el-form-item>
      </el-form>
    </div>
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
      rules: {
          name: [
            { required: true, message: 'Please input event name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          location: [
            { required: true, message: 'Please enter location', trigger: 'blur' }
          ],
          date: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'blur' }
          ],
          time: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: 'Please give a short description', trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
     onSubmit(form) {
         this.$refs[form].validate((valid) => {
          if (valid) {
            const event = {
              name: this.form.name,
              location: this.form.location,
              date: this.form.date,
              time: this.form.time,
              desc: this.form.desc
          }

            this.form.name = '';
            this.form.location = '';
            this.form.date = '';
            this.form.time = '';
            this.form.desc = '';
        

          this.addEvent(event);
        
            this.$notify({
              title: 'Success',
              message: 'Event added succesfully!',
              type: 'success'
            });

          setTimeout(() => {
            this.$notify.closeAll();
          }, 5000);

        
          } else {
            console.log('error submit!!');
            return false;
          }
        });

     

    },
      async addEvent(eventO) {
       await fetch('http://localhost:3000/events', {
        method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(eventO),
      })
      this.$router.push({name:'events'})
    },
  },
};
</script>

<style scoped>
.add-event {
  width: 600px;
  margin: 0 auto;
}
.form-container {
  width: 600px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  margin-top: 5px;
  margin: 0 auto;
}
/* .el-form-item__content {
  margin-left: 0px !important;
} */

.addButton {
  width: 100%;
}

::v-deep .el-form-item__content {
  margin-left: 0px !important;
}
</style>
