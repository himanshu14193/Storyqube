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
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
import Share from '../assets/share.svg'
import Logo from '../assets/logo.svg'
import Star from '../assets/star.svg'
import Star1 from '../assets/star1.svg'
import { ScrollView } from 'react-native-gesture-handler';
const { UIManager } = NativeModules;
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default class GameScreen extends React.Component {
    state = {
        enable: false
    };
    _onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ enable: !this.state.enable })
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.gameContainer}>
                    <View style={styles.flexColStart} >
                        <Image style={styles.storyImage} source={require('../assets/arabian_bg.png')} />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.storyScreenHeader}>
                        <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                            height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                    </TouchableOpacity>
                    <View style={[styles.flexColStart, styles.storyScreenContainer]}>
                        <LinearGradient
                            useAngle={true}
                            angle={180}
                            //   angleCenter= {{ x: 0.5, y: 0.5}}
                            start={{ x: -0.003, y: 0.26 }} end={{ x: 0.5, y: 0.8 }}
                            //    locations={[0,0.5,0.6]}
                            colors={['#027789', '#0A0b23']}
                            style={styles.storyScreenCard1}>
                            <View style={styles.storyScreenCard1Header} >
                                <Text style={styles.storyScreenCard1Text}>Episode 1</Text>
                                <View style={{ alignSelf: 'center' }}>
                                    <Share
                                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100)}
                                        width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100)} />
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
                                    <Text style={styles.homeRatingText}>Story</Text>
                                    <View style={styles.homeGenreSeparator}></View>
                                    <Text style={styles.homeRatingText}>Adventure</Text>
                                    <View style={styles.homeGenreSeparator}></View>
                                    <Text style={styles.homeRatingText}>Young</Text>
                                    <TouchableOpacity
                                        onPress={this._onPress}
                                        style={styles.storyScreenCard1Enable} >
                                        {
                                            this.state.enable ?
                                                <View style={styles.flexRowStart} >
                                                    <LinearGradient
                                                        useAngle={true}
                                                        angle={0}
                                                        colors={['#0B88E3', '#0B88E3']}
                                                        style={styles.storyScreenCard1EnabledButton}>
                                                        <Text style={styles.storyScreenCard1EnabledButtonText} >Enabled</Text>
                                                    </LinearGradient>
                                                    <View style={styles.storyParrotCircle}>
                                                        <View style={{ marginTop: 5, alignSelf: 'center' }} >
                                                            <Logo height={22} width={22} />
                                                        </View>
                                                    </View>
                                                </View>
                                                :
                                                <View style={styles.flexRowStart} >
                                                    <View style={styles.storyScreenCard1EnableButton}>
                                                        <Text style={styles.storyScreenCard1EnableButtonText} >Enable</Text>
                                                    </View>
                                                    <View style={styles.storyParrotCircleEnable}>
                                                        <View style={{ marginTop: 5, alignSelf: 'center' }} >
                                                            <Logo height={22} width={22} />
                                                        </View>
                                                    </View>
                                                </View>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.storyOverview}>
                                Overview
                            </Text>
                            <Text style={styles.storyOverviewText}>
                                Agent 67 is an immersive adventure story set in 2048 when Aliens from the nearby galaxy visit
                                Earth to capture it. You have to save the planet from this danger by going on
                                an adventure that takes you from Amazon rainforests to the Antarctic and finally a Battle in space.
                            </Text>
                        </LinearGradient>


                        <View style={[styles.flexColCenter, styles.gameProgressCard]}>
                            <View style={styles.gameProgressCardHeader} >
                                <Text style={styles.gameProgressCardText}>
                                    Progress
                            </Text>
                                <Text style={styles.gameProgressCardPercent}>
                                    72%
                            </Text>
                                <View style={styles.gameProgressBarFull}>
                                    <View style={styles.gameProgressBar}>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.flexColCenter, styles.gameInstructionCard]}>
                            <View style={styles.gameInstructionCardHeader} >
                                <Text style={styles.gameInstructionCardTitle}>
                                    Instructions
                            </Text>
                                <Text style={styles.gameInstructionCardText}>
                                    • Say “Alexa, open agent 67”
                            </Text>
                                <Text style={styles.gameInstructionCardText}>
                                    • Follow the story carefully and make wise decisions to save planet Earth.
                            </Text>
                            </View>
                        </View>
                        <View style={[styles.flexColCenter, styles.gameTagsCard]}>
                            <View style={styles.gameTagsCardContent} >
                                <View style={styles.gameTagsCardButton} >
                                    <Text style={styles.gameTagsCardButtonText}>
                                        Speed Math
                                    </Text>
                                    <Text style={styles.gameTagsCardButtonText}>
                                        Chemistry
                                    </Text>
                                    <Text style={styles.gameTagsCardButtonText}>
                                        Nutritional Facts
                                    </Text>
                                    <Text style={styles.gameTagsCardButtonText}>
                                        Geography
                                    </Text>
                                    <Text style={styles.gameTagsCardButtonText}>
                                        Physics
                                    </Text>
                                    <Text style={styles.gameTagsCardButtonText}>
                                        Creative Imagination
                                    </Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </View >
            </ScrollView>
        );
    }
}  
