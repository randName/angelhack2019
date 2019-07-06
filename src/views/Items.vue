<template>
  <v-container grid-list-md  align-center justify-center>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <amplify-connect :mutation="createItem" @done="content = null">
            <template #default="{ loading, mutate, errors }">
              <v-card-title>New Item</v-card-title>
              <v-card-text>
                <v-textarea
                  v-model="content"
                  label="Content"
                  :rules="[filled]"
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
    <amplify-connect
      :query="listItems"
      :subscription="itemSubscription"
      :onSubscriptionMsg="onCreateItem"
    >
      <template #default="{ loading, data: { listItems: items }, errors }">
        <v-layout v-if="items" row wrap>
          <v-flex v-for="item in items.items" :key="item.id" xs12 sm6>
            <v-card>
              <v-card-text>
                {{ item.content }}
              </v-card-text>
            </v-card>
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

export default {
  data: () => ({
    errors: [],
    content: null,
    filled: (v) => !!v || 'Cannot be blank'
  }),
  computed: {
    listItems () {
      return this.$Amplify.graphqlOperation(listItems)
    },
    itemSubscription () {
      return this.$Amplify.graphqlOperation(onCreateItem)
    },
    createItem () {
      return this.$Amplify.graphqlOperation(createItem, { input: { content: this.content } })
    },
  },
  methods: {
    onCreateItem ({ data }, { onCreateItem }) {
      data.listItems.items.push(onCreateItem)
      return data
    },
  }
}
</script>
