import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  ScrollView,
  Text,
  TextInput,
  PixelRatio,
  Dimensions,
  Platform,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Search from '../assets/search.svg'
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../Styles'
import Back from '../assets/notification/back.svg'

import Message from '../assets/Message.svg'
import Twitter from '../assets/Twitter.svg'
import InviteLogo from '../assets/InviteLogo.svg'
import About from '../assets/myAccount/about.svg'
import SignOut from '../assets/myAccount/signout.svg'
import SubscriptionCard from '../assets/myAccount/SubscriptionCard.svg'
import ReferralCard from '../assets/myAccount/ReferralCard.svg'
import LearningCard from '../assets/myAccount/LearningCard.svg'
import RateCard from '../assets/myAccount/RateCard.svg'
import SupportCard from '../assets/myAccount/SupportCard.svg'
import AboutCard from '../assets/myAccount/AboutCard.svg'
import SignOutCard from '../assets/myAccount/SignOutCard.svg'
import Star from '../assets/star.svg'
import Star1 from '../assets/star1.svg'
const { UIManager } = NativeModules;
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
    name: 'Mental Madness'
  },
  {
    id: 2,
    name: 'Agent 67'
  },
  {
    id: 3,
    name: 'Arabian Nights'
  },
  {
    id: 5,
    name: 'agent 007'
  },
  {
    id: 4,
    name: 'Friday The 13th'
  }
]
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class AboutScreen extends React.Component {
  state = {
    search: ''
  };
  onChangeText = (text) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        300,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleXY
      )
    );
    this.setState({ search: text })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../assets/HomeScreen.png')} />
        <View style={{ backgroundColor: '#181838' }}>
          <View style={[styles.flexRowStart, styles.searchBar]}>
            {
              this.state.search !== '' &&
              <TouchableOpacity
                onPress={() => this.setState({ search: '' })}
                style={{ alignSelf: 'center' }} >
                <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                  height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
              </TouchableOpacity>
            }
            <TextInput
              style={styles.searchBarText}
              placeholder='Search Here'
              placeholderTextColor='#747686'
              onChangeText={text => this.onChangeText(text)}
            />
            <View style={styles.searchBarLogo} >
              <Search height={25} width={25} />
            </View>
          </View>
        </View>
        <ScrollView>

          <View style={styles.flexRowStart}>
            <View style={styles.homeTitle}>
              <Text style={styles.homeTitleText}>Newly Added</Text>
            </View>
          </View>
          <View style={[styles.flexRowStart, styles.searchHorizontalContent]}>
            <ScrollView
              horizontal={true}
              height={160}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={{ width: 20 }}
              decelerationRate="fast"
            >
              {
                cards.map(card => {
                  console.log(card.id)
                  return (
                    <Image key={card.id} style={styles.searchHorizontalContentImage} source={card.source} />
                  )

                })
              }
            </ScrollView>
          </View>

          <View style={styles.flexRowStart}>
            <View style={styles.homeTitle}>
              <Text style={styles.homeTitleText}>Stories</Text>
            </View>
          </View>
          <View style={[styles.flexRowStart, styles.searchHorizontalContent]}>
            <ScrollView
              horizontal={true}
              height={160}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={{ width: 20 }}
              decelerationRate="fast"
            >
              {
                cards.map(card => {
                  console.log(card.id)
                  return (
                    <Image key={card.id} style={styles.searchHorizontalContentImage} source={card.source} />
                  )

                })
              }
            </ScrollView>
          </View>

          <View style={styles.flexRowStart}>
            <View style={styles.homeTitle}>
              <Text style={styles.homeTitleText}>Games</Text>
            </View>
          </View>
          <View style={[styles.flexRowStart, styles.searchHorizontalContent]}>
            <ScrollView
              horizontal={true}
              height={160}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={{ width: 20 }}
              decelerationRate="fast"
            >
              {
                cards.map(card => {
                  console.log(card.id)
                  return (
                    <Image key={card.id} style={styles.searchHorizontalContentImage} source={card.source} />
                  )

                })
              }
            </ScrollView>
          </View>
        </ScrollView>
        {
          this.state.search !== '' &&
          results.filter(result => result.name.slice(0, this.state.search.length).toLowerCase() === this.state.search.toLowerCase()).map((result, index) => {
            let i = results.filter(result => result.name.slice(0, this.state.search.length).toLowerCase() === this.state.search.toLowerCase()).length

            console.log(index, i)
            return (
              <View
                key={result.id}
                style={{
                  backgroundColor: '#181838',
                  position: 'absolute',
                  top: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8 + ((16 * index))) / 100),
                  width: '100%',
                  borderBottomWidth: 1,
                  borderBottomColor: '#20203E',
                  height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
                }}>
                <View style={styles.searchResultContent} >

                  <View style={[styles.flexColCenter, styles.searchResultContentLeft]}>
                    <Image style={{
                      height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                      width: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                    }} source={require('../assets/notification/1.png')} />
                  </View>

                  <View style={[styles.flexColStart,styles.searchResultContentCenter]}>
                    <Text style={styles.searchResultContentCenterText} >
                      {result.name}
                    </Text>
                    <View style={styles.searchRating}>
                      <View style={styles.flexRowStart}>
                        <Text style={styles.searchRatingText}>4.0</Text>
                        <Star height={12} width={12} />
                        <Star height={12} width={12} />
                        <Star height={12} width={12} />
                        <Star height={12} width={12} />
                        <Star1 height={12} width={12} />
                      </View>
                    </View>

                    <View style={styles.searchRating}>
                      <View style={styles.flexRowStart}>
                        <Text style={styles.searchRatingText}>Game</Text>
                        <View style={styles.homeGenreSeparator}></View>
                        <Text style={styles.searchRatingText}>Thriller</Text>
                        <View style={styles.homeGenreSeparator}></View>
                        <Text style={styles.searchRatingText}>Stem</Text>
                      </View>
                    </View>
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
