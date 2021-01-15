import React, { useState, createRef } from 'react';
import { View, KeyboardAvoidingView, Dimensions } from 'react-native';
import { TextComponent } from '../../Components/TextComponent';
import { Colors } from '../../src/Themes';
import { Styles } from './Styles/SendCodeScreenStyle';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import axios from '../../src/axios'

const pinInput = createRef();
const timerDelay = 60;

const SendCodeScreen = (props) => {
    const { route } = props;
    const [code, setCode] = useState();
    const [timer, setTimer] = useState(timerDelay);

    const handleCodeChange = e => {
        setCode(e);
    }

    const handleCheckCode = e => {
        axios.get(`auth/verify/${e}`)
            .then(response => {
                alert('SUCCESS')
            })
            .catch(err => console.error(err));
    }

    const resendVerification = e => {
        if(timer === timerDelay) {
            axios.get(`auth/resendVerificationCode?phone_number=${1111111111}`)
                .then(response => {
                    alert(`Ваш код: ${response.data.verification_code}`)
                    startTimer();
                })
                .catch(err => console.error(err));

            
        } 
    }

    const startTimer = () => {
        var interval = setInterval(() => {
            setTimer((p) => {
                if (p === 0) {
                    clearInterval(interval);
                    setTimer(timerDelay);
                } else {
                    return p - 1;
                }
            });
        }, 1000);
    }

    console.log(props);

    return (
        <KeyboardAvoidingView
            style={[Styles.flex, Styles.container]}
            behavior="padding"
        >
            <View>
                <TextComponent
                    font={'Oswald'}
                    color={Colors.black}
                    size={25}
                    weight="Bold"
                    lineHeight={50}
                    style={Styles.title}
                >
                    Введите код из смс
                </TextComponent>

                <TextComponent color={Colors.grey} style={Styles.subtitle}>
                    Код был отправлен на Ваш номер
                </TextComponent>
            </View>

            <View style={{marginTop: 52}}>
                <SmoothPinCodeInput
                    autoFocus={true}
                    ref={pinInput}
                    value={code}
                    onTextChange={handleCodeChange}
                    onFulfill={handleCheckCode}
                    cellStyle={[Styles.cell]}
                    cellStyleFocused={Styles.cellFocused}
                    cellSpacing={22}
                    cellSize={Dimensions.get('screen').width * 0.16}
                />
            </View>

        <View style={Styles.repeat}>
            <TextComponent
                color={timer !== timerDelay ? Colors.grey : '#286BC8'}
                size={14}
                weight="Bold"
                lineHeight={19}
                style={Styles.repeatText}
                onPress={timer !== timerDelay ? null : resendVerification}>
                Отправить код заново
            </TextComponent>
                {timer !== timerDelay && (
                    <TextComponent color={Colors.grey} lineHeight={19} size={14}>
                        {timer} сек
                    </TextComponent>
                )}
        </View>
        
            <View />
        </KeyboardAvoidingView>
    );
};

export default SendCodeScreen;
