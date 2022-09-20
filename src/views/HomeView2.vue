<template>
  <div>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple">aa</div></el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-container>
            <el-header height="25vh" style="background-color: blueviolet" ><h1 style="margin-top: 100px">标题</h1></el-header>
            <el-main  style="height: 70vh; background-color: aqua">
              <el-container>
                <el-container>
                  <el-aside width="10vw" style="height: 10vw; background-color: wheat">
                    <el-row>
                      <Weather></Weather>
                    </el-row>

<!--                    <el-container class="index-weather">-->
<!--                      <el-aside width="5wx" class="index-weather-temp">19℃</el-aside>-->
<!--                      <el-container>-->
<!--                        <el-header >Header</el-header>-->
<!--                        <el-main>Main</el-main>-->
<!--                      </el-container>-->
<!--                    </el-container>-->
                  </el-aside>
                  <el-main style="background-color: #42b983">Main</el-main>
                </el-container>
                <el-footer style="height: 5vh; background-color: yellowgreen">Footer</el-footer>
              </el-container>
              <el-container>
                <el-main style="height: 40vh; background-color: #42b983">Main</el-main>
<!--                <el-footer style="height: 3vh; background-color: #2c3e50">Footer</el-footer>-->
              </el-container>
            </el-main>
            <el-footer height="5vh" style="background-color: aquamarine">Footer</el-footer>
          </el-container>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple">cc</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">cc</div></el-col>
    </el-row>
  </div>
</template>


<script>
// import { weather } from "https://api.caiyunapp.com/v2.6/api/base/login"
// import { weather } from "https://api.caiyunapp.com/v2.5/bU78pkqSYxNpNxi2/121.6544,25.1552/realtime.json"
import axios from "axios";
import Vue from "vue";
import Weather from "@/views/Weather";
Vue.prototype.$axios = axios
export default {
  name: 'Home',
  components: {Weather},
  data(){
    return{
      location:{},
      local:'',
      b:'',
      region:'',
      weather:{},
      air:{},
      temp:'', //温度
      // Wind:'', //风速
      // offsetof:'', //风向
      // humidity:'',//湿度
      // pair:'',//气压
    }
  },
  watch: {
    local(){
      // const result = await this.getLocation();
      console.log("a="+this.local)

      axios({
        url: "https://devapi.qweather.com/v7/weather/now?key=0858a1f9366343f9a6661daf897e6362&location="+this.local+"",
        method: "get",
      }).then(res => {
        console.log(res)
        this.weather = res.data.now;
        console.log(this.weather)

      });

      axios({
        url: "https://devapi.qweather.com/v7/air/now?key=0858a1f9366343f9a6661daf897e6362&location="+this.local+"",
        method: "get",
      }).then(res => {
        console.log(res)
        this.air = res.data.now;
        console.log(this.weather)

      });


    },
    getWeather(){

    }

  },
  mounted(){

  },
  // props: ["local"],
  created(){
    this.getLocation();
    this.getWeather();


  },
  methods:{
    getLocation(){
      let city = "榕城";

      axios({
        url: "https://geoapi.qweather.com/v2/city/lookup?key=0858a1f9366343f9a6661daf897e6362&location="+city+"",
        method: "get",
        // dataType: 'jsonp',  // 请求方式为jsonp
        // params: {
        //   id: this.$route.query.q
        // }
      }).then(res => {
        this.location = res.data.location;
        // console.log(this.location[0].lon);
        this.local = this.location[0].lon + "," +this.location[0].lat;
        this.region = this.location[0].adm2 + "市" +this.location[0].name + "区";
        let a = this.local
        console.log(a)
        return a;
      });
    },


  },



};
</script>


<!--<style>-->
<!--.index-weather{-->
<!--  height: 10vw;-->
<!--  border-radius: 20px;-->
<!--  background-color: lightskyblue;-->
<!--}-->

<!--.index-weather-temp{-->
<!--  height: 3.5vw;-->
<!--  padding-top: 1.5vw;-->
<!--  position: relative;-->
<!--  /*top: 30px;*/-->
<!--  font-size: 25px;-->
<!--  font-family: "阿里巴巴普惠体 2.0 105 Heavy";-->
<!--}-->

<!--.index-weather-end{-->
<!--  height: 1.5vw;-->
<!--  padding-top: 1vw;-->
<!--  position: relative;-->
<!--  /*top: 30px;*/-->
<!--  font-size: 15px;-->
<!--  font-family: "阿里巴巴普惠体 2.0 105 Heavy";-->
<!--}-->

<!--.index-weather-icon{-->
<!--  padding-top: 1.5vw;-->
<!--  position: relative;-->
<!--}-->

<!--/*.index-weather img{*/-->
<!--/*  width: 30px;*/-->
<!--/*  height: 30px;*/-->
<!--/*}*/-->


<!--</style>-->
