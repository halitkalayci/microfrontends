import { createApp } from "vue";

import "./index.scss";

import Counter from "./Counter.vue";


export default function (el) {
    createApp(Counter).mount(el);
}
