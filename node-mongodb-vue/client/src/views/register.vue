<template>
  <div class='register'>
    <section class="from_container">
      <div class="manage_tip">
        <span class="title">小猪在线后台管理系统</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name:'register',
  
}
</script>

<style scoped>
.register{
  position: relative;
  width: 100%;
  height: 100%;
  /* background: url('assets/chengdu.jpg'); */

  z-index: 2;
  

}
.from_container{
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background: #000;

}

.from_container .manage_tip .title{
  font-family: 'Microsoft YaHei';
  font-weight: blod;
  font-size: 26px;
  color: #fff;
}
</style>
