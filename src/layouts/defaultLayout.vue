<template>
  <div class="container">
      <header>Header</header>
      <div class="wrapper">
          <aside>
              Aside
              <ul>
                  <li v-for="(item, idx) in Categorys" :key="idx">
                      {{item.name}}
                  </li>
              </ul>
          </aside>
          <main>
              <router-view />
          </main>
      </div>
      <footer>Footer</footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods: {
        ...mapActions({
            fetchCategorys: 'fetchCategorys'
        })
    },

    mounted (){
        this.fetchCategorys()
    },
    
    computed: {
        ...mapGetters({
            Categorys: 'Categorys'
        })
    }

}
</script>

<style lang="scss" scoped>
.container{
    min-height: 100vh;

    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;

        aside{
            width: 15vw;
            border: 1px solid black;
            min-height: 100vh;
        }

        main{
            width: 85vw;
            min-height: 100vh;
        }
    }


}

</style>