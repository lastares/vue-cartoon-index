<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="block">
          <el-carousel height="15.43rem" arrow="never">
            <el-carousel-item v-for="item in banners" :key="item">
              <img :src="item" class="img-banner" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="col-md-6">
        <el-tabs type="border-card" class="new-card-article">
            <el-tab-pane label="最新文章">
              <ul class="list-group">
                <li class="list-group-item" v-for="(article, index) in articles" :key="index">
                  <span>{{ article.title }}</span>
                  <span style="text-align: right;float:right">{{ article.created_at }}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="头条内容">
              <ul class="list-group">
                <li class="list-group-item" v-for="(toutiao, index) in toutiaos" :key="index">
                  <span>{{ toutiao.title }}</span>
                  <span style="text-align: right;float:right">{{ toutiao.created_at }}</span>
                </li>
              </ul>
            </el-tab-pane>

        </el-tabs>

      </div>
    </div>
  </div>
</template>
<script>
  import banner1 from '@/assets/images/banner1.png'
  import banner2 from '@/assets/images/banner2.jpg'
  import banner3 from '@/assets/images/banner3.png'
  import banner4 from '@/assets/images/banner4.jpg'
  export default {
    name: 'Carousel',
    data() {
      return {
        tabPosition: 'top',
        banners: { banner1, banner2, banner3, banner4 },
        articles: [
          {title: '情暖京津冀:习近平新年首次考察的五个瞬间', created_at: '2018-12-12'},
          {title: '情暖京津冀:习近平新年首次考察的五个瞬间', created_at: '2018-12-12'},
          {title: '情暖京津冀:习近平新年首次考察的五个瞬间', created_at: '2018-12-12'},
          {title: '情暖京津冀:习近平新年首次考察的五个瞬间', created_at: '2018-12-12'},
          {title: '情暖京津冀:习近平新年首次考察的五个瞬间', created_at: '2018-12-12'},
          {title: '情暖京津冀:习近平新年首次考察的五个瞬间', created_at: '2018-12-12'},
          {title: '情暖京津冀:习近平新年首次考察的五个瞬间', created_at: '2018-12-12'},
        ],
        toutiaos: [
          {title: '90万亿背后是中国经济发展的底气  2019 春运', 'created_at': '2018-12-29'},
          {title: '90万亿背后是中国经济发展的底气  2019 春运', 'created_at': '2018-12-29'},
          {title: '90万亿背后是中国经济发展的底气  2019 春运', 'created_at': '2018-12-29'},
          {title: '90万亿背后是中国经济发展的底气  2019 春运', 'created_at': '2018-12-29'},
          {title: '90万亿背后是中国经济发展的底气  2019 春运', 'created_at': '2018-12-29'},
          {title: '90万亿背后是中国经济发展的底气  2019 春运', 'created_at': '2018-12-29'},
          {title: '90万亿背后是中国经济发展的底气  2019 春运', 'created_at': '2018-12-29'},
        ]
      }
    }
  }
</script>
<style>
  .el-carousel__item.is-active.is-animating {
    height: auto
  }
  .list-group-item {
    line-height: 2.24rem;
  }
  .el-tabs--border-card {
    border-radius: 0.4rem 0.4rem;
  }
  .el-tabs__item:last-child, .el-tabs__item {
    text-align: center;
    background-color: #ffffff;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    text-align: center;
    background-color: #ff0075;
    color: #fff;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    background-color: #ff0075;
    color: #fff !important;
  }

  .el-tabs__item {
    width: 50%;
  }
  .el-tabs__nav {
    width: 100%;
  }
  .img-banner {
    width: 100%;
    height: 21.2rem
  }
  div.el-carousel__container {
    width: 100%;
    min-height: 21.2rem;
    margin-bottom: 15.3px;
  }

</style>
