<template>
  <div class="home">
    <div class="banner">
      <div class="hero">
        <!-- <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero"> -->
        <h1>{{ data.heroText || $title || 'Hello' }}</h1>
        <p class="description">
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>
      </div>
      <div class="banner_quickstart">
        <pre class="banner_code_main">
$ npm start
</pre>
      </div>
      <div class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
        <!-- <NavLink class="action-button action-button1" :item="actionLink1"/>
        <NavLink class="action-button action-button2" :item="actionLink2"/> -->
      </div>
    </div>

    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <Content custom/>
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },
  mounted () {
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    actionLink1 () {
      return {
        link: this.data.actionLink1,
        text: this.data.actionText1
      }
    },
    actionLink2 () {
      return {
        link: this.data.actionLink2,
        text: this.data.actionText2
      }
    }
  }
}
</script>

<style lang="stylus">

.home-page
  height: 100%
  overflow hidden
  .navbar
    background-color transparent
    border-bottom 0 none
    display none
.home
  height 100%
  padding $navbarHeight rem 0
  max-width 100%
  margin 0px auto
  .banner
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    /* background: url(//storage.360buyimg.com/taro-static/static/images/banner.jpg) 0 0/100% 100% no-repeat #191a1e; */
    background #2b2e3b
  .hero
    text-align center
    color $--color-white
    padding 10rem 0 2rem 0
    img
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
      padding-bottom 1rem
      font-family: Seravek,"Sans-serif"
      display block
    h1, .description, .action
      margin 0 auto
    .description
      font-weight 200
      font-size 1.3rem
      line-height 1.6
      // color lighten($textColor, 40%)
  .banner_quickstart
    font-size $--base-font-size + .5rem
    .banner_code_main
      line-height 2rem
      color: rgb(169, 183, 198);
      background: rgb(40, 43, 46);
      display: block;
      overflow-x: auto;
      padding: 20px 30px;
      border-radius: 4px;
      width: 400px;
      text-align: left;
      margin: 0 auto;
      position: relative;
      top 2rem
  .features
    max-width: 90%
    margin: 0 auto
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 5.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
.action
  text-align center
  padding 5rem 0 3rem 0
  .action-button
    display inline-block
    font-size 1.2rem
    color $--color-white
    background-color $--color-primary
    padding 0.5rem 1.6rem
    margin 0 .85rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken($--color-primary, 10%)
    &:hover
      background-color darken($--color-primary, 10%)
  .action-button1
    display inline-block
    font-size 1.2rem
    color #fff
    background-color #ec402c
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken(#ec402c, 10%)
    &:hover
      background-color lighten(#ec402c, 10%)
  .action-button2
    display inline-block
    font-size 1.2rem
    color #fff
    background-color #3a3f51
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken(#3a3f51, 10%)
    &:hover
      background-color lighten(#3a3f51, 10%)
@media (max-width: $MQMobile)
  .home
    .hero
      padding-top 3rem
      .action
        padding-top 1rem
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem
    .banner_quickstart
      .banner_code_main
        max-width 80%
        padding 2rem 1rem

@media (max-width: $MQMobileNarrow)
  .home
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 1.8rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      padding 0rem
      h2
        font-size 1.25rem
</style>
