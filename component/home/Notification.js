import React from 'react';
import {
    Text,
    PixelRatio,
    Dimensions,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import styles from '../Styles'
import Back from '../assets/notification/back.svg'

import Close from '../assets/notification/close.svg'
const cards = [
    {
        id: 1,
        source: require(`../assets/cards/1.png`)
    },
    {
        id: 2,
        source: require(`../assets/cards/2.png`)
    },
    {
        id: 3,
        source: require(`../assets/cards/3.png`)
    },
    {
        id: 4,
        source: require(`../assets/cards/4.png`)
    }
]
const results = [
    {
        id: 1,
        new: 'story',
        text: ' Sinbad the Sailor released in Arabian nights',
        time: '3 hours ago'
    },
    {
        id: 2,
        new: 'episode',
        text: ' Rise of the Phalanx released in Agent 67',
        time: 'yesterday'
    },
    {
        id: 3,
        new: '',
        text: 'See learning insights from Mental Madness! Trouble ...',
        time: 'A week ago'
    },
    {
        id: 5,
        new: '',
        text: 'Listen to this new adventure story “Zelda” with the new ...',
        time: 'A month ago'
    }
]
export default class NotificationScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../assets/HomeScreen.png')} />
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.referralHeader}>
                    <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                    <Text
                        style={styles.referralBack} >
                        Notification
                        </Text>
                </TouchableOpacity>
                {
                    results.map((result, index) => {
                        return (
                            <View
                                key={result.id}
                                style={{
                                    position: 'absolute',
                                    top: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8 + ((16 * index))) / 100),
                                    width: '100%',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#20203E',
                                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
                                }}>
                                <View style={[styles.flexRowStart, styles.notificationContentRow]} >
                                    <View style={[styles.flexColCenter, styles.notificationContentRowLeft]}>
                                        <Image style={{
                                            height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                                            width: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                                        }} source={require('../assets/notification/1.png')} />
                                    </View>
                                    <View style={[styles.flexColStart, styles.notificationContentRowCenter]}>
                                        <View>
                                            {
                                                result.new ?
                                                    (
                                                        result.new === 'story' ?
                                                            (
                                                                <Text style={styles.notificationContentRowCenterNew} >
                                                                    New Story:
                                                                    <Text style={styles.notificationContentRowCenterText} >
                                                                        {result.text}
                                                                    </Text>
                                                                </Text>) :
                                                            (
                                                                <Text style={styles.notificationContentRowCenterNew} >
                                                                    New Episode:
                                                                    <Text style={styles.notificationContentRowCenterText} >
                                                                        {result.text}
                                                                    </Text>
                                                                </Text>
                                                            )
                                                    ) :
                                                    <Text style={styles.notificationContentRowCenterWhite} >
                                                        {result.text}
                                                    </Text>
                                            }
                                        </View>
                                        <View style={styles.notificationRating}>
                                            <View style={styles.flexRowStart}>
                                                <Text style={styles.notificationRatingText}>{result.time}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{
                                        alignSelf: 'center'
                                    }}>
                                        <Close />
                                    </View>
                                </View>
                            </View>
                        )
                    })

                }
            </View >
        );
    }
}  
