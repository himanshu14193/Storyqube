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
    TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../Styles'
import ParrotLogo from '../assets/logoS.svg'
import Eye from '../assets/eye.svg'

const { UIManager } = NativeModules;
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
    state = {
        signIn: true
    };

    _onPress = () => {
        // Animate the update  
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                300,
                LayoutAnimation.Types.easeInEaseOut,
                LayoutAnimation.Properties.scaleXY
            )
        );
        this.setState({ signIn: !this.state.signIn })
    }
    signInAsync = async () => {
        try {
            const userToken = ['userToken', 'abc']
            await AsyncStorage.multiSet([userToken])
        } catch (e) {
            console.log('setting user token error-', e)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../assets/Login_background.png')} />

                <View style={{
                    flexDirection: 'column',
                    marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100),
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
                    width: '100%',
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                    paddingHorizontal: '26%'
                }}>
                    <ParrotLogo width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (47) / 100)}
                        height={'100%'} />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'center' }}>

                    <View style={styles.rowCenter} >
                        <View style={{
                            backgroundColor: '#171B35',
                            borderRadius: 20,
                            marginTop: this.state.signIn ? PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100) :
                                PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8.5) / 100),
                            width: this.state.signIn ? PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (75) / 100) :
                                PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (65) / 100)
                        }}>
                            {
                                this.state.signIn &&
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardHeader}>
                                        Welcome
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='email'
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <View>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='password'
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                        </View>
                                        <View style={styles.inputContent} >
                                            <Eye height={'100%'} />
                                        </View>
                                    </View>

                                    <View style={styles.forgotPasswordRight}>
                                        <Text style={{ color: '#747686', fontSize: 10 }}>Forgot password?</Text>
                                    </View>
                                </View>
                            }
                            {
                                this.state.signIn ?
                                    <TouchableOpacity
                                        onPress={this.signInAsync}
                                        style={styles.cardSignButton}>
                                        <Text style={{
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                                            fontSize: 18,
                                            color: 'white'
                                        }}>
                                            SIGN IN
                                    </Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={this._onPress} style={styles.cardUp}>
                                        <Text style={{
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
                                            fontSize: 16,
                                            color: '#D4D4D9'
                                        }}>
                                            SIGN IN
                                    </Text>
                                    </TouchableOpacity>
                            }


                        </View>
                    </View>

                    <View style={styles.rowCenter} >
                        <View style={{
                            backgroundColor: '#171B35',
                            borderRadius: 20,
                            // height: this.state.signIn ? PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100) :
                            //     PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (35) / 100),
                            width: this.state.signIn ? PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (65) / 100) :
                                PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (75) / 100)
                        }}>
                            {
                                !this.state.signIn &&
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardHeader}>
                                        Create New
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='name'
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='email'
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='password'
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                        <View style={styles.inputContent} >
                                            <Eye height={'100%'} />
                                        </View>
                                    </View>

                                    <View style={styles.forgotPasswordRight}>
                                        <Text style={{ color: '#747686', fontSize: 10 }}>Forgot password?</Text>
                                    </View>
                                </View>
                            }
                            {
                                this.state.signIn ?
                                    <TouchableOpacity
                                        onPress={this._onPress} style={styles.cardDown}>
                                        <Text style={{
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
                                            fontSize: 16,
                                            color: '#D4D4D9'
                                        }}>
                                            Create New
                                    </Text>
                                    </TouchableOpacity> :
                                    <TouchableOpacity
                                        onPress={this.signInAsync}
                                        style={styles.cardCreateButton}>
                                        <Text style={{
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                                            fontSize: 18,
                                            color: 'white'
                                        }}>
                                            Create New
                                    </Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>


            </View >
        );
    }
}  
