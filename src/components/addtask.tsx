import React ,{FC, useContext,useState}from "react";
import { StyleSheet, Text, TextInput, View ,TouchableOpacity} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { LoginContext } from "./context/logincontext";

interface Addprops {
    navigation: any; // Change the type according to your navigation type
  }
  
  const Addtask: FC<Addprops> = ({ navigation }) => {
    // const {user,setuser}=useContext(LoginContext)
    const [task,setTask]= useState('')
    const [taskDesc,setTaskDesc]=useState('')
    const handleclick = () => {
      navigation.navigate("Signup");

    };

    const handleLogin=()=>{
        console.log(task,taskDesc)
    }
    return(
        <View style={styles.pcontainer} >
            <Text style={styles.container}>Welcome Back to Task Management</Text>
            <Text style={styles.cred}>Enter Your Credential</Text>
            <View style={styles.username} >
            <TextInput 
            style={{marginLeft:8}}
            placeholder="Task Name"
            value={task}
            onChangeText={setTask}
            />
            </View>
            <View style={styles.pssd} >
            <TextInput 
            style={{marginLeft:8}}
            placeholder="Task Description"
            value={taskDesc}
            onChangeText={setTaskDesc}
            />
            </View>
            <TouchableOpacity onPress={handleLogin}  style={styles.logincontainer}>
                <Text style={styles.logintxt}>Add Task </Text>
            </TouchableOpacity>
            
        </View>
    )
}



export default Addtask

const styles = StyleSheet.create({
    pcontainer:{
        alignContent:'center',
        marginTop:'15%'
    },
    container: {
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
    cred: {
        textAlign:'center',
        fontSize:14,
        fontWeight:'bold',
        color:'#898989',
        marginTop:'2%'
    },
    username:{
        width:'80%',
        backgroundColor:'#F0E4F2',    
        borderRadius:10,
        alignSelf:'center',
        marginTop:'10%',
        height:50,
        justifyContent:'center'
    },
    pssd:{
        width:'80%',
        backgroundColor:'#F0E4F2',    
        borderRadius:10,
        alignSelf:'center',
        marginTop:'3%',
        height:50,
        justifyContent:'center'
    },
    logincontainer:{
        width:'75%',
        backgroundColor:'#9B29B1',
        borderRadius:20,
        marginTop:'5%',
        alignSelf:"center",
        height:50
    },
    logintxt:{
        textAlign:'center',
        margin:13,color:'white',
        fontSize:20,fontWeight:'bold'
    },
    frgttxt:{
        alignSelf:'center',
        marginTop:'10%',
        fontSize:18,
        fontWeight:'bold',
        color:'#983DA7'
    },
    signuptxtcontainer:{
        width:'70%',
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'8%'
    },
    accttxt:{
        fontSize:18,
        color:'#767676',
        fontWeight:'500'
    }
    
    
});