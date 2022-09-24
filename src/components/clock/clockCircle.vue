<template>
  <div class="root">
    <span :style="{color:com_s.isNight==true?'white':'black'}">12</span>
    <span :style="{color:com_s.isNight==true?'white':'black'}">3</span>
    <span :style="{color:com_s.isNight==true?'white':'black'}">6</span>
    <span :style="{color:com_s.isNight==true?'white':'black'}">9</span>
    <span class="over-point"></span>
    <div id="hour" :style="hour_s"></div>
    <div id="minute" :style="minute_s"></div>
    <div id="second" :style="second_s"></div>
    <div id="show_time">{{cur_time.hour}}:{{cur_time.minute}}:{{cur_time.second}}</div>
  </div>
</template>

<script>
/**子组件
 * 子组件的时针、分针、秒针都是通过父组件传过来的值来设置它的偏移量
 */
let clock={
  template:'#time_template',
  data(){
    return{
      interval:'',//定时器对象
    }
  },
  props:{//监听从父组件中传过来的对象
    cur_time: '',
    com_s:{},
    hour_s:{},
    minute_s:{},
    second_s:{},
  },
  methods:{
    display(){
      this.interval=setInterval((e)=>{
        this.setHours();
        this.setMinutes();
        this.setSeconds();
      },1000);
    },
    setHours(){
      this.$emit('get_hour');
    },
    setMinutes(){
      this.$emit('get_minute');
    },
    setSeconds(){
      this.$emit('get_second');
    },
  },
  created(){//让方法在一开始就自动调用，一般适用于有定时器的方法
    this.display();
  }
};
</script>

<style scoped>
*{
  margin:0px;
  padding:0px;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background:skyblue;
  overflow: hidden;
}
#content{
  position:relative;
  width:100%;
  height:100vh;
  display:flex ;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.root{
  width:500px;
  height:500px;
  border-radius: 50%;
  border:2px solid grey;
  position:relative;
  top:50px;
  background: url(" ") -170px;
  background-size:cover;
  overflow: hidden;
  box-shadow: 0px 0px 15px gray;
}

.root>span,.root>div{
  position:absolute;
  font-size:20px;/*内部的每一个文字的大小*/
}
span:first-child{
  left:240px;/*十二这个数字的x偏移量=（500/2）-（20/2)*/
  top:10px;
  z-index:10;
}
span:nth-child(2){
  left:480px;/*3的x偏移量=（500-10)*/
  top:240px;/*(500/2)-(20/2)*/
  z-index:10;
}
span:nth-child(3){
  left:250px;/*6*/
  top:470px;
  z-index:10;
}
span:nth-child(4){
  left:10px;/*9*/
  top:240px;
  z-index:10;
}
span:nth-child(5){/*时钟中间的骨架*/
  left:225px;/*(500/2)-(50/2)*/
  top:225px;/*(500/2)-(50/2)*/
  display: inline-block;
  width:50px;
  height:50px;
  line-height:50px;
  text-align: center;
  font-weight:bolder;
  border-radius: 50%;
  background:cadetblue;
  box-shadow: 0px 0px 18px #5f9ea0,inset 0px 0px 10px #4faee0;
  z-index:12;
}
#hour{
  width:20px;
  height:120px;
  border-radius:12px;
  background:white;
  top:136px;
  left:242px;
  opacity:88%;
  box-shadow: 0 0 18px whitesmoke;
  z-index:11;
}
#minute{
  width:15px;
  height:160px;
  border-radius:12px;
  background:dodgerblue;
  top:90px;
  left:243px;
  opacity: 0.85;
  box-shadow: 0 0 18px deepskyblue;
  z-index:11;
}
#second{
  width:10px;
  height:200px;
  border-radius:12px;
  background:gray;
  top:50px;
  left:250px;
  opacity:0.8;
  box-shadow: 0 0 18px snow;
  z-index:11;
}
#show_time{
  width:100px;
  height:50px;
  background:black;
  opacity:0.6;
  left:200px;
  top:300px;
  color:white;
  text-align: center;
  line-height:50px;
  z-index:10;
}
#over{
  position:absolute;
  width:100%;
  height:100vh;
  color:white;
  background:black;
  opacity: 0.8;
  transition:1s;
  z-index:10;
}


</style>
