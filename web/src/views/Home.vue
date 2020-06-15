<template>
  <div class="">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/pic1.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/pic2.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/pic3.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/pic4.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right" slot="pagination"></div>
    </swiper>
    <!---------- end of swiper------------>
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
      <!-- 第一个图标 -->
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link class="py-2 fs-lg d-flex" tag="div" :to="`/articles/${news._id}`"
        v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>

      </template>

    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}" style="margin: 0 -0.5rem">
        <div class="d-flex flex-wrap">
          <router-link class="p-2 text-center" style="width: 20%" tag="div"
          :to="`/heroes/${hero._id}`" v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" alt="" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>

    </m-list-card>

    <m-card icon="Menu" title="游戏礼包"></m-card>


  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/Card.vue'
import dayjs from 'dayjs'

export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      },
      newsCats: [],
      heroCats: []
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      //console.log('news/list', res.data)
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      //console.log('heroes/list', res.data)
      this.heroCats = res.data
    }
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .pagination-home {
    .swiper-pagination-bullet {
      opacity: 1;
      border-radius: 0.1538rem;
      background: map-get($colors, "white");
      &.swiper-pagination-bullet-active {
        background: map-get($colors, "info");
      }
    }
  }

  .nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
      width: 25%;
      border-right: 1px solid $border-color;
      &:nth-child(4n) {
        border-right: none;
      }
    }
  }

</style>
