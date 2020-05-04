import React from 'react';
import {
    Text,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Image,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
import Amex from '../assets/AMEX.svg'
import Delete from '../assets/Delete.svg'
export default class CardScreen extends React.Component {
    render() {
        return (
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
                        <Text style={styles.homeTitleText}>SELECT CARD</Text>
                    </View>
                </View>
                <View style={styles.flexRowEnd}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AddCard')}
                        style={styles.cardButton}>
                        <Text style={styles.cardText}>+ Add new</Text>
                    </TouchableOpacity>
                </View>
                <LinearGradient
                    useAngle={true}
                    angle={90}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.0, 1.0]}
                    colors={['#232526', '#414345']}
                    style={[styles.flexColBetween, styles.SelectCard]}>
                    <View style={styles.selectCardContent} >
                        <Text style={styles.atmCardText}>
                            54**  ****  **00  0123
                        </Text>
                    </View>
                    <View style={styles.selectCardBottomContent}>
                        <View style={styles.flexRowBetween}>
                            <Text style={styles.selectCardName}>DAVID ANTHONY</Text>
                            <Text style={styles.selectCardName}>12/20</Text>
                            <View style={{ alignSelf: 'center' }}>
                                <Amex />
                            </View>

                        </View>
                    </View>
                </LinearGradient>
                <View style={styles.deletedCard}>
                    <View style={styles.flexRowStart}>
                        <View style={styles.deletedIcon}>
                            <Delete height={10} width={10} />
                        </View>
                        <Text style={styles.deleteText}>Delete Card</Text>
                    </View>
                </View>
                <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MonthlyPlan')}
                        style={styles.addCardButton}>
                    <Text style={styles.atmBottomButton}>Pay Now</Text>
                </TouchableOpacity>
            </View >
        );
    }
}  
