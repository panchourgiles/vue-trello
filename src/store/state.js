export default {
  boards: {
    'a': { id: 'a', name: 'My Pet-Project' },
    'b': { id: 'b', name: 'Home Tasks' }
  },

  lists: {
    'aa': { id: 'aa', board: 'a', name: 'To Do' },
    'bb': { id: 'bb', board: 'b', name: 'To Buy' }
  },

  tasks: {
    'aa0': { id: 'aa0', list: 'aa', title: 'Learn Vue', completed: true },
    'aa1': { id: 'aa1', list: 'aa', title: 'Learn Vue-Router', completed: true },
    'aa2': { id: 'aa2', list: 'aa', title: 'Learn Vuex', completed: false },
    'aa3': { id: 'aa3', list: 'aa', title: 'Learn Nuxt', completed: false },
    'bb0': { id: 'bb0', list: 'bb', title: 'Milk', completed: false }
  }
}
