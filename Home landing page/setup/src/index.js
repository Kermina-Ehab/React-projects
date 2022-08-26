import React from 'react'
import reactDom from "react-dom"
import './index.css'
import {App} from "./App"
import {Approvider}from './context'
reactDom.render(
  <React.StrictMode>
<Approvider>
    <App/>
    </Approvider>
  </React.StrictMode>
  ,document.querySelector('#root'))
