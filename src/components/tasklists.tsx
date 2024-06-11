import React, { useState } from 'react'; 
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 
import UpdateTask from './updatetask';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store/store';
import { removetask, setselectedtask } from '../slices/taskslice';

const TaskLists = () => { 
    const dispatch=useDispatch()
    const { tasklist } = useSelector((state: IRootState) => state.tasks);
    const [modalVisibility, setModalVisibility] = useState(false);

    const handleEdit = (task:any) => {
        console.log(`edit ${task}`);
        setModalVisibility(true);
        dispatch(setselectedtask(task))
    }

    const handleDelete = (task:any) => {
        console.log('delete');
        dispatch(removetask(task))
    }

    const handleClose = () => {
        console.log('close');
        setModalVisibility(false);
    }

    const renderItem = ({ item, index }: { item: any; index: number }) => (
        <DataTable.Row key={index}> 
            <DataTable.Cell>{item.task}</DataTable.Cell> 
            <DataTable.Cell>{item.taskDesc}</DataTable.Cell> 
            <DataTable.Cell>
                <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={()=>handleEdit(item)} style={{ width: 20, height: 20 }}>
                        <Image 
                            source={require('../../assets/icons/edit.png')} 
                            style={{ width: '100%', height: '100%' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleDelete(item)} style={{ width: 20, height: 20 }}>
                        <Image 
                            source={require('../../assets/icons/delete.png')} 
                            style={{ width: '100%', height: '100%' }}
                        />
                    </TouchableOpacity>
                </View>
            </DataTable.Cell> 
        </DataTable.Row> 
    );

    return ( 
        <View>
            <DataTable style={styles.container}> 
                <DataTable.Header style={styles.tableHeader}> 
                    <DataTable.Title>Title</DataTable.Title> 
                    <DataTable.Title>Description</DataTable.Title> 
                    <DataTable.Title>Action</DataTable.Title> 
                </DataTable.Header> 
                {tasklist.length>0 ?
                <FlatList
                data={tasklist}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
                :<View style={{alignSelf:'center',marginTop:'5%'}}>
                    <Text>NO DATA</Text>
                </View>}
            </DataTable> 
            {modalVisibility ? <UpdateTask onClose={handleClose} /> : null}
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
