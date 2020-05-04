import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Platform,
    Image,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
import Instagram from '../assets/Instagram.svg'
import Facebook from '../assets/Facebook.svg'
import Message from '../assets/Message.svg'
import Twitter from '../assets/Twitter.svg'
import InviteLogo from '../assets/InviteLogo.svg'
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

export default class AboutScreen extends React.Component {
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
            <View style={{ ...styles.container, backgroundColor: 'black' }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.referralHeader}>
                    <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                    <Text
                        style={styles.referralBack} >
                        Back
                        </Text>
                </TouchableOpacity>



                <LinearGradient
                        useAngle={true}
                        angle={328}
                        //   angleCenter= {{ x: 0.5, y: 0.5}}
                        // start={{ x: 0.11, y: 0.95 }}
                        // end={{ x: 0.0, y: 0.95 }}
                        locations={[0.03, 0.99]}
                        colors={['#A9BAC8', '#EEF2F3']}
                        style={styles.referralCard}>
                    <View  >
                        <Text style={styles.referralCardHeader}>
                            Invite Friends
                    </Text>

                        <View style={styles.referralLogo}>
                            <InviteLogo />
                        </View>

                        <Text style={styles.referralText}>
                            Send your friends an invite to find out how cool games and stories are in the Storycube app.
                    </Text>
                        <View style={styles.referralLinkContainer}>
                            <Text style={styles.referralLinkText}>
                                https://www.storycube.com/...
                            </Text>
                            <View style={styles.referralLinkButton}>
                                <Text style={styles.referralLinkButtonText}>Copy Link</Text>
                            </View>
                        </View>
                        <Text style={styles.referralShare}>
                            Share via
                        </Text>
                        <View style={{
                            height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (13) / 100),
                            marginHorizontal: 15,
                            ...styles.flexRowBetween
                        }}>
                            <View style={styles.referralSocial}>
                                <View style={styles.referralIcon}>
                                    <Facebook />
                                </View>
                            </View>

                            <View style={styles.referralSocial}>
                                <View style={styles.referralIcon}>
                                    <Twitter />
                                </View>
                            </View>

                            <View style={styles.referralSocial}>
                                <View style={styles.referralIcon}>
                                    <Instagram />
                                </View>
                            </View>

                            <View style={styles.referralSocial}>
                                <View style={styles.referralIcon}>
                                    <Message />
                                </View>
                            </View>

                        </View>
                    </View>


                </LinearGradient>

            </View >
        );
    }
}  
