<template>
  <div class="cash-grain-chapter">
    <div class="cash-grain-chapter-title-container">
      <CashGrainChapterTitle
        :chapterLabel="chapterLabel"
        :chapterTitle="chapterTitle"
      />
    </div>
    <div
      class="cash-grain-chapter-content-container">
      <div class="cash-grain-chapter-photo-lockup">
        <div class="chapter-story">
          <p
            class="cash-grain-chapter-description"
            v-html="chapterDescription"
          />
        </div>
        <div class="photo-descrtiption-container">
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
    <div class="chapter-backgrounds">
      <div
        class="chapter-bg-mobile"
        :style="{ backgroundImage: `url(${chapterPhotoMobile}` }"
      />
      <div
        class="chapter-bg-desktop"
        :style="{ backgroundImage: `url(${chapterPhotoDesktop}` }"
      />
    </div>
    <div
      v-if="chapterLink"
      class="chapter-links"
    >
      <CashGrainLink
        :chapterLink="chapterLink"
        :chapterLinkCTA="chapterLinkCTA"
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
    chapterTitle: {
      type: String,
      required: true,
    },
    chapterPhotoMobile: {
      type: String,
      required: true,
    },
    chapterPhotoDesktop: {
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
    chapterLink: {
      type: String,
      required: false,
    },
    chapterLinkCTA: {
      type: String,
      required: false,
    }
  },
  mounted() {
    //
  },
}
</script>

<style lang="scss" scoped>


  .cash-grain-chapter {
    position: relative;
    height: 100vh;
    .cash-grain-chapter-title-container {
      @include global_container;
      margin-bottom: 20px;
      padding-top: 10px;
      @media (min-width: $break-md) {
        margin-bottom: 0;
        padding: 0;
      }
    }
    .cash-grain-chapter-content-container {
      @include global_container;
    }

    .cash-grain-chapter-title {
      padding-top: 40px;
      @media (min-width: $break-md) {
        padding-top: 80px;
      }
    }

    .cash-grain-chapter-photo-lockup {
      display: flex;
      flex-direction: column;

      .photo-descrtiption-container {
        padding: 20px 0px;
        font-size: 12px;
        line-height: 20px;
        max-width: 400px;

        @media (min-width: $break-md) {
          padding: 26px 0px;
          max-width: 30%;
          max-width: 500px;
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

    .chapter-backgrounds {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      top: 0;
    }

    .chapter-bg-mobile {
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      @media (min-width: $break-md) {
        display: none;
      }
    }
    .chapter-bg-desktop {
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      display: none;
      @media (min-width: $break-md) {
        display: block;
      }
    }

  }

</style>
