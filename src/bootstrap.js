import {createApp} from 'vue'
import Dashboard from './components/Dashboard'

console.info('>>> Dashboard works!')

// Mount func to start up the application
const mount = (el) => {
    const app = createApp(Dashboard)
    app.mount(el)
}

// If we are in dev and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
    // root element to attach application
    const devRoot = document.querySelector('#_dashboard-dev-root')

    // If present calls mount functions
    devRoot && mount(devRoot)
}

// EXPORTING MOUNT FUNCTION
export {mount}