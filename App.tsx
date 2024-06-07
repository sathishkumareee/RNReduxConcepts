import React from 'react'
import { View } from 'react-native'
import Addtask from './src/components/addtask'
import TaskLists from './src/components/tasklists'

const App = () => {
  return (
    <View>
      <Addtask navigation={{}}/>
      <TaskLists/>
    </View>
  )
}

export default App
