<template>
  <main>
    <PageHero
      chapterLabel=""
      heroHeadline="CASH<br/>GRAIN,<br/>AND<br/>BLOOD<br/>FOR GOALS"
      heroImage="landing_hero"
      heroParagraph="Before a ball was kicked, domestic politics, the repression of civilians and the military junta’s ambitions cast a long shadow over the 1978 World Cup"
    />
    <PageBreadcrumb pageName="table of contents" />
    <div class="chapters-container">
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="CH/01"
          chapterTitle="From Host<br>to Junta"
          chapterPhotoMobile="/images/cash_grain/homepage/homepage_01_mobile.png"
          chapterPhotoDesktop="/images/cash_grain/homepage/homepage_01_desktop.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoTitle="Jorge Rafael Videla"
          chapterPhotoDescription="Argentina players pose during the World Cup 1978 match between Argentina and Peru at Gigante de Arroyito Stadium, Rosario, Argentina, on June 21th 1978. (Photo : Michel Piquemal / Onze / Icon Sport via Getty Images)"
          chapterDescription="The Argentine national team was disparate group over-seas players and local legends. A chain-smoking, left-wing intellectual is picked to manage the team."
        />
        <div class="chapter-links">
          <CashGrainLink
            chapterLink="cash-grain-chapter-1"
            chapterLinkCTA="LEARN MORE"
          />
        </div>
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="CH/02"
          chapterTitle="MATTERS ON<br>THE PITCH"
          chapterPhotoMobile="/images/cash_grain/homepage/homepage_02_mobile.png"
          chapterPhotoDesktop="/images/cash_grain/homepage/homepage_02_desktop.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoTitle="Jorge Rafael Videla"
          chapterPhotoDescription="Argentina players pose during the World Cup 1978 match between Argentina and Peru at Gigante de Arroyito Stadium, Rosario, Argentina, on June 21th 1978. (Photo : Michel Piquemal / Onze / Icon Sport via Getty Images)"
          chapterDescription="The Argentine national team was disparate group over-seas players and local legends. A chain-smoking, left-wing intellectual is picked to manage the team."
        />
        <div class="chapter-links">
          <CashGrainLink
            chapterLink="cash-grain-chapter-2"
            chapterLinkCTA="LEARN MORE"
          />
        </div>
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="CH/03"
          chapterTitle="LET IN FOUR<br>OR ELSE"
          chapterPhotoMobile="/images/cash_grain/homepage/homepage_03_mobile.png"
          chapterPhotoDesktop="/images/cash_grain/homepage/homepage_03_desktop.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoTitle="Leopoldo Luque"
          chapterPhotoDescription="of Argentina during the World Cup 1978 match between Argentina and Peru at Gigante de Arroyito Stadium."
          chapterDescription="The players from the Argentine and Peruvian teams feel the pressure from outside the locker room and from within."
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
          chapterLabel="CH/04"
          chapterTitle="IT TAKES TWO<br>TO CONSPIRE"
          chapterPhotoMobile="/images/cash_grain/homepage/homepage_04_mobile.png"
          chapterPhotoDesktop="/images/cash_grain/homepage/homepage_04_desktop.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoTitle="Jorge Rafael Videla (Center)"
          chapterPhotoDescription="Argentine dictator Jorge Rafael Videla attending the World Cup match between Argentina and Peru, 1978."
          chapterDescription="Behind the scenes, the Argentine junta and Peruvian dictatorship negotiate the price and terms for the Argentina team to qualify for the final."
        />
        <div class="chapter-links">
          <CashGrainLink
            chapterLink="cash-grain-chapter-3"
            chapterLinkCTA="LEARN MORE"
          />
        </div>
      </div>
      <div class="chapter">
        <CashGrainChapter
          chapterLabel="CH/05"
          chapterTitle="THE<br>AFTERMATH"
          chapterPhotoMobile="/images/cash_grain/homepage/homepage_05_mobile.png"
          chapterPhotoDesktop="/images/cash_grain/homepage/homepage_05_desktop.jpg"
          chapterPhotoLabel="IMAGE:"
          chapterPhotoTitle="Daniel Passarella (Captain of Argentina)"
          chapterPhotoDescription="Daniel Passerella of Argentina with the World Cup 1978 final between Argentina and Holland at Gigante de Arroyito Stadium."
          chapterDescription="The Junta is basking in the glory of the national football team’s victory. However, ordinary Argentine citizens are refusing to remain silent at the regime’s atrocities."
        />
        <div class="chapter-links">
          <CashGrainLink
            chapterLink="/"
            chapterLinkCTA="LEARN MORE"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {

}
</script>

<style lang="scss">

  .mobile {
    @media (min-width: $break-md) {
      display: none;
    }
  }
  .desktop {
    display: none;
    @media (min-width: $break-md) {
      display: block;
    }
  }

  .chapter {
    padding: 25px 0 30px;
    @include global-margin-bottom;
  }
  .chapter-fullscreen {
    margin: 0;
  }
  .chapter-links {
    @include global-container;
  }
</style>
