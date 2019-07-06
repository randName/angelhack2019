<template>
  <v-container align-center justify-center>
    <v-layout row>
      <v-flex xs12>
        <v-card class="text-xs-center">
          <v-card-title primary-title>
            <div class="headline">Room</div>
          </v-card-title>
          <v-card-text>
            ID {{ $route.params.id }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>
