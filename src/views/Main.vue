<template>
  <v-container align-center justify-center>
    <v-layout row>
      <v-spacer></v-spacer>
      <v-flex xs12 sm8 md6>
        <v-card class="text-xs-center">
          <v-card-title primary-title>
            <div class="headline">Welcome!</div>
          </v-card-title>
          <v-card-text>
            Please start by creating or joining a room.
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field
                    v-model="roomCode"
                    label="Room Code"
                    mask="AAAAA"
                    :error-messages="errors"
                    @change="errors = []"
                  ></v-text-field>
               </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <amplify-connect :mutation="createRoom" @done="created">
              <template #default="{ loading, mutate, errors }">
                <v-btn :disabled="loading" @click="mutate">
                  Create Room
                </v-btn>
              </template>
            </amplify-connect>
            <v-spacer></v-spacer>
            <v-btn primary @click="joinRoom">
              Join Room
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
import { listRooms } from '@/graphql/queries'
import { createRoom } from '@/graphql/mutations'

export default {
  data: () => ({
    errors: [],
    roomCode: null,
  }),
  computed: {
    createRoom () {
      return this.$Amplify.graphqlOperation(createRoom, this.randomRoom())
    },
  },
  methods: {
    async joinRoom () {
      const { API, graphqlOperation } = this.$Amplify
      const limit = 1
      const filter = { name: { eq: this.roomCode.toLowerCase() } }
      const results = await API.graphql(graphqlOperation(listRooms, { filter, limit }))
      const items = results.data.listRooms.items
      if (items.length < 1) {
        this.errors = ['No such room']
      } else {
        this.enterRoom(items[0])
      }
    },
    randomRoom () {
      return {
        input: {
          name: Math.random().toString(36).replace(/[^a-z]+/g, '').slice(0, 5)
        }
      }
    },
    created ({ data }) {
      this.enterRoom(data.createRoom)
    },
    enterRoom ({ id }) {
      this.$router.push({ name: 'Room', params: { id } })
    },
  }
}
</script>
