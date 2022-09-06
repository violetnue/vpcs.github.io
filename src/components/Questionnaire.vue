<template>
    <v-app light  fluid>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfxOLFeyg4FCHrbXs04HmTbxiK5pPMY1om7XhrNtAkx89y3dg/viewform?embedded=true" height="3015" >Ładuję…</iframe>
        <v-card-actions>
            <router-link :to="{ path: '/farewell' }">
                <v-btn color="black" fab dark big absolute top right class="mt-10">
                    <v-icon> {{ iconArrowRight }}
                    </v-icon>
                </v-btn>
            </router-link>
        </v-card-actions>

    </v-app>
</template>

<script>


import {mdiArrowRight} from "@mdi/js";

export default {




    name: "Questionnaire",
    data: function () {
        return {
            iconArrowRight: mdiArrowRight
        };
    },
    methods: {
    },

    computed: {
        imgHeight: function () {
            var offset = 320;
            console.log("new image height is " + (this.pageHeight - offset));
            return this.pageHeight - offset;
        }
    },

    mounted: function () {
        window.scrollTo(0,0);//reload page to position 0,0
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
.v-footer{
    background-color: rgba(255, 255, 255, 0.25);
    opacity: 0.3
}



.color_option_1 {
    background-color: #f9ebe5;
}


</style>
