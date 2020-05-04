import React from 'react';
import {
    Text,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Image,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../Styles'
import ParrotLogo from '../assets/logoH.svg'
import Subscription from '../assets/myAccount/subscription.svg'
import Referral from '../assets/myAccount/referral.svg'
import Learning from '../assets/myAccount/learning.svg'
import Rate from '../assets/myAccount/rate.svg'
import Support from '../assets/myAccount/support.svg'
import About from '../assets/myAccount/about.svg'
import SignOut from '../assets/myAccount/signout.svg'
export default class App extends React.Component {
    handleSignOut = () => {
        this.clearAll()
        console.log('signout')
    }
    clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // remove error
        }
        console.log('Done.')
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../assets/HomeScreen.png')} />
                <View style={styles.profileScreenHeader}>
                    <ParrotLogo width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100)}
                        height={'100%'} />
                </View>
                <View style={styles.flexColStart}>
                    <View style={styles.flexRowStart}>
                        <View style={styles.profileIcon}>
                        </View>
                        <View style={styles.flexColCenter}>
                            <View style={styles.flexRowStart} >
                                <Text style={styles.profileName}>
                                    Vishnu
                            </Text>
                            </View>
                            <View style={styles.flexRowStart} >
                                <Text style={styles.profileEmail}>
                                    vishnu@voiceqube.com
                            </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.flexRowStart}>
                    <View style={styles.flexColStart}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Subscription')} >
                            <LinearGradient
                                useAngle={true}
                                angle={138}
                                //   angleCenter= {{ x: 0.5, y: 0.5}}
                                start={{ x: 0.08, y: 0.98 }}
                                // end={{ x: 0.5, y: 0.8 }}
                                //    locations={[0,0.5,0.6]}
                                colors={['#02BCE4', '#447AC6']}
                                style={styles.profileRecCard}>
                                <Text style={styles.profileCardText}>
                                    Subscription
                            </Text>
                                <View style={{ position: 'absolute', bottom: 0, right: 0, elevation: 10, }}>
                                    <Subscription
                                        width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (20) / 100)}
                                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100)} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <LinearGradient
                            useAngle={true}
                            angle={115}
                            //   angleCenter= {{ x: 0.5, y: 0.5}}
                            start={{ x: 0.03, y: 0.98 }}
                            // end={{ x: 0.5, y: 0.8 }}
                            //    locations={[0,0.5,0.6]}
                            colors={['#AA076B', '#61045F']}
                            style={styles.profileSqCard}>
                            <Text style={styles.profileCardText}>
                                Support
                            </Text>
                            <View style={{ position: 'absolute', bottom: 1, right: 8, elevation: 10, }}>
                                <Support
                                    width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (15) / 100)}
                                    height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (10) / 100)} />
                            </View>
                        </LinearGradient>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('About')}>
                            <LinearGradient
                                useAngle={true}
                                angle={115}
                                //   angleCenter= {{ x: 0.5, y: 0.5}}
                                start={{ x: 0.004, y: 0.96 }}
                                // end={{ x: 0.5, y: 0.8 }}
                                //    locations={[0,0.5,0.6]}
                                colors={['#69BD88', '#1E9269']}
                                style={styles.profileSqCard}>
                                <Text style={styles.profileCardText}>
                                    About
                            </Text>
                                <View style={{ position: 'absolute', bottom: 0, right: 3, elevation: 10, }}>
                                    <About
                                        width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (15) / 100)}
                                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (10) / 100)} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexColStart}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Referral')}>
                            <LinearGradient
                                useAngle={true}
                                angle={113}
                                //   angleCenter= {{ x: 0.5, y: 0.5}}
                                start={{ x: 0.03, y: 0.98 }}
                                // end={{ x: 0.5, y: 0.8 }}
                                //    locations={[0,0.5,0.6]}
                                colors={['#F09819', '#FF512F']}
                                style={styles.profileSqCardRU}>
                                <Text style={styles.profileCardText}>
                                    Referral
                            </Text>
                                <View style={{ position: 'absolute', bottom: 0, right: 8, elevation: 10, }}>
                                    <Referral
                                        width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (15) / 100)}
                                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8) / 100)} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <LinearGradient
                            useAngle={true}
                            angle={113}
                            //   angleCenter= {{ x: 0.5, y: 0.5}}
                            // start={{ x: 0.11, y: 0.95 }}
                            // end={{ x: 0.0, y: 0.95 }}
                            locations={[0.11, 0.95, 0.96]}
                            colors={['#02C7A7', '#02AAB0', '#02AAB0']}
                            style={styles.profileRecCardR}>
                            <Text style={styles.profileCardText}>
                                Learnings
                            </Text>
                            <View style={{ position: 'absolute', bottom: 0, right: 0, elevation: 10, }}>
                                <Learning
                                    width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (20) / 100)}
                                    height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100)} />
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            useAngle={true}
                            angle={122}
                            //   angleCenter= {{ x: 0.5, y: 0.5}}
                            // start={{ x: 0.11, y: 0.95 }}
                            // end={{ x: 0.0, y: 0.95 }}
                            locations={[0.0, 1.0]}
                            colors={['#F7502F', '#D72574']}
                            style={styles.profileSqCardRD}>
                            <Text style={styles.profileCardText}>
                                Rate
                            </Text>
                            <View style={{ position: 'absolute', top: 0, right: 8, elevation: 10, }}>
                                <Rate
                                    width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (20) / 100)}
                                    height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8) / 100)} />
                            </View>
                        </LinearGradient>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={this.handleSignOut}>
                    <LinearGradient
                        useAngle={true}
                        angle={100}
                        //   angleCenter= {{ x: 0.5, y: 0.5}}
                        // start={{ x: 0.11, y: 0.95 }}
                        // end={{ x: 0.0, y: 0.95 }}
                        locations={[0.0, 1.0]}
                        colors={['#536976', '#292E49']}
                        style={styles.profileSignOut}>
                        <Text style={styles.profileCardText}>
                            Sign Out
                    </Text>
                        <View style={{ position: 'absolute', bottom: 8, right: 5 }}>
                            <SignOut width={100} height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100)} />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View >
        );
    }
}  
