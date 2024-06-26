import React, { FC, useEffect, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store/store';
import { updatetask } from '../slices/taskslice';
// import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo
interface close{
    onClose:any
}
const UpdateTask:FC<close> = ({onClose}) => { // Pass onClose as a prop to handle modal close
    const dispatch=useDispatch()
    const [task, setTask] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [id, setId] = useState(0);
    const {selectedtask} = useSelector((state:IRootState)=>state.tasks)

    // useEffect(()=>{
    //     setTask(selectedtask.task)
    //     setTaskDesc(selectedtask.taskDesc)
    //     setId(selectedtask.id)

    // },[selectedtask])
    useEffect(() => {
        if (selectedtask && 'task' in selectedtask && 'taskDesc' in selectedtask && 'id' in selectedtask) {
            setTask(selectedtask.task);
            setTaskDesc(selectedtask.taskDesc);
            setId(selectedtask.id);
        }
    }, [selectedtask]);

    const handleUpdate=()=>{
        dispatch(updatetask({task,taskDesc,id}))
        onClose()
    }

    return (
        <Modal animationType="slide" transparent>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/* Close icon */}
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Image style={{width:'100%',height:'100%'}} source={require('../../assets/icons/close.png')}/>
                    </TouchableOpacity>
                    
                    {/* Input fields */}
                    <TextInput
                        style={styles.input}
                        placeholder="Task Name"
                        value={task}
                        onChangeText={setTask}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Task Description"
                        value={taskDesc}
                        onChangeText={setTaskDesc}
                    />
                    <TouchableOpacity onPress={handleUpdate} style={{width:'50%',backgroundColor:'#9B29B1',borderRadius:8,alignSelf:'center',height:30,justifyContent:'center',margin:'4%'}} >
                        <Text style={{textAlign:'center',color:'#fff',fontSize:18}} >Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '90%',
    },
    closeButton: {
        alignSelf: 'flex-end',
        width:20,
        height:20,
    },
    input: {
        backgroundColor: '#F0E4F2',
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        paddingHorizontal: 10,
    },
});

export default UpdateTask;
