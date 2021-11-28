import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }

    getCameraPermissions=async()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status==='granted',
            buttonState:'clicked',
            scanned:false
        })


    }

    handleBarCodeScanner=async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal'
        })

    }

    render(){
        const hasCameraPermissions=this.state.hasCameraPermissions;
        const scanned=this.state.scanned;
        const buttonState=this.state.buttonState;

        if(buttonState==='clicked' && hasCameraPermissions){
            return(
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />
            )

        }else if(buttonState==='normal'){
            return(
                <View style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center' }}>
                    <Image
                    source={require("../assets/BarcodeScanner.jpg")}
                    style={{width:200 , height:200, marginRight:30}}
                    />
                    <Text style={{fontSize:30}}>Bar Code Scanner</Text>
                    <Text style={styles.displayText}>{
                        hasCameraPermissions===true ? this.state.scannedData : "Request Camera Permissions"
                    }</Text>
                    <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={this.getCameraPermissions}
                    >
                        <Text style={styles.textDisplay}>Scan a QR Code</Text>
                    </TouchableOpacity>
                </View>
            )

        }
    }
}

const styles = StyleSheet.create({
    textDisplay:{
        fontWeight:'bold',
        color:'black',
        marginTop:10,
        fontSize:17

    },

    displayText:{ 
        fontSize: 15, 
        textDecorationLine: 'underline' },

    buttonStyle:{
        backgroundColor:'#148BE7',
       marginTop:20,
        alignItems:'center',
        width:150,
        height:50,
        

    }

})
   
    
