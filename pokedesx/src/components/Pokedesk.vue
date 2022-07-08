<template>
    <div class="row position-absolute" style="max-width:
                        inherit;">
        <div class="col-12">
            <img src="../assets/pokedex_en_blanco.png" id="pokedesk_image">
        </div>
    </div>
    <div class="row position-relative">
        <div class="col-6">
            <div class="row" id="poke_content_left">
                <div class="col-12 d-flex justify-content-center
                                    align-items-center" id="div_poke_image">
                    <div class="row">
                        <div class="col-12">
                            <img src="../assets/pokeball.png" class="img-fluid" id="poke_image">
                            <p class="text-center
                                                text-capitalize" id="poke_name"></p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark box_shadow_left" type="button" id="btn_poke_buscar"
                        tabindex="2" @click="$store.commit('pokeAPI')">Buscar</button>
                </div>
                <div class="col-12" id="div_input_poke_name">
                    <div class="form-group mb-0">
                        <input name="input_poke_name" id="input_poke_name" class="form-control bg_verde" tabindex="1"
                            autofocus
                            v-on:keyup="$store.commit('pokeAPI')">
                        <label for="input_poke_name" class="text-white pb-0"><small>Escribe
                                el
                                nombre o él, id del Pokémon</small></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="row" id="poke_content_right">
                <div class="col-12 text_pokedesx" id="div_caracteristicas">
                    <p id="input_poke_tipo" class="text-capitalize"></p>
                    <p id="input_poke_debilidad" class="text-capitalize"></p>
                    <div id="div_poke_stats"></div>
                    <p id="input_poke_moves" class="text-capitalize"></p>
                </div>
                <div class="col-12 mt-auto" id="div_altura_peso">
                    <div class="row">
                        <div class="col-6">
                            <input type="text" name="input_poke_altura" id="input_poke_altura" class="form-control
                                                form-control-sm" tabindex="-1">
                        </div>
                        <div class="col-6">
                            <input type="text" name="input_poke_peso" id="input_poke_peso" class="form-control
                                                form-control-sm" tabindex="-1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

