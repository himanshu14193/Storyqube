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
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
export default class AboutScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../assets/Group.png')} />
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
                <View
                    style={[styles.flexColBetween, styles.aboutCard]}>
                    <View  >
                        <Text style={styles.aboutCardText}>
                            About
                        </Text>
                        <Text style={styles.aboutCardContent}>
                            Esse ipsum laboris sit ut adipisicing proident veniam irure exercitation laborum et fugiat
                            voluptate. Elit non et qui veniam incididunt do ut exercitation excepteur aute id.
                            Nisi cupidatat proident anim laboris ad veniam duis dolore irure consequat adipisicing ea.
                            Consectetur ut sunt excepteur velit non quis tempor sit fugiat non occaecat cupidatat id velit.
                            Mollit exercitation excepteur duis veniam adipisicing incididunt aliqua voluptate nisi deserunt
                            sit irure proident esse. Exercitation ut ad id irure tempor.
                            Est irure cillum aliquip labore est reprehenderit consectetur id mollit excepteur irure ex ex.
                            Aliquip labore est reprehenderit consectetur id mollit excepteur
                    </Text>
                        <Text style={styles.aboutCardContent}>
                            www.voiceqube.com
                    </Text>
                    </View>
                </View>
            </View >
        );
    }
}  
