<template>
  <v-btn-toggle v-model="rating" @change="$emit('input', $event)">
    <v-btn large>
      <v-icon large>sentiment_very_dissatisfied</v-icon>
    </v-btn>
    <v-btn large>
      <v-icon large>sentiment_dissatisfied</v-icon>
    </v-btn>
    <v-btn large>
      <v-icon large>sentiment_satisfied</v-icon>
    </v-btn>
    <v-btn large>
      <v-icon large>sentiment_very_satisfied</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    rating: null,
  }),
  watch: {
    value (v) {
      this.rating = v
    }
  },
}
</script>
