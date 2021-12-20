<template>
  <div
    class="page-hero"
    :style="`background-image: url(${heroImage})`"
  >
    <div class="hero-content">
      <h1
        class="cash-grain--heading-one"
        v-html="heroHeadline"
      />
      <p class="hero-p">
        {{ heroParagraph }}
      </p>
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
    width: 100%;
    height: 750px; //desktop
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    .hero-content {
      @include global-container;

      .hero-p {
        font-size: 20px;
        line-height: 31px;
        font-weight: 800;
        max-width: 450px;
      }
    }
  }

</style>
