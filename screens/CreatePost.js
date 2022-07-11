import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native-web";


export default class CreatePost extends Component {
    render() {
        if(this.state.fontsLoaded){
            return (

                <View style={styles.container}>
                <SafeAreaView style={droidSafeArea}/>
                <View style={appTitle}>
                <View style={styles.appIcon}>
                    <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                    ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>

                    <Text style={styles.appTitleText}>New Post</Text>
                </View>
                
                </View>
                <View style={styles.fieldContainer}>

                <ScrollView>

                    <Image 
                    source={preview_images[this.state.previewImage]}
                    style={styles.previewImage}
                    
                    ></Image>
                
                <View style={height:
                RFValue(this.state.dropdownHeight)}}>  
                    
                <DropDownPicker

                    items={[
                        {label: "Image 1", value: "image_1"},
                        {label: "Image 2", value: "image_2"},
                        {label: "Image 3", value: "image_3"},
                        {label: "Image 4", value: "image_4"},
                        {label: "Image 5", value: "image_5"},
                        {label: "Image 6", value: "image_6"},
                        {label: "Image 7", value: "image_7"}
                    ]}
                    defaultValue={this.state.previewImage}
                    containerStyle={{
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 10
                    }}
                    onOpen={() =>{
                        this.setState({ dropdownHeight:170});

                    }}
                    onClose={()=> {
                        this.setState({ dropdownHeight:40});

                    }}
                    style={{backgroundColor: "transparent"}}
                    itemStyle={{
                        justifyContent: "flex-start"
                    }}
                    dropDownStyle={{ backgroundColor: "#2a2a2a"
                    labelStyle={{
                        color:"white"
                    }}
                    onChangeItem={item =>
                    this.setState({
                        previewImage: item.value
                    })
                    }
                />
                    </View>
                    <TextInput
                         style={styles.inputFont}
                         onChangeText={caption => this.setState({caption
                        
                        placeholder=("Caption")
                        placeholderTextColor="white"
                        })}
                        />
                        </ScrollView>

                 </View>
                 <View style={{flex :0.08}}/>
                </View>
            
        
            }
        }
    }
}
