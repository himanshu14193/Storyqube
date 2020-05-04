import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from '../Styles'
export default class SubscriptionScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../assets/Login_background.png')} />
                <View style={styles.flexRowCenter}>
                    <View style={styles.subscriptionHeading}>
                        <Text style={styles.homeTitleText}>CHOOSE YOUR PLAN</Text>
                    </View>
                </View>

                <LinearGradient
                    useAngle={true}
                    angle={125}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.03, 0.98]}
                    colors={['#3F4C6B', '#606C88']}
                    style={styles.subscriptionMonthlyCard} >
                    <View style={styles.flexColStart} >
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionTitle}>MONTHLY</Text>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionPrice}>$9.99</Text>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionPoints}>
                                • Browse free original content.
                            </Text>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionPoints}>
                                • Premium content upto 60% discount.
                            </Text>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionPoints}>
                                • Billed annually.
                            </Text>
                        </View>
                    </View>
                </LinearGradient>

                <LinearGradient
                    useAngle={true}
                    angle={125}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.03, 0.98]}
                    colors={['#CB2D3E', '#EF473A']}
                    style={styles.subscriptionYearlyCard} >
                    <View style={styles.flexColStart} >
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionTitle}>YEARLY</Text>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionPrice}>$50</Text>
                            <Text style={styles.subscriptionPriceStrikeThrough}>$119.88</Text>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionPoints}>
                                • Browse free original content.
                            </Text>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionPoints}>
                                • Premium content upto 60% discount.
                            </Text>
                        </View>
                        <View style={styles.flexRowStart} >
                            <Text style={styles.subscriptionPoints}>
                                • Billed annually.
                            </Text>
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.flexRowCenter}>
                    <Text style={styles.subscriptionText}>BROWSE FOR FREE</Text>
                </View>

                <View style={styles.subscriptionContainer}>
                    <Text style={styles.subscriptionLinkText}>
                        Monthly Plan
                    </Text>
                    <Text style={styles.subscriptionLinkTextSmall}>
                        $9.99/Month
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Payment')}
                        style={styles.subscriptionButton}>
                        <Text style={styles.subscriptionLinkButtonText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>

            </View >
        );
    }
}  
