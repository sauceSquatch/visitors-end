<template>
  <div class="cash-grain-carousel-slide">
    <img class="slide-image" :src="slidePhoto" :alt="slidePhotoLabel">
    <div class="slide-photo-descrtiption-container">
      <img src="~/assets/images/cash_grain/dottedArrow-up.svg" alt="arrow pointing at image">
      <div class="photo-label">
        {{ slidePhotoLabel }}
      </div>
      <div
        v-if="slidePhotoTitle"
        class="photo-title"
      >
        {{ slidePhotoTitle }}
      </div>
      <div class="photo-description">
        {{ slidePhotoDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slidePhoto: {
      type: String,
      required: true,
    },
    slidePhotoLabel: {
      type: String,
      required: true,
    },
    slidePhotoTitle: {
      type: String,
      required: false,
    },
    slidePhotoDescription: {
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


  .cash-grain-carousel-slide {

    .slide-head-divider {
      margin-bottom: 25px;
    }

    .cash-grain-heading-label {
      font-family: 'Stardos Stencil', sans-serif;
      font-weight: 800;
      font-size: 16px;
      line-height: 1;
      margin: 0;
      border-bottom: 3px solid $color--brand-blue-light;
      display: inline-block;
      margin-bottom: 20px;
      @media (min-width: $break-sm) {
        font-size: 18px;
      }
    }


    .slide-photo-descrtiption-container {
      padding: 26px 0;
      font-size: 12px;
      line-height: 20px;
      max-width: 460px;
    }

    .photo-description {
      color: $color--brand-blue-light;
    }

    .cash-grain-slide-description {
      font-size: 14px;
      line-height: 25px;
      font-weight: 800;
    }

  }

</style>
