<template>
  <div class="page-hero">
    <div class="hero-content">
      <div class="cash-grain--heading-label">
        {{ chapterLabel }}
      </div>
      <h1
        class="cash-grain--heading-one"
        v-html="heroHeadline"
      />
      <p class="hero-p">
        {{ heroParagraph }}
      </p>
    </div>
    <img class="vertical-mark" src="~/assets/images/cash_grain/stripe_vertical.png" alt="">
    <div class="page-hero-backgrounds">
      <div
        class="hero-bg-mobile"
        :style="`background-image: url(/images/cash_grain/hero_images/${heroImage}_m.jpg)`"
      />
      <div
        class="hero-bg-desktop"
        :style="`background-image: url(/images/cash_grain/hero_images/${heroImage}.jpg)`"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chapterLabel: {
      type: String,
      required: true,
    },
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
    height: 100vh;
    position: relative;
    overflow: hidden;
    @media (min-width: $break-md) {
      height: 750px; //desktop
    }

    .cash-grain--heading-label {
      background-color: $color--brand-blue-light;
      display: inline-block;
      padding: 3px 6px;
      margin-bottom: 12px;
    }

    .page-hero-backgrounds {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
    }

    .vertical-mark {
      position: absolute;
      top: 280px;
      width: 31px;
      height: 413px;
      left: -10px;
      @media (min-width: $break-md) {
        top: 160px;
        width: 68px;
        height: 902px;
        left: -36px;
      }
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

      margin-top: 60vh;
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
