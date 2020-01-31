<template>
  <div class="cards">
    <PetCard v-for="(card, index) in cards" :key="card" :card="card" :is-current="index === 0" />
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
    <div id="pet-img">
      <img class="card-img" :src="getImage" />
      <!-- <div class="card-body">
      </div>-->
    </div>
    <div class="card-footer">
      <h3 class="cardTitle">[[ animal.attributes.name ]]</h3>
      <p>[[animal.attributes.ageString]] - [[animal.attributes.sex]]</p>
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard";

export default {
  components: {
    GameCard
  },

  props: {
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>
<style>
</style>