import React, {useState} from 'react';
import { Button, Text, View, TextInput,Alert} from 'react-native';
import {datasource} from "./Data";

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.key);
    const [image, setImage] = useState(route.params.image);

    return(
        <View style={{padding:10}}>
            <View style={{padding:10}}>
                <Text style={{fontWeight: "bold"}}>Name:</Text>
                <TextInput style={{borderWidth: 1}} value={name} onChangeText={(text) => setName(text)} />
            </View>
            <Text style={{fontWeight: "bold"}}>Image URL:</Text>
            <TextInput style={{borderWidth: 1}} value={image} onChangeText={(text) => setImage(text)}/>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 10 }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type == "Fire") {
                                indexnum = 0;
                            } else if (route.params.type == "Fairy") {
                                indexnum = 1;
                            } else if (route.params.type == "Miscellaneous") {
                                indexnum = 2;
                            }


                            datasource[indexnum].data[route.params.index] = {
                                key: name,
                                image: image,
                            }
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="DELETE"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type == "Fire") {
                                indexnum = 0;
                            } else if (route.params.type == "Fairy") {
                                indexnum = 1;
                            } else if (route.params.type == "Miscellaneous") {
                                indexnum = 2;
                            }
                            Alert.alert("Are you sure?",'',
                                [{text: 'Yes', onPress: ()=> {
                                        datasource[indexnum].data.splice(route.params.index, 1);
                                        navigation.navigate("Home");
                                    }},
                                    {text: 'No'}])
                        }}
                    />
                </View>
            </View>
            <Button title="Back" onPress={()=>{navigation.navigate("Home")}}/>
        </View>
    )

}

export default Edit;
