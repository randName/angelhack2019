<template>
  <v-container v-if="room" grid-list-md align-center justify-center>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Room: {{ room.name.toUpperCase() }}</div>
          </v-card-title>
          <v-card-text>
            For each item below, please indicate how comfortable you are with discussing the topic.
            <blockquote class="blockquote">
              {{ responses[sample] }}
            </blockquote>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <RatingBar v-model="sample"></RatingBar>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="item in items" :key="item.id" xs12 sm6>
        <ItemCard :value="item"></ItemCard>
      </v-flex>
    </v-layout>
    <amplify-connect :subscription="responseSub" :onSubscriptionMsg="subMsg"></amplify-connect>
    <v-layout row wrap>
      <v-flex v-if="ready && vote !== -1" xs12>
        <ItemCard :value="items[vote]" result></ItemCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import RatingBar from '@/components/RatingBar'

const responses = [
  '"I am uncomfortable with talking about this"',
  '"I do not know if I am comfortable with this"',
  '"I am OK with talking about this"',
  '"I really want to talk about this"',
]

responses[undefined] = 'Click on the sample responses to see what they mean'

const onResponse = `subscription OnResponse {
  onCreateResponse {
    id
    rating
  },
  onUpdateResponse {
    id
    rating
  }
}
`

const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    id
    name
    items {
      items {
        id
        content
        responses {
          items {
            id
            rating
          }
        }
      }
    }
  }
}
`

export default {
  components: {
    ItemCard,
    RatingBar,
  },
  data: () => ({
    responses,
    room: null,
    sample: undefined,
  }),
  computed: {
    rid () {
      return this.$route.params.id
    },
    items () {
      if (!this.room) {
        return []
      }
      return this.room.items.items
    },
    ready () {
      if (!this.room) return false
      return this.items.map((i) => i.responses.items.map((j) => j.rating)).flat().every((i) => i > -1)
    },
    vote () {
      if (!this.ready) return -1
      const votes = this.items.map((i) => i.responses.items.reduce((a, { rating }) => {
        if (a === -1 || rating === 0) { return -1 }
        return rating + a
      }, 0))
      return votes.indexOf(Math.max(...votes))
    },
    responseSub () {
      return this.$Amplify.graphqlOperation(onResponse)
    },
  },
  mounted () {
    this.getRoom()
  },
  methods: {
    async getRoom () {
      const { API, graphqlOperation } = this.$Amplify
      const { data } = await API.graphql(graphqlOperation(getRoom, { id: this.rid }))
      this.room = data.getRoom
    },
    subMsg (prev, { onCreateResponse, onUpdateResponse }) {
      const resp = onCreateResponse || onUpdateResponse
      this.items.forEach((i) => {
        const idx = i.responses.items.map((j) => j.id).indexOf(resp.id)
        if (idx !== -1) {
          i.responses.items.splice(idx, 1, resp)
        }
      })
    },
  }
}
</script>
