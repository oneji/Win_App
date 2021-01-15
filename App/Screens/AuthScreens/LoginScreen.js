import React, {useState, createRef, useEffect} from 'react';
import {View, KeyboardAvoidingView, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import TextInputMask from 'react-native-text-input-mask';
import Button from '../../Components/Button';
import {TextComponent} from '../../Components/TextComponent';
import {DismissKeyboardView} from '../../Components/DismissKeyboardView';
import {UserSendPhone} from '../../Redux/actions/AuthActions';
import {UserConfirmPhone} from '../../Redux/actions/AppActions';
import FlagRussiaIcon from '../../src/assets/icons/flags/FlagRussiaIcon';
import {Colors} from '../../src/Themes';
import {Styles} from './Styles/LoginStyle';
import axios from '../../src/axios'

const LoginScreen = (props) => {
    const {route} = props;
    const [phone, setPhone] = useState('');
    const [phoneCode, setPhoneCode] = useState('7');
    const sendPhone = () => {     
        axios({
            method: 'POST',
            url: 'auth/register',
            data: {
                phone_number: phone,
            },
        })
        .then((res) => {
            alert('Ваш код подтверждения: ' + res.data.verification_code);

            props.navigation.navigate('SendCodeScreen', {
                initScreen: route?.params?.initScreen,
            });
        })
        .catch(err => {
            console.error(err);
        })
        // if (!route?.params?.initScreen) {
        //     props.dispatch(UserSendPhone(`${phoneCode}${phone}`));
        //     props.navigation.navigate('SendCodeScreen', {
        //         initScreen: route?.params?.initScreen,
        //     });
        // } else {
        //     props.dispatch(UserConfirmPhone(`${phoneCode}${phone}`));
        //     props.navigation.replace('AppStack', 'AuthStack');
        // }
    };

    useEffect(() => {
        if (props.userAuth?.token && route?.params?.initScreen) {
            props.navigation.replace('AppStack', 'AuthStack');
        } else if (props.userConfirmPhone) {
            props.navigation.navigate('SendCodeScreen', {
                initScreen: route?.params?.initScreen,
            });
        }
    });

    return (
        <DismissKeyboardView style={Styles.container}>
            <StatusBar animated={false} barStyle="dark-content" />

            <KeyboardAvoidingView style={{flex: 1}} behavior="height">
                <View style={Styles.contentContainer}>

                    <TextComponent
                        font={'Oswald'}
                        color={Colors.black}
                        size={25}
                        weight="Bold"
                        style={Styles.title}>
                        {route?.params?.initScreen ? 'Укажите свой номер' : 'Вход'}
                    </TextComponent>
                    <TextComponent color={Colors.grey} style={Styles.subtitle}>
                        Введите свой номер, мы отправим смс для входа
                    </TextComponent>
                    <View style={Styles.inputContainer}>
                        <FlagRussiaIcon />
                        <TextComponent color={Colors.black} style={Styles.phoneCode}>
                            +{phoneCode}
                        </TextComponent>
                        
                        <TextInputMask
                            placeholder="Номер телефона"
                            mask={'([000]) [000] [00] [00]'}
                            keyboardType="phone-pad"
                            style={Styles.input}
                            value={phone}
                            onChangeText={(f, e) => setPhone(e)}
                        />
                    </View>
                    {route?.params?.initScreen ? null : (
                        <View style={Styles.ofertaContainer}>
                            <TextComponent color={'#171925'} size={12}>
                                {'Нажимая кнопку «Погнали», вы соглашаетесь со всеми '}
                                <Text style={Styles.oferta}>условиями оферты</Text>
                            </TextComponent>
                        </View>
                    )}

                    <View style={Styles.button}>
                        <Button handler={sendPhone}>Отправить код</Button>
                    </View>
                    {/* <TextComponent color={Colors.grey}>Или с помощью соц.сетей</TextComponent> */}
                    <View />
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboardView>
    );
};
const mapStateToProps = (state) => ({
  userAuth: state.auth.userAuthPhone,
  userConfirmPhone: state.app.userConfirmPhone,
});
export default connect(mapStateToProps)(LoginScreen);
