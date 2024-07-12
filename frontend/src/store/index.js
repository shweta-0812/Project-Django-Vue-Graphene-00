import { createStore } from 'vuex'
import counter from './modules/counter'
import user from './modules/user'

const store = createStore({
    modules: {
        counter,
        user
    }
})

export default store
