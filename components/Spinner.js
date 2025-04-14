
import { Dimensions, View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Spinner(){

    return(
        <View style={styles.container}>
            <ActivityIndicator
                size={"large"}
                color={"#14284a"}
                style={{alignSelf: "center"}}
            />
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: height / 2.2,
        left: width / 2.2
    }
    
})