<template>
  <v-card v-if="rating === undefined">
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
      <div v-else-if="!result">
        <RatingBar v-model="rating" @input="updateResponse"></RatingBar>
        <v-spacer></v-spacer>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { createResponse, updateResponse } from '@/graphql/mutations'

import RatingBar from '@/components/RatingBar'

export default {
  components: {
    RatingBar,
  },
  props: {
    value: Object,
    admin: Boolean,
    result: Boolean,
  },
  data: () => ({
    rid: null,
    rating: undefined,
  }),
  computed: {
    item () {
      return JSON.parse(this.value.content)
    },
  },
  created () {
    if (this.result) return
    const { API, graphqlOperation } = this.$Amplify
    const responseItemId = this.value.id
    const id = this.$store.state.responses[responseItemId]
    if (id === undefined) {
      API.graphql(graphqlOperation(createResponse, { input: { responseItemId, rating: -1 } })).then(({ data }) => {
        this.$store.commit('respond', { id: data.createResponse.id, responseItemId })
      })
    } else {
      this.rid = id
    }
  },
  methods: {
    async updateResponse () {
      if (!this.rid) return
      const { API, graphqlOperation } = this.$Amplify
      const rating = this.rating === undefined ? -1 : this.rating
      const input = { rating, id: this.rid }
      await API.graphql(graphqlOperation(updateResponse, { input }))
    },
  }
}
</script>
