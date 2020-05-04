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
import LinearGradient from 'react-native-linear-gradient'
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
export default class MonthlyPlanScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={[
                        styles.flexRowStart,
                        styles.aboutHeader
                    ]}>
                    <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                    <Text
                        style={styles.aboutText} >
                        Back
                        </Text>
                </TouchableOpacity>

                <View style={styles.flexRowStart}>
                    <View style={styles.currentPlanHeader}>
                        <Text style={styles.homeTitleText}>CURRENT PLAN</Text>
                    </View>
                </View>

                <LinearGradient
                    useAngle={true}
                    angle={110}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.03, 0.98]}
                    colors={['#CB2D3E', '#EF473A']}
                    style={[styles.flexColStart, styles.planCard]}>
                    <View style={{
                        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
                        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
                    }}>
                        <View style={styles.planCardHeaderContainerY}>
                            <Text style={styles.planCardHeader}>
                                YEARLY
                        </Text>
                        </View>
                        <View style={{
                            position:'absolute',
                            right:0,
                            flexDirection:'row',
                            justifyContent:'center'
                        }}>
                            <Text style={styles.planPointsText}>Renew</Text>
                            <View style={{
                                height:17,
                                marginLeft:5,
                                width:30,
                                borderRadius:10,
                                backgroundColor:'white'
                            }}>
                                 <View style={{
                                height:10,
                                width:10,
                                position:'absolute',
                                marginTop:3.5,
                                right:2,
                                borderRadius:6,
                                backgroundColor:'#b32c39'
                            }}></View>
                            </View>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.planCurrencyText}>
                                $50
                            </Text>
                            <Text style={styles.planCurrencyTextR}>
                                /year
                            </Text>
                        </View>
                        <View style={{...styles.flexRowCenter,  marginTop : PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),}}>
                            <View style={{ 
                                alignSelf: 'flex-end'
                                }}>
                                <Text style={styles.planPointsDate}>28/04/2020</Text>
                            </View>
                            <View style={{
                                backgroundColor: '#DC393C',
                                borderRadius: 100,
                                height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (15) / 100),
                                width: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (15) / 100),
                            }}>
                                <View style={{
                                    borderRadius: 100,
                                    borderWidth: 8,
                                    borderColor: 'white',
                                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (15) / 100),
                                    width: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (15) / 100),
                                }}>
                                    <View>
                                        <Text style={{
                                            color:'white',
                                            textAlign:'center',
                                            fontSize:18,
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (15) / 100),
                                        }}>
                                            366 days 
                                            Left
                                        </Text>
                                        
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <Text style={styles.planPointsDate}>28/05/2020</Text>
                            </View>
                        </View>

                        <View style={{
                            ...styles.flexColStart,
                            marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
                        }} >
                            <Text style={styles.planPointsText}>
                                • Browse free original content.
                            </Text>
                            <Text style={styles.planPointsText}>
                                • Premium content upto 60% discount.
                            </Text>
                            <Text style={styles.planPointsText}>
                                • Billed monthly.
                            </Text>
                        </View>

                    </View>
                </LinearGradient>
            </View >
        );
    }
}  
