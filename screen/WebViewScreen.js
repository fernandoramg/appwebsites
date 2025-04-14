import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import Spinner from '../components/Spinner';

//Se obtienen los datos de navegación 'parametros' y se presentan los sitios
export default function WebViewScreen({route}){

    const { itemId, itemUrl } = route.params;
    const[loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
    }, [])

    const loadView = () => {
        setLoading(false);
    } 



    return(
        <View style={{flex: 1}}>
           <WebView
            style={{flex: 1}}
            source={{ uri: itemUrl}}
            onLoad={() => loadView()}
           />

           {loading && (<Spinner/>)}

        </View>
    )


}