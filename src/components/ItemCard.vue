<template>
  <v-card>
    <v-card-title>
      <div class="headline">{{ item.title }}</div>
    </v-card-title>
    <v-img v-if="item.image" :src="item.image" contain height="200px"></v-img>
    <v-card-text>
      {{ item.content }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    item () {
      return JSON.parse(this.value.content)
    }
  },
}
</script>
