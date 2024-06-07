import React, {FC, useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addtask} from '../slices/taskslice';
import {IRootState} from '../store/store';

interface Addprops {
  navigation: any; // Change the type according to your navigation type
}

const Addtask: FC<Addprops> = ({navigation}) => {
  const dispatch = useDispatch();
  const [taskDetails, setTaskDetails] = useState({
    task: '',
    taskDesc: '',
  });
  const handleclick = () => {
    navigation.navigate('Signup');
  };

  const handleAdd = () => {
    setTaskDetails({
        task:"",
        taskDesc:"",
    })
    dispatch(addtask(taskDetails))
  };
  return (
    <View style={styles.pcontainer}>
      <Text style={styles.container}>Welcome Back to Task Management</Text>
      <Text style={styles.cred}>Enter Your Credential</Text>
      <View style={styles.username}>
        <TextInput
          style={{marginLeft: 8}}
          placeholder="Task Name"
          value={taskDetails.task}
          onChangeText={text => {
            return setTaskDetails(prev => ({
              ...prev,
              task: text,
            }));
          }}
        />
      </View>
      <View style={styles.pssd}>
        <TextInput
          style={{marginLeft: 8}}
          placeholder="Task Description"
          value={taskDetails.taskDesc}
          onChangeText={text => {
            return setTaskDetails(prev => ({
              ...prev,
              taskDesc: text,
            }));
          }}
        />
      </View>
      <TouchableOpacity onPress={handleAdd} style={styles.logincontainer}>
        <Text style={styles.logintxt}>Add Task </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Addtask;

const styles = StyleSheet.create({
  pcontainer: {
    alignContent: 'center',
    marginTop: '15%',
  },
  container: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cred: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#898989',
    marginTop: '2%',
  },
  username: {
    width: '80%',
    backgroundColor: '#F0E4F2',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '10%',
    height: 50,
    justifyContent: 'center',
  },
  pssd: {
    width: '80%',
    backgroundColor: '#F0E4F2',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '3%',
    height: 50,
    justifyContent: 'center',
  },
  logincontainer: {
    width: '75%',
    backgroundColor: '#9B29B1',
    borderRadius: 20,
    marginTop: '5%',
    alignSelf: 'center',
    height: 50,
  },
  logintxt: {
    textAlign: 'center',
    margin: 13,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  frgttxt: {
    alignSelf: 'center',
    marginTop: '10%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#983DA7',
  },
  signuptxtcontainer: {
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '8%',
  },
  accttxt: {
    fontSize: 18,
    color: '#767676',
    fontWeight: '500',
  },
});
