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
                    <el-row class="index-weather">
                      <el-col :span="12"><div class="index-weather-temp" >{{ weather.temp }}℃</div></el-col>
                      <el-col :span="12"><div class="index-weather-icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="`qi-400`" viewBox="0 0 16 16" >
                          <path d="M7.012 14.985a1 1 0 0 0 2 0 6.605 6.605 0 0 0-1-2 6.605 6.605 0 0 0-1 2zM3.959 14a1 1 0 0 0 2 0 6.605 6.605 0 0 0-1-2 6.605 6.605 0 0 0-1 2zm6.028 0a1 1 0 0 0 2 0 6.605 6.605 0 0 0-1-2 6.605 6.605 0 0 0-1 2zM5.207 1.904h.007a.5.5 0 0 0 .493-.506L5.695.494a.5.5 0 0 0-.5-.494h-.007a.5.5 0 0 0-.493.506l.012.905a.5.5 0 0 0 .5.493zm-2.892.946a.5.5 0 1 0 .698-.716l-.648-.63a.5.5 0 1 0-.697.715zm-.179 2.203a.5.5 0 0 0-.5-.493h-.007l-.905.011a.5.5 0 0 0 .007 1h.007l.904-.011a.5.5 0 0 0 .494-.507zm5.638-2.12a.5.5 0 0 0 .359-.151l.63-.648a.5.5 0 0 0-.716-.698l-.631.648a.5.5 0 0 0 .358.849z"/>
                          <path d="M12.028 5.579a2.927 2.927 0 0 0-.37.037 4.364 4.364 0 0 0-7.316 0 2.926 2.926 0 0 0-.37-.037 2.972 2.972 0 1 0 1.16 5.709 4.302 4.302 0 0 0 5.735 0 2.972 2.972 0 1 0 1.16-5.71zm0 4.944a1.959 1.959 0 0 1-.77-.156 1 1 0 0 0-1.05.168 3.303 3.303 0 0 1-4.417 0 1 1 0 0 0-1.05-.168 1.972 1.972 0 1 1-.769-3.788 1.077 1.077 0 0 1 .15.017l.095.012a1 1 0 0 0 .962-.444 3.364 3.364 0 0 1 5.642 0 1 1 0 0 0 .962.444l.095-.012a1.08 1.08 0 0 1 .15-.017 1.972 1.972 0 1 1 0 3.944zM2.482 5.315A3.53 3.53 0 0 1 3.5 5.027a1.831 1.831 0 0 1 1.81-1.603 1.81 1.81 0 0 1 .553.095 4.933 4.933 0 0 1 1.281-.405A2.82 2.82 0 0 0 2.476 5.26c0 .02.006.037.006.056z"/>
<!--                          <img src="`/some/path/400.svg`" alt="QWeather" width="32" height="32" class="">-->
                        </svg>
                      </div></el-col>
                      <el-col :span="24"><div class="index-weather-end">{{ weather.text }} 空气 {{ air.category }}{{ air.aqi }}</div></el-col>
                      <el-col :span="24"><div class="grid-content bg-purple-dark">{{ region }}</div></el-col>
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
Vue.prototype.$axios = axios
export default {
  name: 'Home',
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


<style>
.index-weather{
  height: 10vw;
  border-radius: 20px;
  background-color: lightskyblue;
}

.index-weather-temp{
  height: 3.5vw;
  padding-top: 1.5vw;
  position: relative;
  /*top: 30px;*/
  font-size: 25px;
  font-family: "阿里巴巴普惠体 2.0 105 Heavy";
}

.index-weather-end{
  height: 1.5vw;
  padding-top: 1vw;
  position: relative;
  /*top: 30px;*/
  font-size: 15px;
  font-family: "阿里巴巴普惠体 2.0 105 Heavy";
}

.index-weather-icon{
  padding-top: 1.5vw;
  position: relative;
}

/*.index-weather img{*/
/*  width: 30px;*/
/*  height: 30px;*/
/*}*/


</style>
