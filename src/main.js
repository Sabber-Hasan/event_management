import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { POSITION } from "vue-toastification";
import 'vue-toastification/dist/index.css';

const app = createApp(App)
const options = {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
};

app.use(router)
app.use(store)
app.use(Toast)

app.mount('#app')

// const options = {
//     // You can set your default options here
// };

// app.use(Toast, options);