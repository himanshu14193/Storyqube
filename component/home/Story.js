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
import Arrow from '../assets/arrow.svg'
import Lock from '../assets/lock.svg'
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

export default class StoryScreen extends React.Component {
    state = {
        enable: false
    };
    _onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ enable: !this.state.enable })
    }
    render() {
        return (
            <>
                <ScrollView>
                    <View style={styles.storyContainer}>
                        <View style={styles.flexColStart} >
                            <Image style={styles.storyImage} source={require('../assets/friday_bg.png')} />
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
                                colors={['#F4E1A6', '#0f0f25']}
                                style={styles.storyScreenCard1}>
                                <View style={styles.storyScreenCard1Header} >
                                    <Text style={styles.storyScreenCard1Text}>Friday The 13th</Text>
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


                            <View style={[styles.flexColStart, styles.storyEpisodesCard]}>
                                <View style={{
                                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
                                    marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (10) / 100),
                                    // backgroundColor:'red'
                                }} >
                                    <Text style={styles.storyEpisodesText}>
                                        Episodes
                            </Text>

                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Game')}
                                        style={styles.storyEpisodeRow} >
                                        <View style={styles.storyEpisodeImage} ></View>

                                        <View style={styles.storyEpisodeList} >
                                            <View style={styles.flexColStart} >
                                                <Text style={styles.storyEpisodeNumber}>
                                                    Episode 1
                                                </Text>
                                                <Text style={styles.storyEpisodeDescription}>
                                                    Exercitation aute aliqua aute dolore. Est duis cillum sit cillum nulla commodo qui.
                                                </Text>
                                            </View>
                                            <Arrow />
                                        </View>
                                    </TouchableOpacity>

                                    <View style={styles.storyEpisodeRow1} >
                                        <View style={styles.storyEpisodeImage} ></View>
                                        <View style={styles.storyEpisodeList} >
                                            <View style={styles.flexColStart} >
                                                <Text style={styles.storyEpisodeNumberLock}>
                                                    Episode 2  <Lock />
                                                </Text>
                                                <Text style={styles.storyEpisodeDescriptionLock}>
                                                    Exercitation aute aliqua aute dolore. Est duis cillum sit cillum nulla commodo qui.
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.storyEpisodeRow1} >
                                        <View style={styles.storyEpisodeImage} ></View>
                                        <View style={styles.storyEpisodeList} >
                                            <View style={styles.flexColStart} >
                                                <Text style={styles.storyEpisodeNumberLock}>
                                                    Episode 3  <Lock />
                                                </Text>
                                                <Text style={styles.storyEpisodeDescriptionLock}>
                                                    Exercitation aute aliqua aute dolore. Est duis cillum sit cillum nulla commodo qui.
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.flexColStart, styles.storyLeaderboardCard]}>
                                <View style={styles.storyLeaderboardContent} >
                                    <Text style={styles.storyLeaderboardHeader}>
                                        Leaderboard
                                </Text>
                                    <LinearGradient
                                        useAngle={true}
                                        angle={105}
                                        //   angleCenter= {{ x: 0.5, y: 0.5}}
                                        // start={{ x: 0.11, y: 0.95 }}
                                        // end={{ x: 0.0, y: 0.95 }}
                                        locations={[0.0, 1.0]}
                                        colors={['#FCC201', '#DBA514']}
                                        style={styles.storyLeaderboardCardList}>
                                        <Image style={styles.storyLeaderboardCardListImage} source={require('../assets/notification/2.png')} />
                                        <View style={styles.storyLeaderboardCardListName} >
                                            <Text>Player a</Text>
                                            <Text>960 p</Text>
                                        </View>
                                        <Text style={styles.storyLeaderboardCardListText}>1st</Text>
                                    </LinearGradient>
                                    <LinearGradient
                                        useAngle={true}
                                        angle={103}
                                        //   angleCenter= {{ x: 0.5, y: 0.5}}
                                        // start={{ x: 0.11, y: 0.95 }}
                                        // end={{ x: 0.0, y: 0.95 }}
                                        locations={[0.0, 1.0]}
                                        colors={['#E7E8EB', '#C0BEC6']}
                                        style={styles.storyLeaderboardCardList}>
                                        <Image style={styles.storyLeaderboardCardListImage} source={require('../assets/notification/2.png')} />
                                        <View style={styles.storyLeaderboardCardListName} >
                                            <Text>Player a</Text>
                                            <Text>960 p</Text>
                                        </View>
                                        <Text style={styles.storyLeaderboardCardListText}>2nd</Text>
                                    </LinearGradient>
                                    <LinearGradient
                                        useAngle={true}
                                        angle={103}
                                        //   angleCenter= {{ x: 0.5, y: 0.5}}
                                        // start={{ x: 0.11, y: 0.95 }}
                                        // end={{ x: 0.0, y: 0.95 }}
                                        locations={[0.0, 1.0]}
                                        colors={['#DF9C76', '#B7693D']}
                                        style={styles.storyLeaderboardCardList}>
                                        <Image style={styles.storyLeaderboardCardListImage} source={require('../assets/notification/2.png')} />
                                        <View style={styles.storyLeaderboardCardListName} >
                                            <Text>Player a</Text>
                                            <Text>960 p</Text>
                                        </View>
                                        <Text style={styles.storyLeaderboardCardListText}>3rd</Text>
                                    </LinearGradient>
                                    <LinearGradient
                                        useAngle={true}
                                        angle={103}
                                        //   angleCenter= {{ x: 0.5, y: 0.5}}
                                        // start={{ x: 0.11, y: 0.95 }}
                                        // end={{ x: 0.0, y: 0.95 }}
                                        locations={[0.0, 1.0]}
                                        colors={['#0C8AE3', '#0F65B4']}
                                        style={styles.storyLeaderboardCardList}>
                                        <Image style={styles.storyLeaderboardCardListImage} source={require('../assets/notification/2.png')} />
                                        <View style={styles.storyLeaderboardCardListName} >
                                            <Text>Player a</Text>
                                            <Text>960 p</Text>
                                        </View>
                                        <Text style={styles.storyLeaderboardCardListText}>4th</Text>
                                    </LinearGradient>

                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Leaderboard')}
                                        style={styles.seeMoreButton}>
                                        <Text style={styles.seeMoreButtonText}>See More</Text>
                                    </TouchableOpacity>
                                    <View style={{
                                        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                                        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
                                        // backgroundColor:'red'
                                    }} >
                                        <Text style={styles.instructionText}>
                                            Instructions
                                        </Text>
                                        <Text style={styles.instructionTextContent}>
                                            • Say “Alexa, open agent 67”
                                        </Text>
                                        <Text style={styles.instructionTextContent}>
                                            • Follow the story carefully and make wise decisions to save planet Earth.
                                        </Text>
                                    </View>

                                </View>
                            </View>
                            <View style={[styles.flexColCenter, styles.storyTagsCard]}>
                                <View style={styles.storyTagsHeader} >
                                    <View style={styles.storyTagsButton} >
                                        <Text style={styles.storyTagsButtonText}>
                                            Speed Math
                                        </Text>
                                        <Text style={styles.storyTagsButtonText}>
                                            Chemistry
                                    </Text>
                                        <Text style={styles.storyTagsButtonText}>
                                            Nutritional Facts
                                    </Text>
                                        <Text style={styles.storyTagsButtonText}>
                                            Geography
                                    </Text>
                                        <Text style={styles.storyTagsButtonText}>
                                            Physics
                                    </Text>
                                        <Text style={styles.storyTagsButtonText}>
                                            Creative Imagination
                                    </Text>
                                    </View>

                                </View>
                            </View>



                        </View>
                    </View >
                </ScrollView>
            </>
        );
    }
}  
