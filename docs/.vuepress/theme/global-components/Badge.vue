<script>
  export default {
    functional: true,
    props: {
      type: {
        type: String,
        default: 'tip'
      },
      styles: String,
      text: String,
      vertical: {
        type: String,
        default: 'top'
      }
    },
    render (h, { props, slots }) {
      return h('span', {
        class: [
          'sealui-badge', 'is-'+props.type,
          'sealui-badge--'+props.vertical
        ],
        style: props.styles
      }, props.text || slots().default)
    }
  }
</script>

<style lang="stylus" scoped>

  .sealui-badge
    display inline-block
    font-size .75rem
    // height 1.05rem
    line-height 1
    border-radius .2rem
    padding .2rem .35rem
    color lighten($--color-black, 50%)
    margin-right 5px
    background-color lighten($--color-black, 90%)
    &:not(.is-tip){
      color $--color-white
    }
    &.sealui-badge--middle
      vertical-align middle
    &.sealui-badge--top
      vertical-align top
    &.is-success
      background-color $--color-success
    &.is-danger
      background-color $--color-danger //#f66
    &.is-warning, 
    &.is-warn,
    &.is-yellow
      background-color $--color-warning
</style>
