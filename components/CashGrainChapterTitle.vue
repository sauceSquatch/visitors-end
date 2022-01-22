<template>
  <div class="cash-grain-chapter-title">
    <div class="cash-grain-heading-label">
      {{ chapterLabel }}
    </div>
    <h2 v-html="chapterTitle" />
    <div class="chapter-head-divider">
      <img class="stripped-underline" src="~/assets/images/cash_grain/stripeunderline.png">
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
  },

}
</script>

<style lang="scss">
    .cash-grain-chapter-title {
      h2 {
        font-family: 'Stardos Stencil', sans-serif;
        font-size: 18px;
        line-height: 1;
        margin: 0;
        text-transform: uppercase;
        @media (min-width: $break-sm) {
          font-size: 36px;
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
</style>
