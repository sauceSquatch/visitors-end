<template>
  <main>
    <PageHero
      chapterLabel="chapter 1"
      heroHeadline="FROM HOST<br>TO JUNTA"
      heroImage="chapter1_hero"
      heroParagraph="Before a ball was kicked, domestic politics, the repression of civilians and the military junta’s ambitions cast a long shadow over the 1978 World Cup"
    />
    <PageBreadcrumb pageName="CHAPTER 1, FROM HOST TO JUNTA: 1-6" />
    <CashGrainHeroQuote
      profilePic="/images/cash_grain/ch01/ch01_quote_pic.png"
      profileName="Emilio Eduardo Massera"
      profileBio="(19 October 1925 – 8 November 2010) Argentine Naval military officer, and a leading participant in the Argentine coup d’état of 1976."
      quote="“Holding the tournament will show the world that <span class='highlight'>Argentina is a trustworthy country</span>, capable of carrying out huge projects; and will help push back against the criticism that is raining on us from around the world”"
      quoteName="Admiral Emilio Massera"
    />
    <div class="chapters-container">
      <div class="chapter">
        <CashGrainChapter
          :firstChapter="true"
          chapterLabel="01/06"
          chapterTitle="ARGENTINA YOU GET<br>TO HOST A WORLD CUP!"
          chapterPhotoMobile="/images/cash_grain/ch01/ch01_01.png"
          chapterPhotoLabel="NOTE:"
          chapterPhotoDescription="Argentina was officially chosen as the host nation by FIFA on July 6, 1966 in London, England. Mexico withdrew from the bidding process after having been awarded the 1970 competition two years earlier."
          chapterDescription="In 1964, at FIFA’s Tokyo congress, Argentina was awarded the hosting rights to the 1978 World Cup. To host the football tournament was the highest honor in all of sports."
        />
        <div class="chapter-links">
          <CashGrainLink
            chapterLink="/"
            chapterLinkCTA="LEARN MORE"
          />
        </div>
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="02/06"
          chapterTitle="ARGENTINA YOU GET<br>TO HOST A WORLD CUP!"
          chapterPhotoMobile="/images/cash_grain/ch01/ch01_02.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Argentina was officially chosen as the host nation by FIFA on July 6, 1966 in London, England. Mexico withdrew from the bidding process after having been awarded the 1970 competition two years earlier."
          chapterDescription="In 1964, at FIFA’s Tokyo congress, Argentina was awarded the hosting rights to the 1978 World Cup. To host the football tournament was the highest honor in all of sports."
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
          chapterLabel="03/06"
          chapterTitle="THE MILITARY<br>JUNTA LEADERS"
        />
        <VueSlickCarousel v-bind="settings">
          <div>
            <CashGrainCarouselSlide
              slidePhoto="/images/cash_grain/ch01/ch01_03_A.jpg"
              slidePhotoLabel="Jorge Rafael Videla"
              slidePhotoDescription="(August 2, 1925–May 17, 2013) was a General Commander of the Army, member of the military junta, and dictator of Argentina from 1976 to 1981. On December 22, 2010, Videla was sentenced to life in a civilian prison for the deaths of 31 prisoners following his coup."
            />
            <CashGrainLink
              chapterLink="/"
              chapterLinkCTA="Learn More About Jorge Rafael Videla"
            />
          </div>
          <div>
            <CashGrainCarouselSlide
              slidePhoto="/images/cash_grain/ch01/ch01_03_B.jpg"
              slidePhotoLabel="Jorge Rafael Videla"
              slidePhotoDescription="(August 2, 1925–May 17, 2013) was a General Commander of the Army, member of the military junta, and dictator of Argentina from 1976 to 1981. On December 22, 2010, Videla was sentenced to life in a civilian prison for the deaths of 31 prisoners following his coup."
            />
            <CashGrainLink
              chapterLink="/"
              chapterLinkCTA="Learn More About Emilio Eduardo Massera"
            />
          </div>
          <div>
            <CashGrainCarouselSlide
              slidePhoto="/images/cash_grain/ch01/ch01_03_C.jpg"
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
      <div class="chapter-fullscreen">
        <CashGrainChapterFullscreen
          chapterLabel="04/06"
          chapterTitle="Operation Condor,<br>The Dirty War"
          chapterPhotoMobile="/images/cash_grain/ch01/ch01_04_tall.jpg"
          chapterPhotoDesktop="/images/cash_grain/ch01/ch01_04_wide.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Collections of photos from families whose children and grandchildren had disappeared. Human rights organizations estimate that over 30,000 people were disappeared."
          chapterDescription="The Junta declared a so-called Dirty War against this enemy from within. The full extent of the atrocities committed between 1976 and 1983 is not certain. The figure generally quoted, however, is that an estimated 30,000 people were “disappeared,” with many others illegally imprisoned or going into exile."
          chapterLink="/"
          chapterLinkCTA="The Dirty War"
        />
      </div>
      <div class="chapter-collection">
        <div class="cash-grain--collection-heading">
          Book Recommendations
          <img class="collection-heading-logo-amazon" src="/images/cash_grain/books/logo_amazon.svg" alt="amazon logo">
        </div>
        <div class="chapter-collection-content">
          <div class="chapter-collection-description">
            A collection of books that are informative and personal that shed light on the cause and effects on the Juntas Policies
          </div>
          <div class="chapter-collection-items">
            <CashGrainCollectionItem
              itemImage="/images/cash_grain/books/book_01_dirtywar.jpg"
              itemDescription="The Ideological Origins of the Dirty War by Federico Finchelstein"
              itemLink="/"
              itemLinkCTA="Learn More"
            />
            <CashGrainCollectionItem
              itemImage="/images/cash_grain/books/book_02_betrayed.jpg"
              itemDescription="The Ideological Origins of the Dirty War by Federico Finchelstein"
              itemLink="/"
              itemLinkCTA="Learn More"
            />
            <CashGrainCollectionItem
              itemImage="/images/cash_grain/books/book_03_dirtySecretsDirtyWar.jpg"
              itemDescription="The Ideological Origins of the Dirty War by Federico Finchelstein"
              itemLink="/"
              itemLinkCTA="Learn More"
            />
          </div>
        </div>
        <div class="chapter-collection-footer" />
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="05/06"
          chapterTitle="CALLS FOR<br>A BOYCOTT"
          chapterPhotoMobile="/images/cash_grain/ch01/ch01_05.png"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Flyers papered on walls around Paris took the official logo of the World Cup, a pair of stylized upraised arms framing a soccer ball, and added grim-looking barbed wire."
          chapterDescription="In late 1977, a group of French journalists and intellectuals formed the Organizing Committee for the Boycott of the Argentina World Cup, known for its French acronym, COBA.<br><br>They planned an organized campaign designed to persuade the French national team, led by the curly-haired goal scorer Michel Platini, to skip the tournament altogether."
        />
      </div>
      <div class="chapter-fullscreen">
        <CashGrainChapterFullscreen
          chapterLabel="06/06"
          chapterTitle="mothers<br>of the<br>plaza de mayo"
          chapterPhotoMobile="/images/cash_grain/ch01/ch01_06_tall.jpg"
          chapterPhotoDesktop="/images/cash_grain/ch01/ch01_06_wide.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Buenos Aires, Argentina: “Madres de Plaza de Mayo” remain upright on the flooding square in front of the Presidential Palace, claiming their missing sons and daughters, circa 1982 in Buenos Aires."
          chapterDescription="On April 30, 1977, Azucena Villaflor de De Vincenti and a dozen other mothers walked to the Plaza de Mayo in Argentina’s capital city. These women shared the experience of each having had at least one child who had been taken by the military government.
                              At great risk to themselves, the mothers made the simple protest of walking to the Plaza De Mayo with pictures of their missing adult children
                              The mothers created a simple visual sign of their solidarity by each wearing a headscarf with the name of their “disappeared” loved one."
          chapterLink="/"
          chapterLinkCTA="Learn More About The Madres de Plaza de mayo"
          youtubeLink="http://www.youtube.com"
        />
      </div>
    </div>
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import CashGrainCollectionItem from '~/components/CashGrainCollectionItem.vue'
export default {
  components: {
    VueSlickCarousel,
    CashGrainCollectionItem,
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
    }
    .chapter-collection {
      background: url("~/assets/images/cash_grain/quote_bg_m.png");

      .cash-grain--collection-heading {
        background-color: $color--gray-80;
        display: flex;
        justify-content: space-between;
        padding: 16px 20px;
        @media (min-width: $break-lg) {
          justify-content: center;
        }
      }
      .collection-heading-logo-amazon {
        margin: 3px 10px 0;
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
