<!-- 气象五参数监测一览 -->
<template>
  <div class="body">
    <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
      <div class="header"><div>气象五参数监测一览</div></div>
      <div class="content">
        <div class="con">
          <i
              class="el-icon-sunny"
              style="transform: scale(4.5); color: #ff7d34"
          ></i>
        </div>
        <div class="cont">
          <span>晴天</span>
          <span>{{ temperature }}℃</span>
        </div>
      </div>
      <div class="footcard">
        <el-card class="fcard" shadow="hover" :body-style="{ padding: '0px' }">
          <i
              class="el-icon-wind-power"
              style="transform: scale(2); color: #4087e8"
          ></i>
          <div>风速</div>
          <div>{{ Wind }}m/s</div>
        </el-card>
        <el-card
            class="fcard"
            shadow="hover"
            :body-style="{ padding: '0px' }"
        ><i
            class="el-icon-partly-cloudy"
            style="transform: scale(2); color: #4087e8"
        ></i>
          <div>风向</div>
          <div>{{offsetof}}°</div></el-card>
        <el-card
            class="fcard"
            shadow="hover"
            :body-style="{ padding: '0px' }"
        ><i
            class="el-icon-heavy-rain"
            style="transform: scale(2); color: #4087e8"
        ></i>
          <div>湿度</div>
          <div>{{humidity}}%</div></el-card>
        <el-card
            class="fcard"
            shadow="hover"
            :body-style="{ padding: '0px' }"
        ><i
            class="el-icon-odometer"
            style="transform: scale(2); color: #4087e8"
        ></i>
          <div>气压</div>
          <div>{{ pair }}pa</div></el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
import { weather } from "@/api/base/login"
export default {
  data(){
    return{
      temperature:'', //温度
      Wind:'', //风速
      offsetof:'', //风向
      humidity:'',//湿度
      pair:'',//气压
    }
  },
  mounted(){

  },
  created(){
    // 此处封装api为本文开头的API服务器地址
    weather().then((r) => {
      console.log('调用彩云气象参数')
      var R =  r.data.result.hourly
      this.temperature = R.temperature[0].value
      this.Wind = R.wind[0].direction
      this.offsetof = R.wind[0].speed
      this.humidity = parseInt (R.humidity[0].value *100)
      this.pair =parseInt(R.pres[0].value / 100)
      // console.log(R.wind[0].direction)

    });
  }

};
</script>

<style lang="less" scoped>
.body {
  width: 285px;
  height: 300px;
}
.box-card {
  height: 298px;
  padding: 0px 20px;
}
.header {
  font-weight: 600;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #97cbff;
}
.content {
  height: 125px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直居中 */
  border-bottom: 2px solid #e1f0ff;
  .con {
    width: 77px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center; /* 垂直居中 */
  }
  .cont {
    width: 110px;
    height: 70px;
    display: flex;
    flex-flow: column; // 纵向布局
    text-align: left;
    span:nth-child(1) {
      font-size: 20px;
    }
    span:nth-child(2) {
      font-size: 30px;
    }
  }
}
.footcard {
  height: 130px;
  // width: 285px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fcard {
    div:nth-child(2){
      font-size: 10px;
      margin: 5px;
    }
    width: 56px;
    height: 80px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
