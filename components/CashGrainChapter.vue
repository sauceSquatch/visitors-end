<template>
  <div class="cash-grain-chapter">
    <div
      class="cash-grain-chapter-title-container"
      :style="`background-image: url(${chapterPhoto}`"
    >
      <CashGrainChapterTitle
        :chapterLabel="chapterLabel"
        :chapterTitle="chapterTitle"
      />
    </div>
    <div class="cash-grain-chapter-content-container">
      <div class="cash-grain-chapter-photo-lockup">
        <div class="chapter-story">
          <img class="chapter-image desktop" :src="chapterPhoto" :alt="chapterPhotoLabel">
          <p class="cash-grain-chapter-description">
            {{ chapterDescription }}
          </p>
        </div>
        <div class="photo-descrtiption-container">
          <img src="~/assets/images/cash_grain/dottedArrow-left.svg" alt="arrow pointing at image" class="photo-arrow-left">
          <img src="~/assets/images/cash_grain/dottedArrow-up.svg" alt="arrow pointing at image" class="photo-arrow-up">
          <div class="photo-label">
            {{ chapterPhotoLabel }}
          </div>
          <div
            v-if="chapterPhotoTitle"
            class="photo-title"
          >
            {{ chapterPhotoTitle }}
          </div>
          <div class="photo-description">
            {{ chapterPhotoDescription }}
          </div>
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
    .cash-grain-chapter-title-container {
      @include global_container;
      background-size: cover;
      height: calc(100vw * 0.56);
      margin-bottom: 20px;
      @media (min-width: $break-md) {
        background-image: none !important;
        height: auto;
        margin-bottom: 0;
      }
    }
    .cash-grain-chapter-content-container {
      @include global_container;
    }

    .chapter-image {
      width: 100%;
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

      .photo-arrow-up {
        display: block;
        @media (min-width: $break-md) {
          display: none;
        }
      }
      .photo-arrow-left {
        display: none;
        @media (min-width: $break-md) {
          display: block;
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
