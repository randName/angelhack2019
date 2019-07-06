<template>
  <v-app dark>
    <v-toolbar app fixed clipped-left>
      <v-btn icon :to="{ name: 'Main' }">
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title>Buay Paiseh</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
