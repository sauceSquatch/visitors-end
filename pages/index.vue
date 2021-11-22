<template>
  <main>
    <PageHero
      heroHeadline="CASH<br/>GRAIN,<br/>AND<br/>BLOOD<br/>FOR GOALS"
      heroImage="images/cash_grain/landing_hero.jpg"
      heroParagraph="Before a ball was kicked, domestic politics, the repression of civilians and the military junta’s ambitions cast a long shadow over the 1978 World Cup"
    />
    <PageBreadcrumb pageName="table of contents" />
    <div class="chapters-container">
      <CashGrainChapter
        chapterLabel="CH/01"
        chapterTitle="From Host<br>to Junta"
        chapterPhoto="/images/cash_grain/homepage/homepage_01.jpg"
        chapterPhotoLabel="IMAGE:"
        chapterPhotoTitle="Jorge Rafael Videla"
        chapterPhotoDescription="Argentina players pose during the World Cup 1978 match between Argentina and Peru at Gigante de Arroyito Stadium, Rosario, Argentina, on June 21th 1978. (Photo : Michel Piquemal / Onze / Icon Sport via Getty Images)"
        chapterDescription="The Argentine national team was disparate group over-seas players and local legends. A chain-smoking, left-wing intellectual is picked to manage the team."
      />
      <CashGrainLink
        chapterLink="/"
        chapterLinkCTA="LEARN MORE"
      />
    </div>
  </main>
</template>

<script>

export default {

}
</script>

<style>
  .chapters-container {
    padding: 80px;
  }
</style>
