<template>
  <div>
    <div class="head">
      <h1>全部传感器</h1>
      <p>显示全部传感器</p>
    </div>
    <el-table :data="sensorData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item class="itemS" label="传感器id:">
              <span>{{ props.row.sensor_id }}</span>
            </el-form-item>
            <el-form-item class="itemS" label="传感器名称:">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item class="itemS" label="传感器状态:">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <el-form-item class="itemS" label="传感器电量:">
              <span>{{ props.row.power }}</span>
            </el-form-item>
            <el-form-item class="itemS" label="放置地点:">
              <span>{{ props.row.place }}</span>
            </el-form-item>
            <el-form-item class="itemS" label="温度:">
              <span>{{ props.row.temperature }} °c</span>
            </el-form-item>
            <el-form-item class="itemS" label="湿度:">
              <span>{{ props.row.humidity }}</span>
            </el-form-item>
            <el-form-item class="itemS" label="光照:">
              <span>{{ props.row.light }}</span>
            </el-form-item>
            <el-form-item class="itemS" label="风速:">
              <span>{{ props.row.wind }}</span>
            </el-form-item>
            <el-form-item class="itemS" label="PH值:">
              <span>{{ props.row.ph }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="传感器id" prop="sensor_id"> </el-table-column>
      <el-table-column label="传感器名称" prop="name"> </el-table-column>
      <el-table-column label="放置地点" prop="place"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sensorData: [],
    };
  },
  methods: {
    async getSensor() {
      const res = await this.$http.get("sensor/find");
      if (res.status == 200) {
        this.sensorData = res.data;
        // console.log(res);
      }
    },
  },
  mounted() {
    this.getSensor();
  },
};
</script>
<style>
.el-form-item label {
  font-weight: 600;
}
.itemS {
  display: block !important;
}
</style>
