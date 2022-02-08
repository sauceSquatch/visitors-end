<template>
  <main>
    <PageHero
      chapterLabel="chapter 3"
      heroHeadline="SCORE<br>FOUR<br>OR ELSE"
      heroImage="chapter3_hero"
      heroParagraph="With a lackluster performance in the second group stage, Argentina needed a massive result against the in-form Peru."
    />
    <PageBreadcrumb pageName="SCORE FOUR OR ELSE: CHAPTER THREE: 1-4" />
    <CashGrainHeroQuote
      profilePic="/images/cash_grain/ch03/ch03_quote_pic.png"
      profileName="ESMA OF THE NAVY"
      profileBio="The Higher School of Mechanics of the Navy. It was used as an illegal, secret detention center during the Dirty War of military dictatorship."
      quote="If a team could kick it’s way to a World Cup then I would pick just such a side, but it’s no longer possible. Such methods are obsolete. The emphasis must be on skill."
      quoteName="Cesar Menotti, Argentina Manager"
    />
    <div class="chapters-container">
      <div class="chapter">
        <CashGrainChapter
          :firstChapter="true"
          chapterLabel="01/01"
          chapterTitle="GROUP B STAGE<br>“SEMI-FINALS”"
          chapterPhotoMobile="/images/cash_grain/ch03/ch03_01_tall.png"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Mario Kempes<br>Argentine Striker<br><span class='source-credit'>source getty images</span>"
          chapterDescription="In the ʼ78 World Cup, there was a second group stage where the winner of the group would go on to the World Cup Final. Argentina staggered into the group and their main rival was Brazil, with Peru and Poland being the other teams.<br><br>The two teams had already played out a goalless draw. Was it just a happy accident that the hosts knew exactly what they needed to do following Brazil’s 3–1 win against Poland? With a 4–0 win against Peru, they were in the final."
        />
        <div class="chapter-links">
          <CashGrainLink
            chapterLink="/"
            chapterLinkCTA="1978 FIFA World Cup Group B"
          />
        </div>
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="01/02"
          chapterTitle="“EL GORDO”<br>THE BRIBER"
          chapterPhotoMobile="/images/cash_grain/ch03/03_02.png"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Oscar Ortiz of Argentina during the World Cup 1978 match between Argentina and Italy at Monumental Stadium, Buenos Aires, Argentina, on June 10, 1978."
          chapterDescription="In the first group stage (Group A), Argentina was placed with Italy, France and Hungary.<br><br>La Albiceleste, the host nation, got off to a sluggish start with a close 2–1 victory over Hungary in their opening game. Argentines had a more attacking (2–1) victory over the French, but with a dubious awarded penalty for hand ball. They were up against the solid Italian team and lost that game convincingly 1–0 to the Azurri.<br><br>Italy won the group comprehensively. Argentina, with the tension in the country, came in a lackluster second. Both teams automatically qualified for the second group stage."
        />
        <div class="chapter-links">
          <CashGrainLink
            chapterLink="/"
            chapterLinkCTA="LEARN MORE"
          />
        </div>
      </div>
      <div class="chapter chapter-carousel">
        <CashGrainChapterTitle
          chapterLabel="01/02"
          chapterTitle="“EL GORDO”<br>THE BRIBER"
        />
        <VueSlickCarousel v-bind="settings">
          <div>
            <CashGrainCarouselSlide
              slidePhoto="/images/cash_grain/ch02/02_02a.png"
              slidePhotoLabel="OSVALDO ARDILES"
              slidePhotoDescription="Osvaldo, “Ossie” Ardiles - Midfield: Going into the tournament, Ardiles was hardly the popular choice. The press wasn’t too keen on Ardiles selection; there were other midfielders that seemed the natural choice. Ardiles had a vital characteristic that tipped things in his balance. He was the more dynamic player – and that is what Menotti was seeking. "
            />
            <CashGrainLink
              chapterLink="/"
              chapterLinkCTA="Profile Of Osvaldo Ardiles"
            />
          </div>
          <div>
            <CashGrainCarouselSlide
              slidePhoto="/images/cash_grain/ch02/02_02b.png"
              slidePhotoLabel="MARIO KEMPES"
              slidePhotoDescription="Mario Kempes – Forward: Kempes was a rare Argentine in the fact that he played for the Spanish team Valencia. He was prolific goal scorer in La Liga, with 28 goals in 34 matches. The quality and profile of Kempes led coach Menotti to abandon his policy of selecting only domestic-based players for the home-soil tournament."
            />
            <CashGrainLink
              chapterLink="/"
              chapterLinkCTA="Profile Of Mario Kempes"
            />
          </div>
          <div>
            <CashGrainCarouselSlide
              slidePhoto="/images/cash_grain/ch02/02_02c.png"
              slidePhotoLabel="Jorge Rafael Videla"
              slidePhotoDescription="(August 2, 1925–May 17, 2013) was a General Commander of the Army, member of the military junta, and dictator of Argentina from 1976 to 1981. On December 22, 2010, Videla was sentenced to life in a civilian prison for the deaths of 31 prisoners following his coup."
            />
            <div class="chapter-links">
              <CashGrainLink
                chapterLink="/"
                chapterLinkCTA="Learn More About Jorge Rafael Videla"
              />
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="01/03"
          chapterTitle="La Albiceleste<br>AND THE REST<br>OF GROUP A"
          chapterPhotoMobile="/images/cash_grain/ch02/02_03.png"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Oscar Ortiz of Argentina during the World Cup 1978 match between Argentina and Italy at Monumental Stadium, Buenos Aires, Argentina, on June 10, 1978."
          chapterDescription="In the first group stage (Group A), Argentina was placed with Italy, France and Hungary.<br><br>La Albiceleste, the host nation, got off to a sluggish start with a close 2–1 victory over Hungary in their opening game. Argentines had a more attacking (2–1) victory over the French, but with a dubious awarded penalty for hand ball. They were up against the solid Italian team and lost that game convincingly 1–0 to the Azurri.<br><br>Italy won the group comprehensively. Argentina, with the tension in the country, came in a lackluster second. Both teams automatically qualified for the second group stage."
        />
        <div class="chapter-links">
          <CashGrainLink
            chapterLink="/"
            chapterLinkCTA="LEARN MORE"
          />
        </div>
      </div>
      <div class="chapter-collection">
        <div class="cash-grain--collection-heading">
          Adidas Argentina Kit
          <img class="collection-heading-logo-adidas" src="/images/cash_grain/kits/kit_logo_adidas.png" alt="Adidas logo">
        </div>
        <div class="chapter-collection-content">
          <div class="chapter-collection-description">
            Official collection of the current Argentine national kit.
          </div>
          <div class="chapter-collection-items">
            <CashGrainCollectionItem
              itemImage="/images/cash_grain/kits/kit01_argentina_home.png"
              itemDescription="MEN’S ARGENTINA HOME JERSEY White / Clear Blue"
              itemLink="/"
              itemLinkCTA="Buy Now"
            />
            <CashGrainCollectionItem
              itemImage="/images/cash_grain/kits/kit01_argentina_away.png"
              itemDescription="MEN’S ARGENTINA AWAY JERSEY Midnight"
              itemLink="/"
              itemLinkCTA="Buy Now"
            />
            <CashGrainCollectionItem
              itemImage="/images/cash_grain/kits/kit01_argentina_warmup.png"
              itemDescription="MEN’S ARGENTINA WARM-UP JERSEY Marble"
              itemLink="/"
              itemLinkCTA="Buy Now"
            />
          </div>
        </div>
        <div class="chapter-collection-footer" />
      </div>
      <div class="chapter-fullscreen">
        <CashGrainChapterFullscreen
          chapterLabel="01/04"
          chapterTitle="WHEN LES<br>BLEUS HAD TO WEAR GREEN<br>AND WHITE "
          chapterPhotoMobile="/images/cash_grain/ch02/ch02_01_04_tall.jpg"
          chapterPhotoDesktop="/images/cash_grain/ch02/ch02_01_04_wide.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="French midfielder Michel Platini wearing an Atletico Kimberley club jersey at the 1978 World Cup football match between France and Hungary, on June 10, 1978, in Mar del Plata."
          chapterDescription="TV broadcasts were still mainly black and white, so FIFA tried to ensure viewing audiences weren’t baffled by getting France to wear white and Hungary to wear red.<br><br>Then FIFA changed their mind, with France instructed to wear blue and Hungary white, but the reasoning was still the same. However, someone forgot to pass on the memo, and France wore white. A request was made to the nearest club, Atletico Kimberley, whose colors of white and green were perfect for TV audiences.<br><br>France ended up winning the game 3–1. Atletico Kimberley went “global” for 90 minutes."
          chapterLink="/"
          chapterLinkCTA="Learn More About The Madres de Plaza de mayo"
          youtubeLink=""
        />
      </div>
    </div>
    <CashGrainChapterFooter
      nextChapterCTA="CHAPTER THREE: <br class='mobile'>SCORE FOUR OR ELSE"
      nextChapterLink="/"
      footerImageMobile="/images/cash_grain/ch02/ch02_footer_mobile.jpg"
      footerImageDesktop="/images/cash_grain/ch02/ch02_footer_desktop.jpg"
    />
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import CashGrainCollectionItem from '~/components/CashGrainCollectionItem.vue'
import CashGrainChapterFooter from '~/components/CashGrainChapterFooter.vue'
export default {
  components: {
    VueSlickCarousel,
    // CashGrainCollectionItem,
    CashGrainChapterFooter,
  },
  data() {
    return {
      settings: {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
  .chapters-container {

    .slick-dots li button::before {
      color: $color--brand-white;
      border-radius: 50%;
      font-size: 16px;
    }
    .chapter-carousel {
      @include global-container;
      margin-bottom: 60px;
    }
    .chapter-collection {
      background: url("~/assets/images/cash_grain/quote_bg_m.png");

      .cash-grain--collection-heading {
        background-color: $color--gray-80;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        @media (min-width: $break-lg) {
          justify-content: center;
        }
      }
      .collection-heading-logo-amazon {
        margin: 3px 10px 0;
      }
      .collection-heading-logo-adidas {
        margin: 3px 10px 0;
        width: 50px;
      }
      .chapter-collection-footer {
        background-color: $color--gray-80;
        height: 20px;
      }
      .chapter-collection-content {
        @include global-container;

        .chapter-collection-description {
          margin: 35px 0;
          max-width: 380px;
          line-height: 1.8em;
          @media (min-width: $break-lg) {
            display: none;
          }
        }

        .chapter-collection-items {
          @media (min-width: $break-lg) {
            display: flex;
            justify-content: center;
            .cash-grain-collection-item {
              margin-left: 20px;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
</style>
