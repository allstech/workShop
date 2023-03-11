<template>
  <div class="relative rounded-lg overflow-hidden pt-80">
    <figure class="absolute top-0 left-0 w-full h-full">
      <img
        :src="character.image"
        :alt="`image of ${character.name}`"
        class="object-cover w-full h-full"
      />
    </figure>

    <span
      class="
        absolute
        top-0
        left-0
        w-full
        h-full
        bg-gradient-to-b
        from-transparent
        via-transparent
        to-black
      "
    />

    <div
      class="
        absolute
        bottom-0
        left-0
        w-full
        flex flex-col
        justify-end
        items-start
        p-6
      "
    >
      <span class="w-full block text-white">
        {{ character.name }}
      </span>

      <RouterLink
        :to="`/character/${character.id}`"
        class="
          text-sm text-transparent
          bg-clip-text bg-gradient-to-r
          from-lime-400
          to-cyan-400
          hover:to-lime-400
          border-b border-lime-400
        "
      >
        Ver detalle
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>
