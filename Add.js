import React, {useState} from 'react';
import { Button, Text, View, TextInput} from 'react-native';
import {datasource} from "./Data";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    return (
        <View style={{padding:10}}>
            <View style={{padding:10}}>
                <Text style={{fontWeight: "bold"}}>Name:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)} />
            </View>

            <RNPickerSelect placeholder={{label: "Select type"}} onValueChange={(value) => setType(value)}
                            items={[
                                { label: 'Fire', value: 'Fire' },
                                { label: 'Fairy', value: 'Fairy' },
                                { label: 'Miscellaneous', value: 'Miscellaneous' },
                            ]}
            />
            <Text style={{fontWeight: "bold"}}>Image URL:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(text) => setImage(text)}/>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 10 }}>
                <View style={{ flex: 1, padding: 5 }}>
                    <Button
                        title="SUBMIT"
                        onPress={() => {
                            let item = { key: name, image: image };
                            let indexnum = 1;
                            if (type == "Fire") {
                                indexnum = 0;
                            } else if (type == "Fairy") {
                                indexnum = 1;
                            } else if (type == "Miscellaneous") {
                                indexnum = 2;
                            }
                            datasource[indexnum].data.push(item);
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <Button
                        title="BACK"
                        onPress={() => navigation.navigate("Home")}
                    />
                </View>
            </View>

        </View>
    )
}

export default Add;
