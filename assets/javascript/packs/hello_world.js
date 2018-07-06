import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './hello_world/main.jsx'

window.onload = function() {
  ReactDOM.render(<HelloWorld />, document.getElementById('root'))
}
