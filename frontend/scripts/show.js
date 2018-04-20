'use strict'
const app = new Vue({
  data: {
    message: 'hello world!',
    obj: {name: 'sss'},
    firstName: '',
    lastName: '',
    rawHtml: '<img src="show.js" onerror="alert(document.cookie)">'
  },
  beforeCreate() {
    console.log('beforeCreated' + this.message)
  },
  created() {
    console.log('created'  + this.message)
  },
  beforeMount() {
    console.log('beforeMounted' + this.message)
  },
  mounted() {
    const self = this
    this.$nextTick(function () {
      console.log('xxxx')
      setTimeout(function () {
        self.obj.name = 'hello'
      }, 1000)
    })
  },
  updated() {
    console.log('updated' + this.message)
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
app.$mount('#app')

