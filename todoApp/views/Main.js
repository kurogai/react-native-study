import {react, useState} from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity, Image } from "react-native";

const Main = props => {

    const [getInputText,setInputText] = useState();
    const [task,setTask] = useState([]);

    function setInput(text){
        setInputText(text);
    }

    function getText(){
        setTask([...task,getInputText]);
    }

    return (
        <View style={top.appView}>
            <View style={top.container}>
                <View>
                    <Text style={[textColor.whiteSomke,{
                        fontSize:50
                    }]}>To do List</Text>
                    <Text style={[textColor.whiteSomke,{
                        margin:5,
                        fontSize:18,
                        fontStyle:"italic"
                    }]}>Create your task here</Text>
                </View>
                <View style={top.item}>
                    <TextInput placeholder="Go to school"
                    style={{width:"80%"}}
                    onChangeText={setInput}
                    />
                    <TouchableOpacity onPress={getText}>
                        <Text>Create</Text>
                    </TouchableOpacity>                    
                </View>
                <Text>Current Tasklist</Text>
                <ScrollView>
                    {task.map((element)=> 
                        <View style={top.task} key={Math.random().toString()}>
                            <Text style={{color:"whitesmoke"}}>{element}</Text>
                            <View style={{display:"flex", flexDirection:"row"}}>
                                <Text style={[textColor.gray50white,{width:"86%"}]}>Day {(new Date).getDate()},</Text>
                                <Text style={textColor.gray50white}>{(new Date).getHours()}:</Text>
                                <Text style={textColor.gray50white}>{(new Date).getMinutes()}</Text>
                            </View>
                        </View>
                    )}
                </ScrollView>
            </View>
            <View style={bottom.bottom}>
                <TouchableOpacity style={bottom.icon} onPress={()=>{ props.navigation.navigate("Home") }}>
                    <Text style={textColor.whiteSomke}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { Main };

const textColor = StyleSheet.create({
    whiteSomke:{
        color:"whitesmoke"
    },
    gray50white:{
        color:"rgb(170, 170, 170)"
    }
});

const top = StyleSheet.create({
    appView:{
        height:"100%",
        backgroundColor:"rgb(52, 52, 71)"
    },
    container:{
        margin: "10%"
    },
    item:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"whitesmoke",
        margin:"1%",
        padding:"3%",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    task:{
        backgroundColor:"rgb(16, 16, 22)",
        margin:"1%",
        padding:"3%",
        borderRadius:5
    }
});

const bottom = StyleSheet.create({
    bottom:{
        width:"100%",
        position:"absolute",
        bottom:0,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        padding:"2%"
    },
    icon:{
        width:70,
        height:70,
        backgroundColor:"rgb(33, 33, 44)",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10
    }
});