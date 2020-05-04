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
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
export default class LeaderboardScreen extends React.Component {
    render() {
        return (
            <View style={styles.leaderboardContainer}>

                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={[styles.flexRowStart, styles.leaderBoardHeader]}>
                    <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            marginLeft: 10,
                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
                            fontWeight: '500',
                        }} >
                        Leaderboard
                        </Text>
                </TouchableOpacity>
                <LinearGradient
                    useAngle={true}
                    angle={105}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.0, 1.0]}
                    colors={['#FCC201', '#DBA514']}
                    style={styles.leaderBoardCard1}>
                    <Image style={styles.leaderBoardImage} source={require('../assets/notification/2.png')} />
                    <View style={styles.leaderBoardCol} >
                        <Text>Player a</Text>
                        <Text>960 p</Text>
                    </View>
                    <Text style={styles.leaderBoardRight}>1st</Text>
                </LinearGradient>
                <LinearGradient
                    useAngle={true}
                    angle={103}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.0, 1.0]}
                    colors={['#E7E8EB', '#C0BEC6']}
                    style={styles.leaderBoardCard1}>
                    <Image style={styles.leaderBoardImage} source={require('../assets/notification/2.png')} />
                    <View style={styles.leaderBoardCol} >
                        <Text>Player a</Text>
                        <Text>960 p</Text>
                    </View>
                    <Text style={styles.leaderBoardRight}>2nd</Text>
                </LinearGradient>
                <LinearGradient
                    useAngle={true}
                    angle={103}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.0, 1.0]}
                    colors={['#DF9C76', '#B7693D']}
                    style={styles.leaderBoardCard1}>
                    <Image style={styles.leaderBoardImage} source={require('../assets/notification/2.png')} />
                    <View style={styles.leaderBoardCol} >
                        <Text>Player a</Text>
                        <Text>960 p</Text>
                    </View>
                    <Text style={styles.leaderBoardRight}>3rd</Text>
                </LinearGradient>
                <View style={styles.leaderBoardCard1}>
                    <Image style={styles.leaderBoardImage} source={require('../assets/notification/2.png')} />
                    <View style={styles.leaderBoardCol} >
                        <Text>Player a</Text>
                        <Text>960 p</Text>
                    </View>
                    <Text style={styles.leaderBoardRight}>4th</Text>
                </View>
                <View style={styles.leaderBoardCard1}>
                    <Image style={styles.leaderBoardImage} source={require('../assets/notification/2.png')} />
                    <View style={styles.leaderBoardCol} >
                        <Text>Player a</Text>
                        <Text>960 p</Text>
                    </View>
                    <Text style={styles.leaderBoardRight}>5th</Text>
                </View>
                <LinearGradient
                    useAngle={true}
                    angle={103}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.0, 1.0]}
                    colors={['#0C8AE3', '#0F65B4']} style={styles.leaderBoardCard1}>
                    <Image style={styles.leaderBoardImage} source={require('../assets/notification/2.png')} />
                    <View style={styles.leaderBoardCol} >
                        <Text>Player a</Text>
                        <Text>960 p</Text>
                    </View>
                    <Text style={styles.leaderBoardRight}>6th</Text>
                </LinearGradient>
                <View style={styles.leaderBoardCard1}>
                    <Image style={styles.leaderBoardImage} source={require('../assets/notification/2.png')} />
                    <View style={styles.leaderBoardCol} >
                        <Text>Player a</Text>
                        <Text>960 p</Text>
                    </View>
                    <Text style={styles.leaderBoardRight}>7th</Text>
                </View>
            </View >
        );
    }
}  
