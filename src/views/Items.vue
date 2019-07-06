<template>
  <v-container grid-list-md  align-center justify-center>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <amplify-connect :mutation="createItem" @done="done">
            <template #default="{ loading, mutate, errors }">
              <v-card-title>New Item</v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="title"
                  label="Title"
                  :rules="[filled]"
                ></v-text-field>
                <v-text-field
                  v-model="image"
                  label="Image"
                ></v-text-field>
                <v-textarea
                  v-model="content"
                  label="Content"
                ></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="loading" @click="mutate">
                  Create Item
                </v-btn>
              </v-card-actions>
            </template>
          </amplify-connect>
        </v-card>
      </v-flex>
    </v-layout>
    <amplify-connect :query="listItems" :subscription="itemSub" :onSubscriptionMsg="subMsg">
      <template #default="{ loading, data: { listItems: items }, errors }">
        <v-layout v-if="items" row wrap>
          <v-flex v-for="item in items.items" :key="item.id" xs12 sm6>
            <ItemCard :value="item" admin @add="showDialog(item.id)"></ItemCard>
          </v-flex>
        </v-layout>
      </template>
    </amplify-connect>
    <amplify-connect :query="listRooms">
      <template #default="{ loading, data: { listRooms: rooms }, errors }">
        <v-dialog v-model="dialog.show" width="500px">
          <v-card v-if="rooms">
            <v-card-title>Add item to room</v-card-title>
            <v-card-text>
              Item ID: {{ dialog.item }}
              <v-autocomplete
                v-model="dialog.room"
                item-text="name" item-value="id"
                label="Room"
                :items="rooms.items"
              ></v-autocomplete>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="dialog.show = false">
                Cancel
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="updateItemRoom">
                Update Item Room
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </amplify-connect>
  </v-container>
</template>

<script>
import { listItems, listRooms } from '@/graphql/queries'
import { createItem, updateItem } from '@/graphql/mutations'

import ItemCard from '@/components/ItemCard'

const onItem = `subscription OnItem {
  onCreateItem {
    id
    content
    room {
      id
      name
    }
  },
  onUpdateItem {
    id
    content
    room {
      id
      name
    }
  }
}
`

export default {
  components: {
    ItemCard,
  },
  data: () => ({
    errors: [],
    title: null,
    image: null,
    content: null,
    dialog: {
      item: null,
      room: null,
      show: false,
    },
    filled: (v) => !!v || 'Cannot be blank'
  }),
  computed: {
    item () {
      const content = JSON.stringify({
        title: this.title,
        image: this.image,
        content: this.content,
      })
      return { input: { content } }
    },
    listRooms () {
      return this.$Amplify.graphqlOperation(listRooms)
    },
    listItems () {
      return this.$Amplify.graphqlOperation(listItems)
    },
    itemSub () {
      return this.$Amplify.graphqlOperation(onItem)
    },
    createItem () {
      return this.$Amplify.graphqlOperation(createItem, this.item)
    },
  },
  methods: {
    done () {
      this.title = ''
      this.image = null
      this.content = null
    },
    subMsg ({ data }, { onCreateItem, onUpdateItem }) {
      if (onCreateItem) {
        data.listItems.items.push(onCreateItem)
      } else if (onUpdateItem) {
        const idx = data.listItems.items.map((i) => i.id).indexOf(onUpdateItem.id)
        data.listItems.items.splice(idx, 1, onUpdateItem)
      }
      return data
    },
    showDialog (i) {
      this.dialog.item = i
      this.dialog.room = null
      this.dialog.show = true
    },
    async updateItemRoom () {
      const { API, graphqlOperation } = this.$Amplify
      const input = { id: this.dialog.item, itemRoomId: this.dialog.room }
      await API.graphql(graphqlOperation(updateItem, { input }))
      this.dialog.show = false
    },
  }
}
</script>
