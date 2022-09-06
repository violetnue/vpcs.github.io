import Vue from 'vue'
import Router from 'vue-router'
import Questionnaire from './components/Questionnaire.vue'
import WelcomeComponent from './components/WelcomeComponent.vue'
import ExaminationConsent from './components/ExaminationConsent.vue'
import Option1 from "./components/Option1";
import Option2 from "./components/Option2";
import Option3 from "./components/Option3";
import Option4 from "./components/Option4";
import Option5 from "./components/Option5";
import Option6 from "./components/Option6";
import Farewell from "./components/Farewell";
import RedirectionSurvey from "./components/RedirectionSurvey";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'examinationConsent',
            component: ExaminationConsent
        },
        {
            path: '/welcomeComponent',
            name: 'welcomeComponent',
            component: WelcomeComponent
        },
        {
            path: '/questionnaire',
            name: 'questionnaire',
            component: Questionnaire
        },
        {
            path: '/option1',
            name: 'Option1',
            component: Option1
        },
        {
            path: '/option2',
            name: 'Option2',
            component: Option2
        },
        {
            path: '/option3',
            name: 'Option3',
            component: Option3
        },
        {
            path: '/option4',
            name: 'Option4',
            component: Option4
        },
        {
            path: '/option5',
            name: 'Option5',
            component: Option5
        },
        {
            path: '/option6',
            name: 'Option6',
            component: Option6
        },
        {
            path: '/farewell',
            name: 'Farewell',
            component: Farewell
        },
        {
            path: '/redirectionSurvey',
            name: 'RedirectionSurvey',
            component: RedirectionSurvey
        }
    ]
})
