<template>
  <main>
    <PageHero
      heroHeadline="FROM HOST<br>TO JUNTA"
      heroImage="chapter1_hero"
      heroParagraph="Before a ball was kicked, domestic politics, the repression of civilians and the military junta’s ambitions cast a long shadow over the 1978 World Cup"
    />
    <PageBreadcrumb pageName="CHAPTER 1, FROM HOST TO JUNTA: 1-6" />
    <div class="chapters-container">
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="01/06"
          chapterTitle="ARGENTINA YOU GET<br>TO HOST A WORLD CUP!"
          chapterPhoto="/images/cash_grain/chapter1/01_06.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Argentina was officially chosen as the host nation by FIFA on July 6, 1966 in London, England. Mexico withdrew from the bidding process after having been awarded the 1970 competition two years earlier."
          chapterDescription="In 1964, at FIFA’s Tokyo congress, Argentina was awarded the hosting rights to the 1978 World Cup. To host the football tournament was the highest honor in all of sports."
        />
        <CashGrainLink
          chapterLink="/"
          chapterLinkCTA="LEARN MORE"
        />
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="02/06"
          chapterTitle="ARGENTINA YOU GET<br>TO HOST A WORLD CUP!"
          chapterPhoto="/images/cash_grain/chapter1/02_06.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Argentina was officially chosen as the host nation by FIFA on July 6, 1966 in London, England. Mexico withdrew from the bidding process after having been awarded the 1970 competition two years earlier."
          chapterDescription="In 1964, at FIFA’s Tokyo congress, Argentina was awarded the hosting rights to the 1978 World Cup. To host the football tournament was the highest honor in all of sports."
        />
        <CashGrainLink
          chapterLink="/"
          chapterLinkCTA="LEARN MORE"
        />
      </div>
      <div class="chapter">
        <CashGrainChapterTitle
          chapterLabel="03/06"
          chapterTitle="THE MILITARY<br>JUNTA LEADERS"
        />
        <VueSlickCarousel v-bind="settings">
          <div>
            <CashGrainCarouselSlide
              slidePhoto="/images/cash_grain/chapter1/03_06_A.jpg"
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
              slidePhoto="/images/cash_grain/chapter1/03_06_B.jpg"
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
              slidePhoto="/images/cash_grain/chapter1/03_06_C.jpg"
              slidePhotoLabel="Jorge Rafael Videla"
              slidePhotoDescription="(August 2, 1925–May 17, 2013) was a General Commander of the Army, member of the military junta, and dictator of Argentina from 1976 to 1981. On December 22, 2010, Videla was sentenced to life in a civilian prison for the deaths of 31 prisoners following his coup."
            />
            <CashGrainLink
              chapterLink="/"
              chapterLinkCTA="Learn More About Jorge Rafael Videla"
            />
          </div>
        </VueSlickCarousel>
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="04/06"
          chapterTitle="Operation Condor,<br>The Dirty War"
          chapterPhoto="/images/cash_grain/chapter1/04_06.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Collections of photos from families whose children and grandchildren had disappeared. Human rights organizations estimate that over 30,000 people were disappeared."
          chapterDescription="The Junta declared a so-called “Dirty War” against this enemy from within. The full extent of the atrocities committed between 1976 and 1983 is not certain.<br><br>The figure generally quoted, however, is that an estimated 30,000 people were “disappeared,” with many others illegally imprisoned or going into exile."
        />
        <CashGrainLink
          chapterLink="/"
          chapterLinkCTA="LEARN About The Dirty War"
        />
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="05/06"
          chapterTitle="CALLS FOR<br>A BOYCOTT"
          chapterPhoto="/images/cash_grain/chapter1/05_06.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoDescription="Flyers papered on walls around Paris took the official logo of the World Cup, a pair of stylized upraised arms framing a soccer ball, and added grim-looking barbed wire."
          chapterDescription="In late 1977, a group of French journalists and intellectuals formed the Organizing Committee for the Boycott of the Argentina World Cup, known for its French acronym, COBA.<br><br>They planned an organized campaign designed to persuade the French national team, led by the curly-haired goal scorer Michel Platini, to skip the tournament altogether."
        />
      </div>
    </div>
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
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
    @include global-container;

    .slick-dots li button::before {
      color: $color--brand-white;
      border-radius: 50%;
      font-size: 16px;
    }
  }
  .chapter {
    padding: 25px 0 30px;
    @include global-margin-bottom;
  }
</style>
