<template>
  <main>
    <PageHero
      heroHeadline="FROM HOST<br>TO JUNTA"
      heroImage="images/cash_grain/chapter1_hero.jpg"
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
      <CashGrainChapter
        chapterLabel="03/06"
        chapterTitle="ARGENTINA YOU GET<br>TO HOST A WORLD CUP!"
        chapterPhoto="/images/cash_grain/chapter1/03_06_A.jpg"
        chapterPhotoLabel="IMAGE:"
        chapterPhotoDescription="Argentina was officially chosen as the host nation by FIFA on July 6, 1966 in London, England. Mexico withdrew from the bidding process after having been awarded the 1970 competition two years earlier."
        chapterDescription="In 1964, at FIFA’s Tokyo congress, Argentina was awarded the hosting rights to the 1978 World Cup. To host the football tournament was the highest honor in all of sports."
      />
      </div>
      <div class="chapter">
      <VueSlickCarousel v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </VueSlickCarousel>
      <CashGrainLink
        chapterLink="/"
        chapterLinkCTA="LEARN MORE"
      />
      </div>
      <div class="chapter">
      <CashGrainChapter
        chapterLabel="04/06"
        chapterTitle="ARGENTINA YOU GET<br>TO HOST A WORLD CUP!"
        chapterPhoto="/images/cash_grain/chapter1/04_06.jpg"
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
        chapterLabel="05/06"
        chapterTitle="ARGENTINA YOU GET<br>TO HOST A WORLD CUP!"
        chapterPhoto="/images/cash_grain/chapter1/05_06.jpg"
        chapterPhotoLabel="IMAGE:"
        chapterPhotoDescription="Argentina was officially chosen as the host nation by FIFA on July 6, 1966 in London, England. Mexico withdrew from the bidding process after having been awarded the 1970 competition two years earlier."
        chapterDescription="In 1964, at FIFA’s Tokyo congress, Argentina was awarded the hosting rights to the 1978 World Cup. To host the football tournament was the highest honor in all of sports."
      />
      <CashGrainLink
        chapterLink="/"
        chapterLinkCTA="LEARN MORE"
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
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
    width: 90%;
    padding: 5%;


    @media (min-width: $break-md) {
      width: 80%;
      padding: 80px;
    }
  }
  .chapter {
    padding: 25px 0 30px;
  }
</style>
