<template>
  <div class="index">
    <HeadNav></HeadNav>
    <LeftMenu></LeftMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from "../components/HeadNav";
import LeftMenu from "../components/leftMenu";
export default {
  name: "index",
  components: {
    HeadNav,
    LeftMenu
  }
};
</script>

<style  lang='scss' scoped>
.index {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
