import React from 'react';
import {
    Text,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Image,
    View,
} from 'react-native';
import styles from '../Styles'
import ParrotLogo from '../assets/logoH.svg'
import Notification from '../assets/notification.svg'
import Star from '../assets/star.svg'
import Star1 from '../assets/star1.svg'
export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../assets/HomeScreen.png')} />
                <View style={[styles.flexRowBetween, styles.homeHeader]}>
                    <ParrotLogo width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100)}
                        height={'100%'} />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Notification')}
                        style={styles.flexColCenter}>
                        <Notification width={20} height={24} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexColStart}>
                    <View style={styles.flexRowStart}>
                        <View style={styles.homeTitle}>
                            <Text style={styles.homeTitleText}>Friday The 13th</Text>
                        </View>
                    </View>
                    <View style={styles.homeRating}>
                        <View style={styles.flexRowStart}>
                            <Text style={styles.homeRatingText}>4.0</Text>
                            <Star height={16} width={16} />
                            <Star height={16} width={16} />
                            <Star height={16} width={16} />
                            <Star height={16} width={16} />
                            <Star1 height={16} width={16} />
                        </View>
                    </View>
                    <View style={styles.homeRating}>
                        <View style={styles.flexRowStart}>
                            <Text style={styles.homeRatingText}>Game</Text>
                            <View style={styles.homeGenreSeparator}></View>
                            <Text style={styles.homeRatingText}>Thriller</Text>
                            <View style={styles.homeGenreSeparator}></View>
                            <Text style={styles.homeRatingText}>Stem</Text>
                        </View>
                    </View>
                    <View style={styles.flexRowStart}>
                        <View style={styles.homeRating}>
                            <Text style={styles.skillText}>$ 20</Text>
                        </View>
                    </View>
                    <View style={styles.flexRowStart}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Story')}
                            style={styles.homeCard}>
                            <Image source={require('../assets/cards/1.png')} />
                        </TouchableOpacity>
                        <View style={styles.homeCard1}>
                            <Image source={require('../assets/cards/2.png')} />
                        </View>
                        <View style={styles.homeCard2}>
                            <Image source={require('../assets/cards/3.png')} />
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}  
