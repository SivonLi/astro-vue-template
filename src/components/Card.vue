<script setup lang="ts">
interface Card {
  title: string
  body: string
  href: string
}

const props = defineProps<Card>()
</script>

<template>
  <li class="card group">
    <a :href="props.href" class="card-a">
      <h2 class="group-focus-within:text-accent-light group-hover:text-accent-light m-0 text-lg transition-color duration-600">
        {{ props.title }}
        <span>&rarr;</span>
      </h2>
      <p class="mb-0 mt-2">
        {{ props.body }}
      </p>
    </a>
  </li>
</template>
