'use strict'

import Vue from 'vue'
// Vue.component('my-component', {
//   template: '<span>{{comMessage}}</span>',
//   data() {
//     return {
//       comMessage: 'hello component!!!'
//     }
//   },
//   mounted() {
//     console.log('component mounted')
//   }
// })

var componentA = {
  // template: '<div><span>{{comMessage}}</span><slot></slot>default</div>',
  render(createElement) {
    return createElement('div', this.$slots.default)
  },
  data() {
    return {
      comMessage: 'hel000nt!!!'
    }
  },
  mounted() {
    console.log('component mounted')
  }
}

const app = new Vue({
  components: {componentA},
  data: {
    message: '00!',
    obj: {name: 'sss'},
    firstName: '',
    lastName: '',
    rawHtml: '<img src="show.js" onerror="alert(document.cookie)">'
  },
  methods: {
    print() {
      console.log('hello ,tutu')
    }
  },
  // watch: {
  //   message(newvalue, oldvalue) {
  //     alert('changed' + newvalue + oldvalue)
  //   }
  // },
  computed: {
    reverse() {
      return this.message.split('').reverse().join('')
    },
    fullName: {
      get() {
        return this.firstName + this.lastName
      },
      set(newValue) {
        const tmp = newValue.split(' ')
        this.firstName = tmp[0]
        this.lastName = tmp[1]
      }
    }
  }
})
// app.$mount('#app')

export default app
