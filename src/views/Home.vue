<template>
  <div class="home">
    <ul>
      <li v-for="(item, idx) in products" :key="idx">
        {{ item.name }}--{{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  computed: {
    ...mapGetters({
      products: 'products'
    })
  },

  mounted(){
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts'
    })
  }
}
</script>
