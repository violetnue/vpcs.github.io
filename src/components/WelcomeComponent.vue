<template>
    <v-app light fluid>
        <v-container fluid class="ma-15 pa-15">
            <v-card class="mx-auto pa-5" max-width="800">
                <v-card-text>
                    <div>Badanie</div>
                    <p class="text-h4 text--primary">
                        Ocena atrakcyjności strony internetowej
                    </p>
                    <p>Podstawowe informacje</p>
                    <div class="text--primary">
<!--                        <p>Szanowni Państwo,</p>-->

                        <p>
                            Zostanie przedstawiona Państwu seria stron internetowych, które prosiłabym dokładnie się
                            przyjrzeć.
                            Następnie na samym dole strony internetowej - w prawym dolnym rogu będzie znajdować się
                            czarna strzałka (taka jak poniżej), która przekieruje Państwa na kolejną stroną
                            internetową.
                            Prosiłabym o przejrzenie każdej ze stron bardzo dokładnie, aż nie pojawi się krótka ankieta
                            z pytaniami.
                        <p> Po wciśnięciu czarnego guzika ze strzałką będą Państwo przekierowani do badania.</p>

                    </div>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{ path: '/option1' }">
                        <v-btn color="black" fab dark big absolute bottom right class="mb-5">
                            <v-icon> {{ iconArrowRight }}
                            </v-icon>
                        </v-btn>
                    </router-link>
                </v-card-actions>

            </v-card>

        </v-container>

    </v-app>
</template>

<script>

import {mdiArrowRight} from "@mdi/js";

export default {


    name: "WelcomeComponent",
    data: function () {
        return {
            iconArrowRight: mdiArrowRight
        };
    },
    methods: {},

    computed: {
        imgHeight: function () {
            var offset = 320;
            console.log("new image height is " + (this.pageHeight - offset));
            return this.pageHeight - offset;
        }
    },

    mounted: function () {
        window.scrollTo(0, 0);//reload page to position 0,0
        this.calculateHeight();
    }
};
</script>

<style lang="scss" scoped>
$base-color: #7066d6;
$second-color: #d4abca;

* {
    font-family: 'Poppins', sans-serif;

}

.toolbar_title {
    color: white;
    font-weight: bold;
    text-shadow: 3px 2px $second-color;
    font-size: 60px;
}

.main-h1 {
    text-shadow: 3px 2px $second-color;
}

.text-color {
    color: $base-color;
}

.v-footer {
    background-color: rgba(255, 255, 255, 0.25);
    opacity: 0.3
}


.color_option_1 {
    background-color: #f9ebe5;
}

.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}

</style>
