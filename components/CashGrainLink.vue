<template>
  <div class="cash-grain-link">
    <a
      v-if="linkExternal"
      :href="chapterLink">
      <div class="arrow-container">
        <img
          class="dotted-arrow"
          src="images/cash_grain/dottedArrow-right.svg"
        >
      </div>
      {{ chapterLinkCTA }}
    </a>
    <NuxtLink
      v-if="!linkExternal"
      :to="chapterLink"
    >
      <div class="arrow-container">
        <img
          class="dotted-arrow"
          src="images/cash_grain/dottedArrow-right.svg"
        >
      </div>
      {{ chapterLinkCTA }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    chapterLink: {
      type: String,
      required: false,
    },
    linkExternal: {
      type: Boolean,
      required: false,
      default: false,
    },
    chapterLinkCTA: {
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
  .cash-grain-link {
    margin: 16px 0;
    color: $color--brand-white;
    font-size: 12px;
    line-height: 1;

    @media (min-width: $break-sm) {
      font-size: 14px;
    }

    a, .nuxt-link {
      display: flex;
      align-items: center;
      text-decoration: none;

      &:visited {
        color: $color--brand-white;
      }
    }

    // a &:visited, a &:-webkit-any-link,
    // .nuxt-link-exact-active, .nuxt-link-active {
    //   color: $color--brand-white;
    // }


    .arrow-container {
      display: flex;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-color: $color--brand-orange;
      justify-content: center;
      margin-right: 12px;
      @media (min-width: $break-sm) {
        width: 40px;
        height: 40px;
      }

      .dotted-arrow {
        width: 22px;
        @media (min-width: $break-sm) {
          width: 26px;
        }
      }
    }

  }

</style>
