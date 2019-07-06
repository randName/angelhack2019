<template>
<amplify-connect :query="getRoom">
<template #default="{ loading, data: { getRoom: room }, errors }">
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
      <v-flex v-for="item in room.items.items" :key="item.id" xs12 sm6>
        <v-card>
          <v-card-text>
            {{ item }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <RatingBar></RatingBar>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
</amplify-connect>
</template>

<script>
import { getRoom } from '@/graphql/queries'

import RatingBar from '@/components/RatingBar'

const responses = [
  '"I am uncomfortable with talking about this"',
  '"I do not know if I am comfortable with this"',
  '"I am OK with talking about this"',
  '"I really want to talk about this"',
]

responses[undefined] = 'Click on the sample responses to see what they mean'

export default {
  components: {
    RatingBar,
  },
  data: () => ({
    responses,
    sample: undefined,
  }),
  computed: {
    rid () {
      return this.$route.params.id
    },
    getRoom () {
      return this.$Amplify.graphqlOperation(getRoom, { id: this.rid })
    },
  },
}
</script>
