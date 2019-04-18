<template>
  <div class="container">
    <div class="col-md-12 series-play" style="margin-top: 10px;">
      <div class="series-play-head">
        <img :src="series" class="series-img" alt="番剧">
        <span>番剧</span>
        <span style="float: right;margin-top:11px;">
              <!--<router-link :to="'/category/1'">更多>>></router-link>-->
            </span>
      </div>
      <hr class="series-play-hr">
      <div style="margin-bottom: 15px;" class="col-sm-2 col-md-2 col-xs-6"
           v-for="(seriesPlayImg, index) in SeriesPlayImgs" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="seriesPlayImg.src" class="img-responsive fanju-img" alt="">
          <div style="padding: 14px;">
            <div class="bottom caption">
              <p>{{ seriesPlayImg.title }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="col-md-12 series-play">
      <div class="series-play-head">
        <img :src="series" class="series-img" alt="番剧">
        <span>番剧</span>
        <span style="float: right;margin-top:11px;">
              <!--<router-link :to="'/category/1'">更多>>></router-link>-->
            </span>
      </div>
      <hr class="series-play-hr">
      <div style="margin-bottom: 15px;" class="col-sm-2 col-md-2 col-xs-6"
           v-for="(seriesPlayImg, index) in SeriesPlayImgs" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="seriesPlayImg.src" class="img-responsive fanju-img" alt="">
          <div style="padding: 14px;">
            <div class="bottom caption">
              <p>{{ seriesPlayImg.title }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="col-md-12 series-play">
      <div class="series-play-head">
        <img :src="series" class="series-img" alt="番剧">
        <span>番剧</span>
        <span style="float: right;margin-top:11px;">
              <!--<router-link :to="'/category/1'">更多>>></router-link>-->
            </span>
      </div>
      <hr class="series-play-hr">
      <div style="margin-bottom: 15px;" class="col-sm-2 col-md-2 col-xs-6"
           v-for="(seriesPlayImg, index) in SeriesPlayImgs" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="seriesPlayImg.src" class="img-responsive fanju-img" alt="">
          <div style="padding: 14px;">
            <div class="bottom caption">
              <p>{{ seriesPlayImg.title }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import SeriesGif from '@/assets/images/series.gif'
  import fj5 from '@/assets/images/fj5.jpeg'
  import fj6 from '@/assets/images/fj6.jpeg'
  import fj7 from '@/assets/images/fj7.jpeg'

  export default {
    name: "SeriesPlays",
    data() {
      return {
        series: SeriesGif,
        currentDate: new Date(),
        SeriesPlayImgs: [
          {src: fj5, title: '动漫5'},
          {src: fj5, title: '动漫5'},
          {src: fj5, title: '动漫5'},
          {src: fj5, title: '动漫5'},
          {src: fj6, title: '动漫6'},
          {src: fj6, title: '动漫6'},
          {src: fj6, title: '动漫6'},
          {src: fj6, title: '动漫6'},
          {src: fj7, title: '动漫7'},
          {src: fj5, title: '动漫5动漫5动漫5'},
          {src: fj5, title: '动漫5动漫5动漫5'},
          {src: fj5, title: '动漫5动漫5动漫5'},
          {src: fj5, title: '动漫5动漫5动漫5'},
          {src: fj6, title: '动漫6'},
          {src: fj7, title: '动漫7'},
          {src: fj7, title: '动漫7'},
          {src: fj7, title: '动漫7'},
          {src: fj7, title: '动漫7'},
        ],
        // 南方养老金支援东北? 现实:东北退休金与广东无差别
        zatanArticles: [
          {src: fj5, title: '南方养老金支援东北? 现实:东北退休南方养老金的发送到发送到'},
          {src: fj6, title: '南方养老金支援东北? 现实:东北退休南方养老金支援东北? '},
          {src: fj7, title: '南方养老金支援东北? 现实:东北退休南方养老金支援东北? 现实'},
          {src: fj5, title: '南方养老金支援东北? 现实:东北退休南方养老金支援东北? 现实'},
          {src: fj6, title: '南方养老金支援东北? 现实:东北退休南方养老金支援东北? 现实'},
        ]
      }
    }
  }

</script>

<style>
  .series-play-head span {
    color: #ff0075;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    vertical-align: middle;
    padding-left: 10px;
  }

  .btn-reset-color, .btn-reset-color:hover {
    background-color: #ff0075;
  }

  .za-tan-img-wrap {
    padding-right: 5px;
  }

  .za-tan-title {
    margin-left: 0;
  }

  .za-tan {
    margin-bottom: 4px;
    height: 7rem;
  }

  .za-tan-title-wrap {
    padding-top: 5px;
    padding-bottom: 5px;
    /*border: 1px solid red;*/
    height: 6.5rem;
    text-overflow: ellipsis
  }

  .za-tan-img {
    width: 100%;
    height: 6.5rem;
  }

  .series-play-hr {
    margin-top: 7px;
    border: 0.5px solid #ff0075
  }

  .second-right {
    /*width: 32%;*/
    margin-left: 15px;
    float: right;
  }

  .series-play-head {
    margin-bottom: 6px;
  }

  img.fanju-img {
    width: 100%;
    height: 78%;
  }

  .series-img {
    width: 4%;
    height: auto
  }

  .series-play {
    margin-top: 18px;
    /*margin-bottom: 5px;*/
    /*margin-right: 15px;*/
    overflow: hidden;
    background-color: #ffffff;
    padding: 15px 15px;
    height: auto;
  }

  .za-tan-margin {
    margin-top: 18px;
    overflow: hidden;
    background-color: #ffffff;
    padding: 15px 15px 1px 15px;
    height: auto;
  }

  .series-play span {
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    color: #ff0075;
    vertical-align: middle;
    padding-left: 10px;
  }

  .thumbnail {
    width: 98%;
    height: 16.85rem;
    padding-bottom: 0;
  }

  .thumbnail .caption {
    text-align: center !important;
    padding: 14px 9px 0 9px;
  }

  .caption h5 {
    margin-bottom: 3px;
    margin-top: 3px;
  }

</style>
