<template>
    <div class="row">
        <div class="container text-center">
            <img src="../assets/logo_pokemon_pokedex.png" class="img-fluid">
        </div>
    </div>
    <div class="row">
        <div class="container">
            <Pokedex />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Pokedex from '@/components/Pokedex.vue'

export default {
    name: 'IndexView',
    components: {
        Pokedex
    }
}
</script>