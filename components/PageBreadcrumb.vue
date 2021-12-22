<template>
  <div class="page-breadcrumb">
    <div class="breadcrumb-content">
      <h2>{{ pageName }}</h2>
      <h3 v-if="chapterName">
        {{ chapterName }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      required: true,
    },
    chapterName: {
      type: String,
      required: false,
    },
  },
  mounted() {
    //
  },
}
</script>

<style lang="scss" scoped>

  .page-breadcrumb {
    width: 100%;
    background: $color--brand-blue-light;

    @include global-margin-bottom;

    .breadcrumb-content {
      display: flex;
      align-items: center;
      padding: 8px 5%;


      @media (min-width: $break-md) {
        padding: 8px 0;
        width: 700px;
        margin: 0 auto;
      }
      @media (min-width: $break-lg) {
        width: 940px;
        margin: 0 auto;
      }
      @media (min-width: $break-xl) {
        width: 1200px;
        margin: 0 auto;
      }
      @media (min-width: $break-max) {
        width: 1600px;
        margin: 0 auto;
      }

      h2, h3 {
        font-family: 'Stardos Stencil', sans-serif;
        font-size: 18px;
        margin: 0;
        text-transform: uppercase;
      }
    }
  }

</style>
