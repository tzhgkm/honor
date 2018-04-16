'use strict'
const app = new Vue({
  el: '#app',
  data: {
    message: 'hello world!',
    obj: {},
    firstName: '',
    lastName: '',
    rawHtml: '<img src="show.js" onerror="alert(document.cookie)">'
  },
  methods: {
    print() {
      console.log('hello ,tutu')
    }
  },
  watch: {
    message(newvalue, oldvalue) {
      alert('changed' + newvalue + oldvalue)
    }
  },
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
const name = 'tutu'

