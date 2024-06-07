import React, { useState } from 'react'; 
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 
import UpdateTask from './updatetask';

const TaskLists = () => { 
    const [modalVisibility,setModalVisibility]=useState(false)
    const handleEdit=()=>{
        console.log('edit')
        setModalVisibility(true)
    }

    const handleDelete=()=>{
        console.log('delete')
    }

    const handleClose=()=>{
        console.log('lkjhg')
        setModalVisibility(false)
    }
return ( 
	<View>
        <DataTable style={styles.container}> 
	<DataTable.Header style={styles.tableHeader}> 
		<DataTable.Title>Title</DataTable.Title> 
		<DataTable.Title>Description</DataTable.Title> 
		<DataTable.Title>Action</DataTable.Title> 
	</DataTable.Header> 
	<DataTable.Row> 
		<DataTable.Cell>Radhika</DataTable.Cell> 
		<DataTable.Cell>Dosa</DataTable.Cell> 
		<DataTable.Cell>
            <View style={{flexDirection:'row',width:'70%',justifyContent:'space-between'}} >
                <TouchableOpacity onPress={handleEdit}  style={{width:20,height:20,}} >
                <Image 
                    source={require('../../assets/icons/edit.png')} 
                    style={{width:'100%',height:'100%'}}
                />
                </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}  style={{width:20,height:20}} >
                <Image 
                    source={require('../../assets/icons/delete.png')} 
                    style={{width:'100%',height:'100%'}}
                />
            </TouchableOpacity>
            </View>
        </DataTable.Cell> 
	</DataTable.Row> 

	
	</DataTable> 
    {
        modalVisibility?
        <UpdateTask onClose={handleClose}/>:null
    }
    </View>
); 
}; 

export default TaskLists; 

const styles = StyleSheet.create({ 
container: { 
	padding: 15, 
}, 
tableHeader: { 
	backgroundColor: '#DCDCDC', 
}, 
});
