<template>
    <v-app light fluid style="background-color: #f6e6ec">
        <v-container fluid>
            <v-toolbar rounded elevation="0" style="background-color: #f6e6ec;margin-bottom: 2em">
                <v-spacer style="margin-right:12vw !important"></v-spacer>
                <v-toolbar-title class="toolbar_title ml-5" v-text="title"
                                 style=""></v-toolbar-title>
                <p class="toolbar_title" style="text-shadow: 3px 2px #d4abca; font-size: 30px">®</p>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark outlined color="#ca89ba">Open jobs</v-btn>
                    <v-btn dark outlined color="#ca89ba">Sign In</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-content>
                <section>

                    <router-link :to="{ path: '/option2' }">
                        <v-btn color="black" fab dark big absolute bottom right class="mb-5">
                            <v-icon> {{ iconArrowRight }}
                            </v-icon>
                        </v-btn>
                    </router-link>

                    <v-parallax :src="imageLink.sub_main" height="600" style="padding: 0 0px 0 0px" >
                        <v-layout column align-center justify-center class="white--text"
                                  style=" background: rgba(255,255,255,0.1); backdrop-filter:blur(10px); -webkit-backdrop-filter: blur(10px);width:100%">
                            <h1 class="main-h1 white--text mb-2 display-1 text-xs-center"
                                style=" ">
                                A WEBSITE FOR AWAKENING YOUR CREATIVITY</h1>
                            <p class="text-color subheading text-xs-center">Unleash your creativity without limitations
                            </p>
                            <v-btn class="orange darken-1 mt-5" dark large>
                                Get Started
                            </v-btn>
                        </v-layout>
                    </v-parallax>
                </section>

                <section>
                    <v-layout column wrap class="my-5" align-center>
                        <v-flex xs12>
                            <v-container grid-list-xl>
                                <v-layout row wrap align-center>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-title primary-title class="layout justify-start ml-1">
                                                <v-icon class="mr-5" color="#afa4a0">{{ svgPath2 }}</v-icon>
                                                <div class="headline text-xs-center">Reach the world</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
                                                sem lobortis, dapibus erat ut, ultricies libero. Etiam laoreet blandit
                                                urna, eget suscipit quam pulvinar vel. Proin vitae venenatis lorem.
                                                Donec placerat laoreet viverra. Donec commodo dolor vitae neque
                                                sollicitudin, non hendrerit est condimentum. Integer ac mattis enim,
                                                eget posuere ex.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-title primary-title class="layout justify-start ml-1">
                                                <v-icon class="mr-5" color="#afa4a0">{{ svgPath }}</v-icon>
                                                <div class="headline text-xs-center">Fast feedback</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
                                                sem lobortis, dapibus erat ut, ultricies libero. Etiam laoreet blandit
                                                urna, eget suscipit quam pulvinar vel. Proin vitae venenatis lorem.
                                                Donec placerat laoreet viverra. Donec commodo dolor vitae neque
                                                sollicitudin, non hendrerit est condimentum. Integer ac mattis enim,
                                                eget posuere ex.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-title primary-title class="layout justify-start ml-1">
                                                <v-icon class="mr-5" color="#afa4a0">{{ svgPath3 }}</v-icon>
                                                <div class="headline text-xs-center">Create new connections</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
                                                sem lobortis, dapibus erat ut, ultricies libero. Etiam laoreet blandit
                                                urna, eget suscipit quam pulvinar vel. Proin vitae venenatis lorem.
                                                Donec placerat laoreet viverra. Donec commodo dolor vitae neque
                                                sollicitudin, non hendrerit est condimentum. Integer ac mattis enim,
                                                eget posuere ex.
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </section>

                <section>
                    <v-parallax :src="imageLink.main" height="380">
                        <v-layout column align-center justify-center
                                  style="background: rgba(255,255,255,0.1); backdrop-filter:blur(10px); -webkit-backdrop-filter: blur(10px)">
                            <div class="headline white--text mb-3 text-xs-center"><b
                                style="color: #FB8C00">MONOLUQUE</b> is a website that allows you to achieve your goals
                            </div>
                            <em>you don't have to be known to be among the best on the main page, your work
                                counts! </em>
                            <v-btn class="orange darken-1 mt-5" dark large>
                                Get more info
                            </v-btn>
                        </v-layout>
                    </v-parallax>
                </section>

                <section>
                    <v-container grid-list-md>
                        <v-layout row wrap>
                            <v-flex xs12 text-xs-center class="mt-5">
                               <div class="headline text-center">Get ready. Get amazed. Stay tuned!</div>
                                <p class="mt-3 text-center" style="color:gray">We are lunching the beta in a few time. If you want
                                    to be one of the first
                                    MONOLUQUE
                                    users we will email you as soon as we're ready. In the beginning only few people
                                    will
                                    test before the launch. Let us know how MONOLUQUE will help you!
                                </p>
                            </v-flex>
                            <v-flex xs8 offset-xs2>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="v-card-text">
                                        <v-flex xs12 v-if="!subscribed">
                                            <v-text-field box label="Email address" :rules="emailRules" v-model="email"
                                                          hint="Enter your email!" persistent-hint></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 v-if="!subscribed">
                                            <v-text-field box multi-line label="Bio and curiosities"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                                            <v-btn class="mb-5" color="#f6e5db" large @click="subscribe">Get in
                                                touch
                                            </v-btn>
                                        </v-flex>
                                        <v-flex xs12 class="text-xs-center" v-if="subscribed">
                                            <v-btn class="green lighten-2 mb-5" dark large>Welcome on board!</v-btn>
                                        </v-flex>
                                    </v-card-text>

                                </v-card>

                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

                <section>
                    <v-parallax :src="imageLink.social_cover" height="380">
                        <v-layout justify-space-around align-center
                                  style="background: rgba(255,255,255,0.1); backdrop-filter:blur(10px); -webkit-backdrop-filter: blur(10px)">
                            <v-icon x-large dark color="orange darken-1">{{ svgPath4 }}</v-icon>
                            <v-icon x-large dark color="orange darken-1">{{ svgPath5 }}</v-icon>
                            <v-icon x-large dark color="orange darken-1">{{ svgPath6 }}</v-icon>
                            <v-icon x-large dark color="orange darken-1">{{ svgPath7 }}</v-icon>
                        </v-layout>
                    </v-parallax>
                </section>

                <section>
                    <v-container grid-list-xl>
                        <v-layout row wrap justify-center class="my-5">
                            <v-flex xs12 sm4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-start">
                                        <v-icon class="ml-2 mr-1" color="#afa4a0">{{ svgPath1 }}</v-icon>
                                        <div class="headline">
                                            Info
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        We are not a company like the others. Imagine us as the boys from the Silicon
                                        Valley series, thanks to which your dreams will come true!
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm4 offset-sm1>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-start">
                                        <v-icon class="ml-2 mr-1" color="#afa4a0">{{ svgPath3 }}</v-icon>
                                        <div class="headline">We are hiring</div>
                                    </v-card-title>
                                    <v-card-text>
                                        If you are a creative person and see yourself as our work buddy, let us know!
                                        Complete the email form by
                                        writing your skills and interests.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>
                <v-footer class="py-5">
                    <v-layout row wrap align-center>
                        <v-flex xs12 class="text-xs-center">
                            <div class="black--text ml-3">
                                This website has been created for the purposes of the VPCS research.
                            </div>
                        </v-flex>
                    </v-layout>
                </v-footer>

            </v-content>
        </v-container>

    </v-app>
</template>

<script>
import {
    mdiArrowRight,
    mdiFacebook,
    mdiGlobeModel,
    mdiInformation,
    mdiInstagram,
    mdiReddit,
    mdiTagFaces, mdiText,
    mdiTwitter
} from '@mdi/js';

export default {


    name: "Option1",
    data: function () {
        return {
            svgPath: mdiText,
            svgPath1: mdiInformation,
            svgPath2: mdiGlobeModel,
            svgPath3: mdiTagFaces,
            svgPath4: mdiFacebook,
            svgPath5: mdiTwitter,
            svgPath6: mdiReddit,
            svgPath7: mdiInstagram,
            iconArrowRight: mdiArrowRight,
            joke: {
                avatar: 'sally_3d_image.png'
            },
            title: "MONOLUQUE",
            imageLink: {
                main:
                    "https://firebasestorage.googleapis.com/v0/b/vpcs-20268.appspot.com/o/Saly-2.png?alt=media&token=20728815-dbff-45a1-b8e0-2fd6a4ae9402",
                sub_main:
                    "https://firebasestorage.googleapis.com/v0/b/vpcs-20268.appspot.com/o/Saly-19.png?alt=media&token=1e33507a-9be3-4b77-a031-bdecb8b94d2e",
                logo:
                    "https://firebasestorage.googleapis.com/v0/b/MONOLUQUEvue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
                social_cover:
                    "https://firebasestorage.googleapis.com/v0/b/vpcs-20268.appspot.com/o/Saly-2.png?alt=media&token=20728815-dbff-45a1-b8e0-2fd6a4ae9402"
            },
            email: "",
            emailRules: [
                v => {
                    return !!v || "E-mail is required";
                },
                v =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "E-mail must be valid"
            ],
            subscribed: false
        };
    },
    methods: {
        subscribe: function () {
            this.subscribed = !this.subscribed;
        }
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
$base-color: #FFB300;
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
