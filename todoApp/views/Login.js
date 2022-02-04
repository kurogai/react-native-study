import { useFonts } from "expo-font";
import { react } from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

const Login = props =>{
    const [loaded] = useFonts({
        Sora:require("../assets/fonts/Sora-Light.ttf")
    })

    if(!loaded){
        return null;
    }

    return (
        <View>
            <View style={styles.box}>
                <View style={{backgroundColor:"whitesmoke", width:"100%", height:"100%"}}>
                    <View style={styles.boxCentralieItems}>
                        <Text style={login.title}>TO DO</Text>
                        <Text style={textColor.darkBlue}>Remember Everthing</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <View style={{backgroundColor:"rgb(17, 17, 32)", width:"100%", height:"100%"}}>
                    <View style={styles.boxCentralieItems}>
                        <View style={buttonStyle.rework}>
                            <View style={{padding:"1%",margin:"0.5%"}}>
                                <Button color="rgb(1, 0, 37)" title="Sign in with Google"/>
                            </View>
                        </View>
                        <View style={buttonStyle.rework}>
                            <View style={{padding:"1%",margin:"0.5%"}}>
                                <Button color="rgb(1, 0, 37)" title="Sign in with Facebook"/>
                            </View>
                        </View>
                        <View style={buttonStyle.rework}>
                            <View style={{padding:"1%",margin:"0.5%"}}>
                                <Button color="rgb(17, 17, 32)" title="Skip"
                                onPress={()=> props.navigation.navigate("Main") }
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    box:{
        width: "100%",
        height: "50%",
        display: "flex"
    },
    boxCentralieItems : {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    }
});

const login = StyleSheet.create({
    title:{
        fontSize:75,
        fontFamily:"Sora"
    }
});

const textColor = StyleSheet.create({
    whiteSmoke : {
        color : "whitesmoke"
    },
    darkBlue: {
        color:"rgb(1, 0, 37)"
    }
});

const textBox = StyleSheet.create({
    box : {
        width : "85%",
        backgroundColor : "rgb(13, 13, 24)",
        padding: "4%",
        margin : "1%",
        borderRadius: 8,
        display:"flex",
        flexDirection : "row",
    }
});

const imageStyle = StyleSheet.create({
    style : {
        width : 15,
        height : 15
    }
});

const buttonStyle = StyleSheet.create({
    rework:{
        width:"80%",
    }
});