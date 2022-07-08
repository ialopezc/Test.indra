<template>
    <div class="row">
        <div class="container text-center">
            <img src="../assets/logo_pokemon_pokedex.png" class="img-fluid">
        </div>
    </div>
    <div class="row">
        <div class="container">
            <Pokedesk />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Pokedesk from '@/components/Pokedesk.vue'

export default {
    name: 'HomeView',
    components: {
        Pokedesk
    }
}
</script>