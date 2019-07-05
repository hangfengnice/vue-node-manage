<template>
  <div class="index">
    <HeadNav></HeadNav>
    <LeftMenu></LeftMenu>

    <div class="rightContainer">
      <router-view></router-view>
    </div>
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
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>
