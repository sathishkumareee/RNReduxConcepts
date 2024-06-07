import React from 'react'
import { View } from 'react-native'
import Addtask from './src/components/addtask'
import TaskLists from './src/components/tasklists'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

const App = () => {
  return (
    <Provider store={store} >
      
      <Addtask navigation={{}}/>
      <TaskLists/>
    
    </Provider>
  )
}

export default App
