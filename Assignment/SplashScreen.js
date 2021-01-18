import React, { Component } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    Button,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class Splash extends Component {

    onPressNumber() {
        Alert.alert('Kya aap is number par se sampark karna chahenge?')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../resources/3.jpeg')}
                    style={styles.imageWrapper}>

                    <Image style={styles.logo}
                        source={require('../resources/logo.png')}
                        resizeMode="cover"
                    />

                    {/* <TouchableOpacity
                        style={styles.button}
                        onPress={() => { alert("handler here") }}>
                        <Image style={styles.btnimageWrapper} source={require('../resources/btn_grad_a.png')} ></Image>
                    </TouchableOpacity> */}
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        alignContent: 'center'
    },
    imageWrapper: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    btnimageWrapper: {
        width: "100%",
        height: 90,
        justifyContent: 'center',
        borderRadius: 20
    },
    button: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: "90%",
        height: 100,
        alignItems: 'center',
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "10%",
    },
    text: {
        fontSize: 30,
        color: 'white',
        lineHeight: 42,
        position: 'absolute'

    },
    logo:{
        marginTop:"30%",
        width: "95%",
        height: "15%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "10%",
    }
});
