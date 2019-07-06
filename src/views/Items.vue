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
    <amplify-connect :query="listItems" :subscription="itemSub" :onSubscriptionMsg="created">
      <template #default="{ loading, data: { listItems: items }, errors }">
        <v-layout v-if="items" row wrap>
          <v-flex v-for="item in items.items" :key="item.id" xs12 sm6>
            <ItemCard :value="item"></ItemCard>
          </v-flex>
        </v-layout>
      </template>
    </amplify-connect>
  </v-container>
</template>

<script>
import { listItems } from '@/graphql/queries'
import { createItem } from '@/graphql/mutations'
import { onCreateItem } from '@/graphql/subscriptions'

import ItemCard from '@/components/ItemCard'

export default {
  components: {
    ItemCard,
  },
  data: () => ({
    errors: [],
    title: null,
    image: null,
    content: null,
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
    listItems () {
      return this.$Amplify.graphqlOperation(listItems)
    },
    itemSub () {
      return this.$Amplify.graphqlOperation(onCreateItem)
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
    created ({ data }, { onCreateItem }) {
      data.listItems.items.push(onCreateItem)
      return data
    },
  }
}
</script>
