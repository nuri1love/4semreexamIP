<template>
    <div>
        <template  v-for="(vacancy, index) of (vacancies)" >
        <template> 
        <v-subheader
           :key="vacancy.id"
          v-text="vacancies.title"
        ></v-subheader>

        <v-divider
           :key="index"
        ></v-divider>

        <v-list-item
         :key="vacancy.title"
        >
          <v-list-item-avatar>
            <v-img :style="{background: '#fff'}" :src="require('@/static/food-icon.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="'Название: ' + vacancy.title"></v-list-item-title>
            <v-list-item-subtitle v-html="'Урон: ' + vacancy.damage"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Цена: ' + vacancy.price"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
      </template>
    </div>
</template>

<script>
export default {
    props: ['vacancies'],
    name: 'Order'
}
</script>