<template>
  <div class="cash-grain-collection-item">
    <div class="image-container">
      <img
        v-if="itemImage"
        class="item-image"
        :src="itemImage"
      >
    </div>
    <div class="item-info">
      <p
        v-if="itemDescription"
        class="item-description"
        v-html="itemDescription"
      />
      <CashGrainLink
        :chapterLink="itemLink"
        :chapterLinkCTA="itemLinkCTA"
        :linkExternal="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemImage: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: false,
    },
    itemLink: {
      type: String,
      required: false,
    },
    itemLinkCTA: {
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
  .cash-grain-collection-item {
    display: flex;
    margin: 20px 0 45px;

    .item-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 20px;

      .cash-grain-link {
        margin: 0;
      }
    }
    .item-description {
      max-width: 175px;
      line-height: 1.8em;
    }
  }

</style>
