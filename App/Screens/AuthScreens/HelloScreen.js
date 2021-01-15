import React, { useEffect } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { Styles } from './Styles/HelloScreenStyles';
import HelloText from '../../src/assets/icons/HelloText';
import { TextComponent } from '../../Components/TextComponent';
import Button from '../../Components/Button';
import AsyncStorage from '@react-native-community/async-storage';

const image = require('../../src/assets/images/Hello-image.png');

const HelloScreen = (props) => {
    const { navigation } = props;

    useEffect(() => {
        const token = AsyncStorage.getItem('token');
        if (token) {
            navigation.replace('AppStack', 'AuthStack');
        }
    })

    return (
        <View style={Styles.container}>
            <StatusBar animated={false} barStyle="light-content" />
            <ImageBackground source={image} style={Styles.image}>
                <SafeAreaView style={Styles.contentContainer}>
                    <View style={Styles.content}>
                        <View style={Styles.title}>
                            <TextComponent
                                size={46}
                                weight="Bold"
                                font="Oswald"
                                lineHeight={50}>
                                {'А Ты готов к победе'.toUpperCase()}
                            </TextComponent>

                            <HelloText />
                        </View>
                        <View style={Styles.button}>
                            <Button handler={() => navigation.navigate('LoginScreen')}>Погнали</Button>
                        </View>
                            <View style={Styles.oferta}>
                            <TextComponent
                                color={'#707070'}
                                style={{textAlign: 'center'}}
                                size={12}
                                lineHeight={17}>
                                {'Нажимая кнопку «Погнали», вы соглашаетесь со всеми '}
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.push('AppStack', {
                                            screen: 'CommonInfoScreen',
                                            params: {title: 'Оферта'},
                                        })
                                    }
                                    style={{paddingTop: 20}}>
                                <TextComponent
                                    color={'#707070'}
                                    // style={{textAlign: 'center'}}
                                    size={12}
                                    lineHeight={17}
                                    style={Styles.underline}>
                                    условиями оферты
                                </TextComponent>
                                </TouchableOpacity>
                            </TextComponent>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default HelloScreen;
