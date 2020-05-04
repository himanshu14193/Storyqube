import React from 'react';
import {
    NativeModules,
    TextInput,
    Text,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    ScrollView,
    Platform,
    Image,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
import Amex from '../assets/AMEX.svg'
import Delete from '../assets/Delete.svg'
import Card from '../assets/Card.svg'
import More from '../assets/more.svg'
import Support from '../assets/myAccount/support.svg'
import About from '../assets/myAccount/about.svg'
import SignOut from '../assets/myAccount/signout.svg'
import SubscriptionCard from '../assets/myAccount/SubscriptionCard.svg'
import ReferralCard from '../assets/myAccount/ReferralCard.svg'
import LearningCard from '../assets/myAccount/LearningCard.svg'
import RateCard from '../assets/myAccount/RateCard.svg'
import SupportCard from '../assets/myAccount/SupportCard.svg'
import AboutCard from '../assets/myAccount/AboutCard.svg'
import SignOutCard from '../assets/myAccount/SignOutCard.svg'
import Star from '../assets/star.svg'
import Star1 from '../assets/star1.svg'
const { UIManager } = NativeModules;
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class SavedCardScreen extends React.Component {
    state = {
    };
    clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // remove error
        }

        console.log('Done.')
    }
    handleSignOut = () => {
        this.clearAll()
        console.log('signout')
    }
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
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.0, y: 0.0 }}
                    // end={{ x: 0.0, y: 0.32 }}
                    locations={[0.0, 1.0]}
                    colors={['#232526', '#414345']}
                    style={[styles.flexColBetween, styles.atmCard]}>

                        <View style={styles.savedCardBlackLine} >
                        </View>
                        <View style={styles.savedCardDown}>
                            <View style={styles.flexRowBetween}>
                                <View style={styles.flexColCenter}>
                                    <Text style={styles.savedCardDownText}>CVV</Text>
                                    <Text style={styles.savedCarddownInput}>XXX</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                    <View style={styles.flexRowStart}>
                        <View style={styles.paymentCardHeader}>
                            <Text style={styles.cardFormText}>CVV</Text>
                        </View>
                    </View>
                    <TextInput
                        style={styles.cardInputDate}
                    // placeholder='email'
                    // placeholderTextColor='#747686'
                    // onChangeText={text => onChangeText(text)}
                    />
                    <View style={[styles.flexRowStart,styles.savedCardSave]}>
                        <View style={styles.saveCardSaveBox} >
                        </View>
                        <Text style={styles.saveCardSaveText} >Save this card</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('YearlyPlan')}
                        style={styles.addCardButton}>
                        <Text style={styles.atmBottomButton}>Pay Now</Text>
                    </TouchableOpacity>
                </View >
            </ScrollView>
        );
    }
}  
