<template>
  <div>
    <router-view></router-view>
    <ul id="menu-box">
      <li v-for="(menu) in menu" :key="menu.id" class="menu">
        <router-link to='#'>
          <i :class="'iconfont '+menu.icon"></i>
          <span>{{menu.text}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      menu: [
        {
          id: 1,
          text: '电影',
          icon: 'icon-dianying'
        },
        {
          id: 2,
          text: '影院',
          icon: 'icon-yingyuana'
        },
        {
          id: 3,
          text: '特惠',
          icon: 'icon-youhui'
        },
        {
          id: 4,
          text: '我的',
          icon: 'icon-wode'
        }
      ]
    }
  }
}
</script>

<style>
  .router-link-active{
    color: #ff5f16;
  }
</style>
