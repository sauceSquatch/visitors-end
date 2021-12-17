<template>
  <div class="cash-grain-chapter">
    <div class="cash-grain-heading-label">
      {{ chapterLabel }}
    </div>
    <div class="cash-grain-chapter-title">
      <h2 v-html="chapterTitle"/>
    </div>
    <div class="chapter-head-divider">
      <img class="stripped-underline" src="~/assets/images/cash_grain/stripeunderline.png">
    </div>
    <div class="cash-grain-chapter-photo-lockup">
      <div class="chapter-story">
        <img class="chapter-image" :src="chapterPhoto" :alt="chapterPhotoLabel">
        <p class="cash-grain-chapter-description">{{ chapterDescription }}</p>
      </div>
      <div class="photo-descrtiption-container">
        <img src="~/assets/images/cash_grain/dottedArrow-left.svg" alt="arrow pointing at image" >
        <div class="photo-label">
          {{ chapterPhotoLabel }}
        </div>
        <div
          class="photo-title"
          v-if="chapterPhotoTitle"
        >
          {{ chapterPhotoTitle }}
        </div>
        <div class="photo-description">
          {{ chapterPhotoDescription }}
        </div>
      </div>
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
    chapterTitle: {
      type: String,
      required: true,
    },
    chapterPhoto: {
      type: String,
      required: true,
    },
    chapterPhotoLabel: {
      type: String,
      required: true,
    },
    chapterPhotoTitle: {
      type: String,
      required: false,
    },
    chapterPhotoDescription: {
      type: String,
      required: false,
    },
    chapterDescription: {
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


  .cash-grain-chapter {

    .chapter-image {
      width: 100%;
    }

    .cash-grain-chapter-title {
      h2 {
        font-family: 'Stardos Stencil', sans-serif;
        font-size: 32px;
        line-height: 1;
        margin: 0;
        @media (min-width: $break-sm) {
          font-size: 40px;
        }
        @media (min-width: $break-md) {
          font-size: 48px;
        }
      }
    }

    .chapter-head-divider {
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

    .cash-grain-chapter-photo-lockup {
      display: flex;
      flex-direction: column;

      @media (min-width: $break-md) {
        flex-direction: row;
      }

      .photo-descrtiption-container {
        padding: 20px 0px;
        font-size: 12px;
        line-height: 20px;
        max-width: 400px;

        @media (min-width: $break-md) {
          padding: 26px 16px;
          max-width: 30%;
        }
      }

      .photo-description {
        color: $color--brand-blue-light;
      }
    }

    .cash-grain-chapter-description {
      font-size: 14px;
      line-height: 25px;
      font-weight: 800;
      max-width: 600px;
    }

  }

</style>
