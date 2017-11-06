export const app = {
  state: {
    sidebar: {
      isCollapse: false
    }
  },
  mutations: {
    change: state => { state.user = 1 },
    TOGGLE_SIDEBAR: state => {
      state.sidebar.isCollapse = !state.sidebar.isCollapse
    }
  },
  getters: {
  }
}

export default app
