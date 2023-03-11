<!-- Home -->
<template>
  <div class="px-7 pt-7 pb-16">
    <h1>Personajes</h1>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
      <div v-for="character in characters" :key="character.id">
        <span class="w-full block">
          <CharacterCard
            v-for="character in characters"
            :key="character.id"
            :character="character"
          />
          {{ character.name }}
        </span>
      </div>
    </div>
  </div>
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
  name: 'HomeView',
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
