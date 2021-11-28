import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'

export default class WriteStory extends React.Component{
  constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory=()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
          
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    }
  
    render(){
        return(
       <View>
            <Header    
                backgroundColor={'#FFC0CB'}
                centerComponent={{
                    text:'Story Hub',
                    style:{color:'black', fontSize:40}
                }}
            />

            
                
                    <TextInput
                   placeholder={'Story Title'}
                  style={styles.inputBox}
                  onChangeText={text => {
                    this.setState({ title: text });
                  }}
                  value={this.state.title}
            
                    />

                <TextInput
                   placeholder={'Author'}
                  style={styles.inputBox2}
                  onChangeText={text => {
                    this.setState({ author: text });
                  }}
                  value={this.state.author}
            
                    />

            <TextInput
                   placeholder={'Write your story'}
                  style={styles.inputBox3}
                  onChangeText={text => {
                    this.setState({ storyText: text});
                  }}
                  value={this.state.storyText}
            
                    />

            <TouchableOpacity
            style={{
                backgroundColor:'#FFC0CB',
                marginTop:15,
                height:50,
                width:120,
                alignItems:'center',
                alignSelf:'center'
            }}
            
            >
                <Text
                style={{
                    color:'black',
                    marginTop:10,
                    fontWeight:'bold',
                    fontSize:20
                }}
                >Submit</Text>
            </TouchableOpacity>
                </View>
            
            
        );
      
      
    }
  
    
}

const styles=StyleSheet.create({
    inputBox:{
        
            marginTop: 50,
            width: '90%',
            alignSelf: 'center',
            height: 40,
            borderWidth: 4,
            padding:10,
           
    },

    inputBox2:{
        
        marginTop: 25,
        width: '90%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 4,
        padding:10,
       
},

inputBox3:{
        
    marginTop: 25,
    width: '90%',
    alignSelf: 'center',
    height: '43%',
    borderWidth: 4,
    padding:10,
   
}
})