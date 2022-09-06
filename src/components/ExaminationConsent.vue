<template>
    <v-app light fluid>
        <v-container fluid class="ma-15 pa-15">
            <v-card class="mx-auto pa-5" max-width="800">
                <v-card-text>
                    <div>Badanie</div>
                    <p class="text-h4 text--primary">
                        Ocena atrakcyjności strony internetowej
                    </p>
                    <p>Autor: Bożena Prońska</p>
                    <div class="text--primary">
                        <p>
                            Szanowna Pani, Szanowny Panie!
                        </p>

                        <p>
                            Bardzo dziękuje za udział w badaniu i uprzejmie proszę o zapoznanie się z poniższym tekstem.</p>
                        <p>
                            Biorą Państwo udział w badaniu mającym na celu zrozumienie procesów zachodzących podczas percypowania
                            strony internetowej.
                            Badanie posiada dwie części: eksperymentalną oraz ankietę.
                            Zanim zaczniemy, chciałabym Panią/Pana zapewnić, że
                            odpowiedzi, których Pani/Pan udzieli są całkowicie anonimowe i nie będą powiązane z
                            konkretną osobą.
                        </p>
                        <p>
                            Jeżeli wyrażają Państwo na udział w badaniu należy kliknąć w czarny guzik ze strzałką.
                            Wtedy zostaną Państwo przekierowani na właściwe badanie.
                        </p>
                        <p>
                            W razie jakichkolwiek pytań prosiłabym o kontakt mailowy: bozpro@st.amu.edu.pl
                        </p>


                    </div>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{ path: '/welcomeComponent' }">
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
import {
    mdiArrowRight,

} from "@mdi/js";

export default {
    name: "ExaminationConsent",
    data: function () {
        return {
            iconArrowRight: mdiArrowRight
        }
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
        this.calculateHeight();
        window.scrollTo(0, 0);//reload page to position 0,0

    }
}

</script>

<style>

* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}


</style>
