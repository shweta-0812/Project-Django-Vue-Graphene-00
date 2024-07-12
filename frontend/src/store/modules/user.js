export default {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            // Simulate an API call
            setTimeout(() => {
                commit('setUser', user)
            }, 1000)
        }
    },
    getters: {
        isAuthenticated(state) {
            return !!state.user
        }
    }
}
