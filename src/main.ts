import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';

import ElementPlus from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

// import "~/styles/index.scss";
import 'uno.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(ElementPlus);

app.mount("#app");
