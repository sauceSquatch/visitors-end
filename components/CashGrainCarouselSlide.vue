<template>
  <div class="cash-grain-carousel-slide">
    <div class="cash-grain-slide-photo-lockup">
      <div class="slide-story">
        <img class="slide-image" :src="slidePhoto" :alt="slidePhotoLabel">
        <p class="cash-grain-slide-description">{{ slideDescription }}</p>
      </div>
      <div class="photo-descrtiption-container">
        <img src="~/assets/images/cash_grain/dottedArrow-left.svg" alt="arrow pointing at image" >
        <div class="photo-label">
          {{ slidePhotoLabel }}
        </div>
        <div
          class="photo-title"
          v-if="slidePhotoTitle"
        >
          {{ slidePhotoTitle }}
        </div>
        <div class="photo-description">
          {{ slidePhotoDescription }}
        </div>
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
    slideDescription: {
      type: String,
      required: true,
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

    .cash-grain-slide-photo-lockup {
      display: flex;

      .photo-descrtiption-container {
        padding: 26px 16px;
        font-size: 12px;
        line-height: 20px;
      }

      .photo-description {
        color: $color--brand-blue-light;
      }
    }

    .cash-grain-slide-description {
      font-size: 14px;
      line-height: 25px;
      font-weight: 800;
    }

  }

</style>
