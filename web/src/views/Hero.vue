<template>
    <div class="page-hero" v-if="model">
        <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
            <img src="../assets/Yasuo.png" alt="" height="30">

            <div class="px-2 flex-1">
                <div class="text-white">英雄联盟</div>
                <div class="text-grey-1 fs-xxs">登峰造极境</div>
            </div>
            <router-link to="/" tag="div">更多英雄 &gt;</router-link>
        </div>

        <!-- 英雄详情页，头部背景img-->
        <div class="top" :style="{'background-image': `url(${model.banner})`}">
            <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
                <div class="fs-sm">{{model.name}}</div>
                <h2 class="my-2">{{model.title}}</h2>
                <!-- model.categories 存的是ID 所以要到后台处理一下 拿到ID对应分类-->
                <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
                <div class="d-flex jc-between pt-2">
                    <div class="scores d-flex ai-center" v-if="model.scores">
                        <span>难度</span>
                        <span class="badge bg-primary">{{model.scores.difficult}}</span>
                        <span>技能</span>
                        <span class="badge bg-blue">{{model.scores.skills}}</span>
                        <span>攻击</span>
                        <span class="badge bg-danger">{{model.scores.attack}}</span>
                        <span>生存</span>
                        <span class="badge bg-dark">{{model.scores.survive}}</span>
                    </div>
                    <router-link to="/" tag="span" class="text-grey fs-sm">
                        皮肤: 2 &gt;
                    </router-link>
                </div>
            </div>
        </div>
        <!-- end of top，begin nav-->
        <div class="pppic">
            <div class="bg-white px-3">
                <div class="nav d-flex pt-3 pb-2 jc-around border-bottom"> <!-- jc-around，左右留有边距 再分散对齐-->
                    <div class="nav-item active">
                        <div class="nav-link">英雄资料</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-link">进阶攻略</div>
                    </div>
                </div>
            </div>

            <swiper>
                <swiper-slide>
                    <div>
                        <div class="p-3 bg-white border-bottom">
                            <div class="d-flex">
                                <router-link to="/" tag="button" class="btn btn-lg flex-1"> <!-- button样式 .btn-lg -->
                                    <i class="iconfont icon-play"></i>英雄介绍视频
                                </router-link>
                                <router-link to="/" tag="button" class="btn btn-lg flex-1 ml-2">
                                    <i class="iconfont icon-pic"></i>一图识英雄
                                </router-link>
                            </div>

                            <!-------      技能展示skill   下面字段均在hero.js数据库文件 定好-------->
                            <!--:class="{active: currentSkillIndex === i}" 动态绑定class 高亮显示当前图标展示技能详情-->
                            <div class="skills bg-white mt-4">
                                <div class="xxxpic d-flex jc-around">
<!--                                    <img :src="item.icon" v-for="(item, i) in model.skills"-->
<!--                                    @click="currentSkillIndex = i"-->
<!--                                    :key="i" alt="" class="icon" :class="{active: currentSkillIndex === i}"-->
<!--                                    width="65" height="65">-->
                                    <img class="icon"
                                         @click="currentSkillIndex = i"
                                         :class="{active: currentSkillIndex === i}"
                                         :src="item.icon"
                                         v-for="(item, i) in model.skills"
                                         :key="item.name"
                                    />
                                </div>
                                <div v-if="currentSkill">
                                    <div class="d-flex py-4 pb-3">
                                        <h3 class="m-0">{{currentSkill.name}}</h3>
                                        <span class="text-grey-1 ml-4">
                                            (冷却值: {{currentSkill.delay}}   消耗: {{currentSkill.cost}})
                                        </span>
                                    </div>
                                    <p>{{currentSkill.description}}</p>
                                    <div class="border-bottom"></div>
                                    <p>小提示: {{currentSkill.tips}}</p>
                                </div>
                            </div>

                        </div>

                        <m-card plain icon="Menu" title="出装推荐" class="hero-items">
                            <div class="fs-xl">顺风出装</div>
                            <div class="d-flex jc-around text-center mt-3">
                                <div v-for="item in model.items1" :key="item.name">
                                    <img :src="item.icon" alt="" class="icon">
                                    <div class="fs-xs">{{item.name}}</div>
                                </div>
                            </div>
                            <div class="border-bottom mt-3"></div>
                            <div class="fs-xl mt-3">逆风出装</div>
                            <div class="d-flex jc-around text-center mt-3">
                                <div v-for="item in model.items2" :key="item.name">
                                    <img :src="item.icon" alt="" class="icon">
                                    <div class="fs-xs">{{item.name}}</div>
                                </div>
                            </div>
                        </m-card>

                        <m-card plain icon="Menu" title="使用技巧">
                            <p class="m-0">{{model.usageTips}}</p>
                        </m-card>
                        <m-card plain icon="Menu" title="对线技巧">
                            <div class="fs-xl">{{model.battleTips}}</div>
                        </m-card>
                        <m-card plain icon="Menu" title="团战思路">
                            <p class="m-0">{{model.teamTips}}</p>
                        </m-card>

                        <m-card plain icon="Menu" title="英雄关系">
                            <div class="fs-xl">最佳搭档</div>
                            <div v-for="item in model.partners" :key="item.name"
                            class="d-flex py-3">
                                <img :src="item.hero.avatar" alt="" height="50">
                                <p class="flex-1 ml-3 m-0">
                                    {{item.description}}
                                </p>
                            </div>
                            <div class="border-bottom"></div>
                        </m-card>

                    </div>
                </swiper-slide>
                <swiper-slide></swiper-slide>
            </swiper>
        </div>

    </div>
</template>
<script>
    export default  {
        props: {
            id: {require: true}
        },
        data() {
            return {
                model: {
                    //如果事先不定义 上面.map会报错
                    categories: [],
                    scores: {
                        difficult: 0,
                        attack: 0,
                        survive: 0
                    }
                },
                //动态绑定class 高亮显示当前图标展示技能详情
                currentSkillIndex: 0
            }
        },
        computed: {
            currentSkill() {
                //console.log('currentSkillIndex', model)
                return this.model.skills[this.currentSkillIndex]
            }
        },
        methods: {
            async fetch() {
                const res = await this.$http.get(`/heroes/${this.id}`)
                this.model = res.data
            }
        },
        created() {
            this.fetch()
        }
    }
</script>

<style lang="scss">
 @import "../assets/scss/variables";

    .page-hero {
        .top {
            height: 50vw;
            background: #fff no-repeat top center;
            background-size: 100% auto;
        }
        .info {
            background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
            .scores {
                .badge {
                    margin: 0 0.25rem;
                    display: inline-block;
                    width: 1rem;
                    height: 1rem;
                    line-height: 0.9rem;
                    text-align: center;
                    border-radius: 50%;
                    font-size: 0.75rem;
                    border: 1px solid rgba(255,255,255,0.2);
                }
            }
        }
        .pppic {
            .xxxpic {
                img {
                    border-radius: 0.625rem;
                }
            }
        }
        .skills {
            img.icon {
                width: 65px;
                height: 65px;
                border: 3px solid map-get($colors, 'white');
            }
            img.active {
                border: 1px solid mediumspringgreen;
                //border-color: map-get($colors, 'primary');
                //border-radius: 45%;
            }
        }

        .hero-items {
            img.icon {
                width: 50px;
                height: 50px;
                border-radius: 10px;
            }
        }

    }
</style>