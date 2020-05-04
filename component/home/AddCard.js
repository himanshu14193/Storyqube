import React from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    Dimensions,
    Image,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
export default class AddCardScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.backgroundImage} source={require('../assets/Login_background.png')} />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={[styles.flexRowStart, styles.aboutHeader]}>
                        <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                            height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                    </TouchableOpacity>
                    <View style={styles.flexRowStart}>
                        <View style={styles.paymentCardHeader}>
                            <Text style={styles.homeTitleText}>NEW CARD</Text>
                        </View>
                    </View>
                    <LinearGradient
                        useAngle={true}
                        angle={90}
                        locations={[0.0, 1.0]}
                        colors={['#232526', '#414345']}
                        style={[styles.flexColBetween, styles.atmCard]}>
                        <View style={styles.atmCardNumber} >
                            <Text style={styles.atmCardText}>
                                xxxx  xxxx  xxxx  xxxx
                        </Text>
                        </View>
                        <View style={styles.atmBottomContent}>
                            <View style={styles.flexRowBetween}>
                                <View style={styles.flexColCenter}>
                                    <Text style={styles.atmCardHolder}>CARDHOLDER</Text>
                                    <Text style={styles.atmCardName}>NAME</Text>
                                </View>
                                <View style={styles.flexColCenter}>
                                    <Text style={styles.atmCardHolder}>VALID THRU</Text>
                                    <Text style={styles.atmCardName}>MM/YY</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>

                    <View style={styles.flexRowStart}>
                        <View style={styles.paymentCardHeader}>
                            <Text style={styles.cardFormText}>CARD NUMBER</Text>
                        </View>
                    </View>
                    <TextInput
                        style={styles.cardInputField}
                    // placeholder='email'
                    // placeholderTextColor='#747686'
                    // onChangeText={text => onChangeText(text)}
                    />
                    <View style={styles.flexRowStart}>
                        <View style={styles.paymentCardHeader}>
                            <Text style={styles.cardFormText}>CARDHOLDER NAME</Text>
                        </View>
                    </View>
                    <TextInput
                        style={styles.cardInputField}
                    // placeholder='email'
                    // placeholderTextColor='#747686'
                    // onChangeText={text => onChangeText(text)}
                    />
                    <View style={styles.flexRowStart}>
                        <View style={styles.paymentCardHeader}>
                            <Text style={styles.cardFormText}>VALID THRU</Text>
                        </View>
                    </View>
                    <TextInput
                        style={styles.cardInputDate}
                    // placeholder='email'
                    // placeholderTextColor='#747686'
                    // onChangeText={text => onChangeText(text)}
                    />

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SavedCard')}
                        style={styles.addCardButton}>
                        <Text style={styles.atmBottomButton}>NEXT</Text>
                    </TouchableOpacity>
                </View >
            </ScrollView>
        );
    }
}  
