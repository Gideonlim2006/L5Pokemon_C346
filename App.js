import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, SectionList, StatusBar, FlatList, Button, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

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


const datasource = [
  {data:[
      {key: 'Fuecoco', image: require("./img/Fuecoco.png")},
      {key: 'Armarouge', image: require("./img/Armarouge.png")},
    ], title:"Fire", bgcolor: "orange", icon: "fire"},
  {data:[{key: 'Tinkaton', image: require("./img/Tinkaton.png")},
          {key: 'Ceruledge', image: require("./img/Ceruledge.png")},
      ], title:"Fairy", bgcolor: "pink", icon: "brain"},
    {data:[{key: 'Cycling Road', image: require("./img/CyclingRoad.png")},
            {key: "Giovanni's \nCharisma", image: require("./img/GiovannisCharisma.png")},
        ], title:"Miscellaneous", bgcolor: "lightgray", icon: "hand-back-fist"},
];


const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={[ styles.parent]}>
        <Text style={styles.textStyle}>{item.key}</Text>
          <Image source={item.image} style={{ width: 260, height: 360 }} />
      </TouchableOpacity>

  );
};


const App = () => {
  return (
      <View style={{marginBottom: 150, backgroundColor: "purple"}}>
          <View style={styles.button}>
            <Button title={"Add Pokemon"} />
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
export default App;
