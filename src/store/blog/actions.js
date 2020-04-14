import Vue from "vue"

/**
 * Fetch Posts
 *
 * @param state
 * @param commit
 */
export const fetchPosts = ({ state, commit }) => {

  console.log('fetching posts'); //eslint-disable-line

  if (Vue.mocksActive) {
    let mocks = Vue.getMock( 'blog', "posts")
    commit("SET_POSTS", mocks)
  }

  // TODO: fetch API
}
