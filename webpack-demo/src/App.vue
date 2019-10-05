<template>
  <div>
    <!-- 组件占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 引入字体图标样式 */
@import url('http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css');
/* 一次性引入vant的所有组件样式*/
@import url('../node_modules/vant/lib/index.css');
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    vertical-align: middle;
}
html body{
    background-color:#f2f2f2;
}
a{
    color:inhert;
}
a:hover{
    text-decoration: none;
}
ul,li,ol{
    list-style: none;
}
i,em{
    font-size: normal;
}
</style>