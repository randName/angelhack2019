<template>
  <v-card>
    <v-card-title>
      <div class="headline">{{ item.title }}</div>
    </v-card-title>
    <v-img v-if="item.image" :src="item.image" contain height="200px"></v-img>
    <v-card-text>
      {{ item.content }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="admin" @click="$emit('add')">
        Room: {{ value.room ? value.room.name : 'None' }}
      </v-btn>
      <div v-else>
        <RatingBar v-model="rating"></RatingBar>
        <v-spacer></v-spacer>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import RatingBar from '@/components/RatingBar'

export default {
  components: {
    RatingBar,
  },
  props: {
    value: Object,
    admin: Boolean,
  },
  data: () => ({
    rating: null,
  }),
  computed: {
    item () {
      return JSON.parse(this.value.content)
    },
  },
}
</script>
