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
    width: 100vw;
    padding: 8px 80px;
    background: $color--brand-blue-light;
    .breadcrumb-content {
      display: flex;
      align-items: center;

      h2, h3 {
        font-family: 'Stardos Stencil', sans-serif;
        font-size: 18px;
        margin: 0;
        text-transform: uppercase;
      }
    }
  }

</style>
