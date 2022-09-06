<template>
    <v-app light fluid>
        <v-container fluid class="ma-15 pa-15">
            <v-card class="mx-auto pa-5" max-width="800">
                <v-card-text>
<!--                    <div>Badanie</div>-->
<!--                    <p class="text-h4 text&#45;&#45;primary">-->
<!--                        Ocena atrakcyjności strony internetowej-->
<!--                    </p>-->
<!--                    <p>Autor: Bożena Prońska</p>-->
<!--                    <div class="text&#45;&#45;primary">-->
<!--                        <p> Szanowni Państwo,</p>-->
<!--                        <p> Dziękuje bardzo za udział w części eksperymentalnej. Na koniec prosiłabym o przejście do ankiety i udzielenie-->
<!--                            odpowiedzi na wszystkie pytania.-->
<!--                        </p>-->
<!--                    </div>     -->

                    <p class="text-h4 text--primary">
                        Dziękuje serdecznie za udział w badaniu!
                    </p>
                    <p>Część eksperymentalna</p>
                    <div class="text--primary">
<!--                        <p> Szanowni Państwo,</p>-->
                        <p> Dziękuje bardzo za udział w części eksperymentalnej. Na koniec prosiłabym o przejście do ankiety i udzielenie
                            odpowiedzi na wszystkie pytania.
                        </p>
                    </div>

                </v-card-text>
                <v-card-actions>
                    <router-link :to="{ path: '/questionnaire' }">
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


    name: "RedirectionSurvey",
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
