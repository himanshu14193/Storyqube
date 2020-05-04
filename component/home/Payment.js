import React from 'react';
import {
    Text,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Platform,
    Image,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
import Apple from '../assets/Apple.svg'
import Google from '../assets/Google.svg'
import Card from '../assets/Card.svg'
import More from '../assets/more.svg'
export default class PaymentScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../assets/Login_background.png')} />

                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.PayUsingHeader}>
                    <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                </TouchableOpacity>
                <View style={[styles.flexColBetween, styles.payUsingAmount]}>
                    <View style={styles.flexColStart}>
                        <View style={styles.payUsingAmountHeader} >
                            <Text style={styles.payUsingAmountHeaderText}>
                                AMOUNT
                            </Text>
                        </View>
                        <View style={[styles.flexRowBetween, styles.payUsingAmountContent]} >
                            <View style={styles.flexRowStart}>
                                <Text style={styles.payUsingAmountDollar}>
                                    $
                                </Text>
                                <Text style={styles.payUsingAmountNumber}>
                                    50.00
                                </Text>
                            </View>
                            <Text style={styles.payUsingAmountText}>
                                Annual Plan
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.paymnetPayUsing} >
                    <Text style={styles.TextCenterWhite24}>
                        Pay Using
                    </Text>
                </View>


                <View style={styles.paymentCard} >
                    <View style={styles.payUsingAlignLogo}>
                        <Apple />
                        <Text style={styles.payUsingButtonText}>Pay</Text>
                    </View>

                    <Text style={styles.paymnetText}>
                        APPLE PAY
                        </Text>
                    <View style={{
                        alignSelf: 'center'
                    }}>
                        <More />
                    </View>
                </View>

                <View style={styles.paymentCard} >
                    <View style={styles.payUsingAlignLogo}>
                        <Google />
                        <Text style={styles.payUsingButtonText}>Pay</Text>
                    </View>
                    <Text style={styles.paymnetText}>
                        GOOGLE PAY
                    </Text>
                    <View style={{
                        alignSelf: 'center'
                    }}>
                        <More />
                    </View>
                </View>

                <View style={{
                    marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
                    marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                    width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
                }} >
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        alignSelf: 'center',
                        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                    }}>
                        or
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Card')}
                    style={styles.paymentCard} >
                    <View style={styles.payUsingAlignLogo}>
                        <Card />
                    </View>
                    <Text style={styles.paymnetText}>
                        CREDIT CARD
                    </Text>
                    <View style={{
                        alignSelf: 'center'
                    }}>
                        <More />
                    </View>
                </TouchableOpacity>


            </View >
        );
    }
}  
