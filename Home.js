import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, SectionList, StatusBar, Button, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import {datasource} from "./Data";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        fontWeight: 'bold',

    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        paddingTop: 50,
    },
    parent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        padding: 20,
        backgroundColor: "#EBE8FC"
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    icon: {
        marginRight: 10,
    }

});




const Home = ({navigation}) => {

    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={[ styles.parent]} onPress={()=> {
                navigation.navigate("Edit", {index:index, type:section.title, key:item.key, image:item.image});
            }}>
                <Text style={styles.textStyle}>{item.key}</Text>
                <Image source={{uri: item.image}} style={{ width: 260, height: 360 }} />
            </TouchableOpacity>

        );
    };

    return (
        <View style={{marginBottom: 150}}>
            <View style={styles.button}>
                <Button title="Add Pokemon" onPress={()=>{navigation.navigate("Add")}}/>
            </View>
            <StatusBar hidden={true} />
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, bgcolor, icon}})=>(
                             <View style={[styles.title,{backgroundColor: bgcolor}]}>
                                 <Icon name = {icon} size={20} color="black" style={styles.icon}/>
                                 <Text style={[styles.headerText]}>{title}</Text>
                             </View>
                         )}/>
        </View>
    )
}
export default Home;
