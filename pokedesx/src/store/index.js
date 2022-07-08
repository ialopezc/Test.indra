import { createStore } from 'vuex'

export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
        pokeAPI() {
            let poke_name = document.getElementById("input_poke_name").value;
            fetch('https://pokeapi.co/api/v2/pokemon/' + poke_name)
                .then((response) => {
                    if (response.status != "200") {
                        document.getElementById("poke_image").src = "/assets/pokeball.png";
                        document.getElementById("poke_name").innerText = "";
                        document.getElementById("input_poke_tipo").innerText = "";
                        document.getElementById("input_poke_debilidad").innerText = "";
                        document.getElementById("div_poke_stats").innerHTML = "";
                        document.getElementById("input_poke_moves").innerText = "";
                        document.getElementById("input_poke_altura").value = "";
                        document.getElementById("input_poke_peso").value = "";
                    }
                    else {
                        return response.json();
                    }
                })
                .then((data) => {
                    if (data) {
                        console.info(data);

                        document.getElementById("poke_image").src = data.sprites.front_default;

                        document.getElementById("poke_name").innerText = "#" + data.id + " - " + data.name;

                        let type = "Type: ";
                        $.each(data.types, function (key, value) {
                            type = type + value.type.name + ", ";
                        });
                        document.getElementById("input_poke_tipo").innerText = type;

                        let ability = "Ability: ";
                        $.each(data.abilities, function (key, value) {
                            ability = ability + value.ability.name + ", ";
                        });
                        document.getElementById("input_poke_debilidad").innerText = ability;
                        $("#input_poke_debilidad").text(ability);

                        document.getElementById("div_poke_stats").innerHTML = "";
                        $.each(data.stats, function (key, value) {
                            let html = '<div class="row">' +
                                '<div class="col align-self-center div_stats text-capitalize">' + value.stat.name + '</div>' +
                                '<div class="col align-self-center">' +
                                '<div class="progress">' +
                                '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="' + value.base_stat + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + value.base_stat + '%"></div>' +
                                '</div>' +
                                '</div>' +
                                '</div>';

                            document.getElementById("div_poke_stats").append = html;
                        });

                        let move = "Moves: ";
                        $.each(data.moves, function (key, value) {
                            move = move + value.move.name + ", ";
                        });
                        document.getElementById("input_poke_moves").innerText = move;

                        document.getElementById("input_poke_altura").value = data.height;

                        document.getElementById("input_poke_peso").value = data.weight;
                    }
                });
        }
    },
    actions: {
    },
    modules: {
    }
})
