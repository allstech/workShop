<!-- Character -->
<template>
  <CharacterCard
    v-for="character in characters"
    :key="character.id"
    :character="character"
  />
</template>

<script>
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

async function getCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
}

export default {
  name: 'CharacterView',
  components: {
    CharacterCard,
  },
  setup() {
    const characters = ref([]);

    return {
      characters,
    };
  },
  async created() {
    this.characters = await getCharacters();
  },
};
</script>
