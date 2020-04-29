<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!--
      <div class="swiper-slide">Slide1</div>
      <div class="swiper-slide">Slide1</div>
      <div class="swiper-slide">Slide1</div>
      -->

      <slot/>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    const that = this
    /* eslint-disable */
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      loop: this.loop,
      autoplay: this.autoplay ? {
        deplay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      } : false,
      on: {
        slideChangeTransitionEnd: function(){
          that.$emit('change', this.realIndex)
        },
      }
    });
    /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-container {
    width: 100%;
    height: 180px;
    .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 0 .13333333rem;
    border-radius: 50%;
    background-color: hsla(0,0%,100%,.7)
    }
    .swiper-pagination-bullet-active {
    width: .53333333rem;
    height: .26666667rem;
    margin: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUBAMAAAANaGKIAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/Pzs7Oyvr68AAADW1tYAAAD///8YAGtvAAAAD3RSTlMABBwyDQgVCyf2zXAQoC3PT9+CAAAAd0lEQVQY02PACQSRAFSIUTS83AUKyksDBcCCojVpSnCQdjwQrDAkqc8YDl6ouQqAFDp1r/wPB7N2qICUimfc/48E/rYVAgVjtP+jgE1HgUaGdaEKrkgVYGAs60QVnJGOXRCrdmwW4XISpuNxeBMzQHAEHWYg4wIAe7Sz99Wx/OUAAAAASUVORK5CYII=) no-repeat 50%;
    background-size: contain
    }
}
</style>
