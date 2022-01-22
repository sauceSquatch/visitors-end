<template>
  <div class="cash-grain-hero-quote">
    <div class="global-container">
      <div class="profile-container">
        <img :src="profilePic" :alt="`${profileName} profile picture`" class="profile-img">
        <div class="profile-info">
          <img src="~/assets/images/cash_grain/dottedArrow-left.svg" alt="arrow pointing at profile pic" class="profile-arrow-left">
          <div class="profile-name">
            {{ profileName }}
          </div>
          <div class="profile-bio">
            {{ profileBio }}
          </div>
        </div>
      </div>
      <div class="quote-container">
        <h4 v-html="quote" />
        <div class="quote-sig">
          - {{ quoteName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profilePic: {
      type: String,
      required: true,
    },
    profileName: {
      type: String,
      required: true,
    },
    profileBio: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    quoteName: {
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

  .cash-grain-hero-quote {
    background: url("~/assets/images/cash_grain/quote_bg_m.png");
    @media (min-width: $break-md) {
      padding: 40px 0;
    }


    .global-container {
      @include global-container;
    }
    .profile-container{
      display: flex;
      @media (min-width: $break-md) {
        display: none;
      }
    }

    .profile-img {
      margin-right: 25px;
      align-self: center;
    }
    .profile-arrow-left {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .profile-info {
      font-size: 12px;
      line-height: 18px;
      color: $color--brand-white;
      max-width: 360px;
    }
    .profile-bio {
      margin-top:8px;
      color: $color--brand-blue-light;
    }

    .quote-container {
      padding-top: 40px;
      @media (min-width: $break-md) {
        padding-top: 0;
      }

      h4 {
        font-family: 'Stardos Stencil', sans-serif;
        font-size: 26px;
        line-height: 45px;
      }

      .quote-sig {
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
        font-size: 16px;
        text-transform: uppercase;
        color: $color--brand-blue-light;
        padding-bottom: 30px;
      }
      .highlight {
        color: $color--brand-blue-light;
      }
    }

  }

</style>
