<template>
  <div class="page-hero">
    <div class="hero-content">
      <h1
        class="cash-grain--heading-one"
        v-html="heroHeadline"
      />
      <p class="hero-p">
        {{ heroParagraph }}
      </p>
    </div>
    <div class="page-hero-backgrounds">
      <div
        class="hero-bg-mobile"
        :style="`background-image: url(images/cash_grain/hero_images/${heroImage}_m.jpg)`"
      />
      <div
        class="hero-bg-desktop"
        :style="`background-image: url(images/cash_grain/hero_images/${heroImage}.jpg)`"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heroHeadline: {
      type: String,
      required: true,
    },
    heroImage: {
      type: String,
      required: true,
    },
    heroParagraph: {
      type: String,
      required: false,
    },
  },
  mounted() {
    //
  },
}
</script>

<style lang="scss">

  .page-hero {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    @media (min-width: $break-md) {
      height: 750px; //desktop
    }

    .page-hero-backgrounds {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
    }

    .hero-bg-mobile {
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      @media (min-width: $break-md) {
        display: none;
      }
    }
    .hero-bg-desktop {
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      display: none;
      @media (min-width: $break-md) {
        display: block;
      }
    }

    .hero-content {
      @include global-container;

      margin-top: 330px;
      @media (min-width: $break-md) {
        margin-top: 0;
      }

      .hero-p {
        font-size: 12px;
        line-height: 18px;
        font-weight: 800;
        max-width: 260px;

        @media (min-width: $break-md) {
          font-size: 20px;
          line-height: 31px;
          max-width: 450px;
        }
      }
    }
  }

</style>
