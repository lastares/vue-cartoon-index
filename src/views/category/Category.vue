<template>
  <div class="container">
    <div class="row">
      <BreadCrumb/>
      <div class="filter-acg-wrap">
        <p>
          <span>排&nbsp;&nbsp;&nbsp;&nbsp;序：</span>
          <el-button class="search-btn-tag"
                     size="small"
                     v-for="(sort, index) in sorts"
                     :key="index"
                     @click="searchAcg(sort, index)"
                     :class="{ is_active: index === activeSortTagIndex}">{{ sort.name }}
          </el-button>
          <span @click="handleDownUp" :class="downUpArrow" class="down-up-arrow"></span>
          <el-tag class="search-where-tag"
                  v-for="(searchWhereTag, searchTagKey) in searchWhereTags" size="small"
                  :key="searchTagKey + 200"
                  :closable="tagCloseAble"
                  @close="handleSearchTagClose(searchWhereTag)"
                  :type="'danger'">
            {{searchWhereTag.name}}
          </el-tag>

        </p>
        <el-collapse-transition>
          <div v-show="show">
            <p>
              <span>地&nbsp;&nbsp;&nbsp;&nbsp;域：</span>
              <el-button size="small" class="search-btn-tag"
                         v-for="(region, index) in regions"
                         :key="index"
                         @click="searchAcg(region, index)"
                         :class="{ is_active: index === activeRegionTagIndex}">
                {{ region.name }}
              </el-button>
            </p>
            <p>
              <span>时&nbsp;&nbsp;&nbsp;&nbsp;间：</span>
              <el-button size="small" class="search-btn-tag"
                         v-for="(time, index) in times"
                         :key="index"
                         @click="searchAcg(time, index)"
                         :class="{ is_active: index === activeTimeTagIndex}">
                {{ time.name }}
              </el-button>
            </p>
            <p>
              <span>标&nbsp;&nbsp;&nbsp;&nbsp;签：</span>
              <el-button class="search-btn-tag"
                         size="small"
                         v-for="(tag, index) in tags"
                         :key="index"
                         @click="searchAcg(tag, index)"
                         :class="{ is_active: index === activeTagIndex}">
                {{ tag.name }}
              </el-button>
            </p>
          </div>
        </el-collapse-transition>
      </div>
      <div class="acg-list-wrap">
        <div class="row">
          <div class="col-md-3 col-lg-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3 acg-sing-wrap">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="exampleJpg" class="image" alt="">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time img-responsive">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <div class="acg-list-page" style="margin-top: 15px;vertical-align: middle;text-align: center;padding-top:15px;">
          <el-pagination
            :background="true"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import videoGif from '@/assets/images/video.gif'
  import exampleJpg from '@/assets/images/test.jpg'
  import BreadCrumb from '@/components/layouts/BreadCrumb'

  export default {
    name: "Category",
    components: {
      BreadCrumb
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        videoGif: videoGif,
        currentDate: new Date(),
        exampleJpg: exampleJpg,
        isActiveTag: true,
        activeSortTagIndex: 0,
        activeRegionTagIndex: 0,
        activeTimeTagIndex: 0,
        activeTagIndex: 0,
        searchWhereTags: [],
        tagCloseAble: true,
        show: false,
        downUpArrow: 'el-icon-arrow-down',
        sorts: [
          {name: '全部', value: 'all', type: 'sort'},
          {name: '最新', value: 'new', type: 'sort'},
          {name: '最热', value: 'hot', type: 'sort'},
        ],
        regions: [
          {name: '全部', value: 'all', type: 'region'},
          {name: '国漫', value: 'china', type: 'region'},
          {name: '日漫', value: 'japan', type: 'region'},
        ],
        times: [
          {name: '全部', value: 'all', type: 'time'},
          {name: '2018', value: '2018', type: 'time'},
          {name: '2019', value: '2019', type: 'time'},
          {name: '2017', value: '2017', type: 'time'},
          {name: '2016', value: '2016', type: 'time'},
          {name: '2015', value: '2015', type: 'time'},
        ],
        tags: [
          {name: '全部', value: 'all', type: 'tag'},
          {name: '冒险', value: 'adventure', type: 'tag'},
          {name: '战斗', value: 'battle', type: 'tag'},
          {name: '搞笑', value: 'funny', type: 'tag'},
          {name: '经典', value: 'classic', type: 'tag'},
          {name: '科幻', value: 'science', type: 'tag'},
          {name: '玄幻', value: 'xuan', type: 'tag'},
          {name: '魔幻', value: 'magic', type: 'tag'},
          {name: '武侠', value: 'swordsman', type: 'tag'},
          {name: '竞技', value: 'competitive', type: 'tag'},
          {name: '恋爱', value: 'love', type: 'tag'},
          {name: '推理', value: 'reasoning', type: 'tag'},
          {name: '治愈', value: 'cure', type: 'tag'},
          {name: '其他', value: 'other', type: 'tag'},
        ],
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleDownUp() {
        if (this.downUpArrow === 'el-icon-arrow-down') {
          this.downUpArrow = 'el-icon-arrow-up';
          this.show = !this.show;
        } else if (this.downUpArrow === 'el-icon-arrow-up') {
          this.downUpArrow = 'el-icon-arrow-down';
          this.show = !this.show;
        }
      },
      // 删除搜索条件标签
      handleSearchTagClose(tag) {
        this.searchWhereTags.splice(this.searchWhereTags.indexOf(tag), 1);
        if (tag.type === 'sort') {
          this.activeSortTagIndex = 0;
        } else if (tag.type === 'region') {
          this.activeRegionTagIndex = 0;
        } else if (tag.type === 'time') {
          this.activeTimeTagIndex = 0;
        } else if (tag.type === 'tag') {
          this.activeTagIndex = 0;
        }
      },
      test(index) {
        console.log(index)
      },
      searchAcg(type, index) {
        // 搜索条件标签
        let tagValuePosition = this.searchWhereTags.findIndex(item => item.value === type.value);
        let tagTypePosition = this.searchWhereTags.findIndex(item => item.type === type.type);
        if (type.value !== 'all') {
          if (tagTypePosition === -1) {
            this.searchWhereTags.push(type);
          }
          {
            if (tagValuePosition === -1) {
              this.searchWhereTags.splice(this.searchWhereTags.findIndex(item => item.type === type.type), 1)
              this.searchWhereTags.push(type);
            }
          }
        } else {
          if (tagTypePosition !== -1) {
            this.searchWhereTags.splice(this.searchWhereTags.findIndex(item => item.type === type.type), 1)
          }
        }

        // 动态切换标签颜色
        if (type.type === 'sort') {
          this.activeSortTagIndex = index;
        } else if (type.type === 'region') {
          this.activeRegionTagIndex = index;
        } else if (type.type === 'time') {
          this.activeTimeTagIndex = index;
        } else if (type.type === 'tag') {
          this.activeTagIndex = index;
        }
      }
    }
  }
</script>
