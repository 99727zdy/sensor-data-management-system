<template>
  <div>ControlSensor</div>
</template>
<script>
export default {
  data() {
    return {
      sensorData: [],
      sensorForm: {
        sensor_id: "",
        name: "",
        place: "",
      },
    };
  },
  methods: {
    async getSensor() {
      const res = await this.$http.get("sensor/find");
      if (res.status == 200) {
        this.sensorData = res.data;
        // console.log(this.sensorData);
      }
    },
    async getConSen() {
      const res = await this.$http.post("sensor/control?sensor_id=" + "1");
      console.log(res);
      if (res.status == 200) {
        console.log(res.data);
        this.$message({
          message: res.data,
          type: "success",
        });
      }
    },
  },
  mounted() {
    // this.getSensor();
    this.getConSen();
  },
};
</script>