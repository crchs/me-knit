<template>
  <div>
    <v-app-bar color="teal-darken-4"
      image="https://images.unsplash.com/photo-1497105943914-b90d55145023">
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <v-app-bar-title text="knit-me" />

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-md-block">
        <v-btn text to="home">
          <span class="mr-2">Zaloguj</span>
        </v-btn>
        <v-btn text to="about">
          <span class="mr-2">O mnie</span>
        </v-btn>
      </v-toolbar-items>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" class="d-md-none">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="home">
            <v-list-item-title>Zaloguj</v-list-item-title>
          </v-list-item>
          <v-list-item to="about">
            <v-list-item-title>O mnie</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavigationEntity'
}
</script>

<style lang="scss"></style>