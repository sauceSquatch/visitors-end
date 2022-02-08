<template>
  <div class="cash-grain-chapter-footer">
    <img :src="footerImageMobile" alt="" class="mobile">
    <img :src="footerImageDesktop" alt="" class="desktop">
    <NuxtLink
      :to="nextChapterLink"
      class="cash-grain--footer footer-link"
    >
      <span
        class="footer-link-text"
        v-html="nextChapterCTA"
      />
      <div class="arrow-container">
        <img
          class="dotted-arrow"
          src="/images/cash_grain/dottedArrow-right.svg"
        >
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    nextChapterCTA: {
      type: String,
      required: true,
    },
    nextChapterLink: {
      type: String,
      required: true,
    },
    footerImageMobile: {
      type: String,
      required: true,
    },
    footerImageDesktop: {
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
  .cash-grain-chapter-footer {
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: $color--brand-blue-light;
    height: 80px;
    display: flex;

    .footer-gradient {
      background: rgb(32,197,247);
      background: linear-gradient(90deg, rgba(32,197,247,0) 28%, rgba(32,197,247,1) 33%, rgba(32,197,247,1) 100%);
    }

    .footer-link {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      text-decoration: none;
      color: $color--brand-white;
    }

    .footer-link-text, .dotted-arrow {
      margin-right: 16px;
      @media (min-width: $break-sm) {
        margin-right: 18px;
      }
      @media (min-width: $break-md) {
        margin-right: 28px;
      }
      @media (min-width: $break-lg) {
        margin-right: 36px;
      }
      @media (min-width: $break-xl) {
        margin-right: 42px;
      }
    }

    .nuxt-link {
      color: $color--brand-white;

      &-active {
        color: $color--brand-white;
      }

      &:visited {
        color: $color--brand-white;
      }
    }
  }

</style>
