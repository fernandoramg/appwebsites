import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Spinner from '../components/Spinner';
import Icon from 'react-native-vector-icons/AntDesign';

export default function HomeScreen(){

    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(false);

    const getDataBack = async() => {
        try {
            setLoading(true);
            //CONSUMIENDO LA API CON AXIOS
            //IMPORTANTE: Si es necesario remplazar por la ip 'localhost' de donde se ejecuta
            //const response = await axios.get('http://10.0.2.2:5127/api/sitestest', {
            //La siguiente API 'https://api-websites.onrender.com/api/websites' esta deployada en producción puede consultarla si lo desea
            const response = await axios.get('https://api-websites.onrender.com/api/websites', {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const dataResp = response.data
            //console.log(dataResp)
            setData(dataResp)
            setLoading(false);
        } catch (error) {
            //console.log(error)
            setLoading(true);
        }
    }

    const navigation = useNavigation();

    //Se crea el componente "item" de la lista
    const itemList = ({item}) => {
        return (
            <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('WebViewSites', { 
                itemId: item.id,
                itemUrl: item.url,
                name: item.title
            })}
            >    
                <Text style={styles.itemCard}>{item.id}</Text>
                <View style={styles.line}>
                    <Text>{item.title}</Text>
                    <Text>{item.url}</Text>
                </View>           
                <Icon name='arrowright' style={styles.itemCardArrow}/>
            </TouchableOpacity>
        )
    }
    

    useEffect(() =>{
        getDataBack();
    }, []);

    //Llamamos al componente Spinner personalizado en la pantalla, mientras cargan los datos
    if(loading){ return (<Spinner/>)}

    return(
        <View>
            <FlatList
            data={data}
            renderItem={itemList}
            keyExtractor={item => item.id}
            ListHeaderComponent={() =>(
                <Text style={{
                    textAlign: "center",
                    borderBottomColor: "#14284a",
                    borderBottomWidth: 2,
                    marginVertical: 10,
                    width: "80%",
                    paddingBlock: "10",
                    alignSelf: "center",
                    fontSize: 16
                }}> Available sites</Text>
            )}
            />
        </View>
    )


}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        paddingBlock: 8,
        paddingInline: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#14284a',
        marginHorizontal: 10,
        elevation: 10,
        flexDirection: 'row'
    },
    itemCard: {
        flexGrow: 0.2, 
        alignSelf: "center"
    },
    itemCardArrow: {
        flexGrow: 0.3, 
        alignSelf: "center",
        textAlign: "right",
        fontSize: 18,
        color: "#14284a"
    },
    line:{
        height: "100%",
        borderWidth: 1,
        borderColor: 'gray',
        borderStyle: "dashed",
        alignContent: "center",
        alignSelf: "center",
        verticalAlign: "middle",
        padding: 10,
        alignItems: "center",
        flexGrow: 0.5,
    }
})
