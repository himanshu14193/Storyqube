import { StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native'
let { height, width } = Dimensions.get('window');
console.log(height);
console.log(width);
const styles = StyleSheet.create({
    container: {
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (100) / 100),
        flex: 1,
        backgroundColor: '#0A0A22',
        // ...Platform.select({
        //     ios: {
        //         marginTop: '6%',
        //     },
        //     android: {
        //         marginTop: 0,
        //     },
        // }),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    leaderboardContainer: {
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (100) / 100),
        flex: 1,
        backgroundColor: '#650722',
        // ...Platform.select({
        //     ios: {
        //         marginTop: '6%',
        //     },
        //     android: {
        //         marginTop: 0,
        //     },
        // }),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (100) / 100),

    },
    storyContainer: {
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (261) / 100),
        flex: 1,
        // backgroundColor: '#027284',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    gameContainer: {
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (178) / 100),
        flex: 1,
        // backgroundColor: '#027284',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    storyImage: {
        position: 'absolute',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (100) / 100),
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardContainer: {
        // backgroundColor: '#171B35',
        borderRadius: 20,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (36) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (75) / 100)
    },
    cardContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    cardHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // backgroundColor:'red',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)
    },
    savedCardBlackLine: {
        backgroundColor: 'black',
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
    },
    savedCardDown: {
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
    },
    savedCardDownText: {
        color: '#C4C4C4',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    savedCarddownInput: {
        color: '#888888',
        fontSize: 16,
        textAlign: 'center',
        borderWidth: 1,
        height: 28,
        width: 56,
        borderRadius: 4,
        borderColor: '#888888',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    savedCardSave: {
        height: 20,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
    },
    saveCardSaveBox: {
        height: 17,
        width: 17,
        // backgroundColor:'red',
        borderWidth: 1,
        marginRight: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (2) / 100),
        borderRadius: 1,
        borderColor: 'white',
    },
    saveCardSaveText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 20
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#747686',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputContent: {
        // backgroundColor:'yellow',
        color: 'white',
        fontSize: 14,
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4.5) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100)
    },
    forgotPasswordRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // backgroundColor:'red',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)
    },
    cardSignButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0E8EE3',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (75) / 100)
    },
    cardCreateButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#9C1941',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (75) / 100)
    },
    cardDown: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#171B35',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (65) / 100)
    },
    cardUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#171B35',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (65) / 100)
    },


    /*************************Home styles */
    flexColStart: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    flexColEnd: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    flexRowStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    flexColCenter: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    flexRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    flexColBetween: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexRowEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    homeTitle: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
    },
    homeHeader: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (5) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (88) / 100),
    },
    homeTitleText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    homeRating: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
    },
    homeRatingText: {
        color: 'white',
        fontSize: 14,
        marginRight: 5
    },
    homeGenreSeparator: {
        borderRightWidth: 1,
        borderRightColor: '#845136',
        marginRight: 5
    },
    skillText: {
        color: '#7BCFF0',
        fontSize: 24,
        fontWeight: 'bold'
    },
    homeCard: {
        zIndex: 2,
        position: 'absolute',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 3 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 3,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (50) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (70) / 100)
    },
    homeCard1: {
        position: 'absolute',
        zIndex: 1,
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        // opacity:.8,
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (15) / 100),
        // height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (50) / 100),
        // width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (60) / 100)
    },
    homeCard2: {
        position: 'absolute',
        zIndex: 0,
        ...Platform.select({
            ios: {
                shadowOffset: { height: 1 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 1,
            },
        }),
        // opacity:.8,
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (22) / 100),
        // height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (44) / 100),
        // width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (42) / 100)
    },


    /***************************************** */
    profileScreenHeader: {
        flexDirection: 'row',
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (5) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (88) / 100),
        justifyContent: 'space-between',
    },
    profileIcon: {
        backgroundColor: 'red',
        borderRadius: 50,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100)
    },
    profileName: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (5) / 100),
        fontSize: 26,
        lineHeight: 32,
        color: 'white',
        fontWeight: 'bold'
    },
    profileEmail: {
        fontSize: 14,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (5) / 100),
        lineHeight: 16,
        color: 'white',
    },
    profileRecCard: {
        // backgroundColor: '#447AC6',
        borderRadius: 10,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (23) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (40) / 100),
    },
    profileSqCard: {
        // backgroundColor: '#790462',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (40) / 100),
    },
    profileRecCardR: {
        // backgroundColor: '#447AC6',
        borderRadius: 10,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (4) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (23) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (40) / 100),
    },
    profileSqCardRU: {
        // backgroundColor: '#790462',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (4) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (40) / 100),
    },
    profileSqCardRD: {
        // backgroundColor: '#790462',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (4) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (40) / 100),
    },
    profileCardText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 15,
    },
    profileSignOut: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100),
    },
    subscriptionHeading: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
    },
    subscriptionMonthlyCard: {
        // backgroundColor: '#505C7A',
        borderRadius: 16,
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (26) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        resizeMode: 'stretch',
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    subscriptionYearlyCard: {
        backgroundColor: '#DB383C',
        borderRadius: 16,
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (26) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        resizeMode: 'stretch',
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    subscriptionTitle: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100)
    },
    subscriptionPrice: {
        color: 'white',
        fontSize: 32,
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1.5) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100)
    },
    subscriptionPriceStrikeThrough: {
        color: '#EFAFB1',
        lineHeight: 45,
        textDecorationLine: 'line-through',
        fontSize: 16,
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1.5) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (2) / 100)
    },
    subscriptionPoints: {
        color: 'white',
        fontSize: 14,
        // marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (0.5) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100)
    },
    subscriptionText: {
        color: '#0E8EE3',
        fontSize: 14,
        fontWeight: 'bold'
    },
    subscriptionContainer: {
        backgroundColor: '#171B35',
        position: 'absolute',
        bottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100),
    },
    subscriptionLinkText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 20,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (9) / 100)
    },
    subscriptionLinkTextSmall: {
        color: 'grey',
        fontSize: 8,
        textAlign: 'left',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (9) / 100)
    },
    subscriptionButton: {
        alignSelf: 'center',
        borderRadius: 3,
        marginRight: 10,
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
        backgroundColor: '#0E8EE3',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (30) / 100)
    },
    subscriptionLinkButtonText: {
        alignSelf: 'center',
        color: 'white',
        textAlign: 'center',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100)
    },
    /********************************* */
    referralHeader: {
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        justifyContent: 'flex-start',
    },
    referralBack: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontWeight: '500',
    },
    referralCard: {
        // backgroundColor: '#B6C5D0',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        borderRadius: 16,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (9) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (68) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100)
    },
    referralCardHeader: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 25,
        marginHorizontal: 15,
    },
    referralLogo: {
        alignSelf: 'center',
        marginTop: 15
    },
    referralText: {
        fontSize: 16,
        textAlign: 'justify',
        marginTop: 24,
        marginHorizontal: 15
    },
    referralLinkContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (5) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (74) / 100),
    },
    referralLinkText: {
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 10,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100)
    },
    referralLinkButton: {
        margin: 3,
        borderRadius: 3,
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        backgroundColor: 'black',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (20) / 100)
    },
    referralLinkButtonText: {
        color: 'white',
        textAlign: 'center',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100)
    },
    referralShare: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        margin: 15
    },
    referralSocial: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (13) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (13) / 100)
    },
    referralIcon: {
        alignSelf: 'center',
        marginTop: 5
    },
    /************************ */
    paymnetPayUsing: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (9) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
    },
    TextCenterWhite24: {
        color: 'white',
        fontSize: 24,
        alignSelf: 'center'
    },
    paymentCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
    },
    paymnetText: {
        fontSize: 14,
        alignSelf: 'center',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
    },
    paymentCardHeader: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
    },
    cardButton: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (25) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
    },
    cardText: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    cardFormText: {
        color: 'white',
        fontSize: 14,
        // backgroundColor:'red',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)
    },
    cardInputField: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        marginTop: 5,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100)
    },
    cardInputDate: {
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        borderRadius: 8,
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (23) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        marginTop: 5,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100)
    },
    addCardButton: {
        backgroundColor: '#0E8EE3',
        borderRadius: 8,
        position: 'absolute',
        bottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        alignSelf: 'center',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100)
    },
    /************************* */
    searchTitleText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    searchRating: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (0.5) / 100),
    },
    searchRatingText: {
        color: 'white',
        fontSize: 12,
        marginRight: 5
    },
    /*********************** */
    currentPlanHeader: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
    },
    planCard: {
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        borderRadius: 16,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (53) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100),
    },
    planCardHeaderContainer: {
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        backgroundColor: '#3E4966',
        height: 30,
        width: 116,
        borderRadius: 4,
    },
    planCardHeaderContainerY: {
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        backgroundColor: '#b32c39',
        height: 30,
        width: 116,
        borderRadius: 4,
    },
    planCardHeader: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: 'bold',
    },
    planCurrencyText:{
        fontSize: 32, lineHeight: 37, color: 'white' 
    },
    planCurrencyTextR:{
        fontSize: 20, lineHeight: 37, color: 'white' , paddingLeft: 5
    },
    planPointsText:{
        fontSize: 14, lineHeight: 17, color: 'white'
    },
    planPointsDate:{
        fontSize: 14, 
        lineHeight: 17, 
        color: '#abb1bf',
    },
    /********************** */
    notificationTitleText: {
        color: 'grey',
        fontSize: 24,
        fontWeight: 'bold'
    },
    notificationRating: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (0.5) / 100),
    },
    notificationRatingText: {
        color: 'grey',
        fontSize: 12,
        marginRight: 5
    },
    notificationContentRow: {
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (12) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
    },
    notificationContentRowLeft: {
        alignSelf: 'center',
        marginRight: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
    },
    notificationContentRowCenter: {
        paddingTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4.5) / 100),
        alignSelf: 'flex-start'
    },
    notificationContentRowCenterNew: {
        height: 38,
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (60) / 100),
        color: 'yellow',
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 19,
    },
    notificationContentRowCenterWhite: {
        height: 38,
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (60) / 100),
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 19,
    },
    notificationContentRowCenterText: {
        color: 'white',
        fontSize: 16,
    },
    aboutHeader: {
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
    },
    aboutText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontWeight: 'bold',
    },
    aboutCard: {
        backgroundColor: 'black',
        opacity: 0.7,
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        borderRadius: 16,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (64) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100),
    },
    aboutCardText: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 15,
    },
    aboutCardContent: {
        color: 'white',
        fontSize: 16,
        textAlign: 'justify',
        marginTop: 24,
        marginHorizontal: 15
    },
    atmCard: {
        borderRadius: 16,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (24) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
    },
    atmCardNumber: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (66) / 100),
    },
    atmCardText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 30
    },
    atmBottomContent: {
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
    },
    atmCardHolder: {
        color: '#C4C4C4',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    atmCardName: {
        color: '#888888',
        fontSize: 14,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    atmBottomButton: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
    },
    /****************************** */
    SelectCard: {
        borderRadius: 16,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (24) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
    },
    selectCardContent: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (66) / 100),
    },
    selectCardName: {
        color: 'white',
        fontSize: 14,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    selectCardBottomContent: {
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    deletedCard: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (0.5) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (13) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    deletedIcon: {
        alignSelf: 'center',
        marginRight: 5
    },
    deleteText: {
        color: '#84848F',
        fontSize: 12,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
    },
    /******************************************* */
    leaderBoardHeader: {
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
    },
    leaderBoardCard1: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (9) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100),
    },
    leaderBoardImage: {
        alignSelf: 'center', marginLeft: 5, height: 56, width: 56
    },
    leaderBoardCol: {
        flexDirection: 'column', justifyContent: 'center', marginLeft: 10
    },
    leaderBoardRight: {
        // color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        right: 20,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (9) / 100),
        fontSize: 24
    },
    /********************************************** */
    storyScreenHeader: {
        flexDirection: 'row',
        position: 'absolute',
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        justifyContent: 'flex-start',
    },
    storyScreenContainer: {
        position: 'absolute',
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (75) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
    },
    storyScreenCard1: {
        position: 'relative',
        // backgroundColor: '#F4E1A6',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 5 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 5,
            },
        }),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (43) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    storyScreenCard1Header: {
        flexDirection: 'row',
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        justifyContent: 'space-between',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
    },
    storyScreenCard1Text: {
        color: 'white',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
        fontSize: 30,
        fontWeight: 'bold',
    },
    storyScreenCard1Enable: {
        alignSelf: 'center',
        position: 'absolute',
        right: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
    },
    storyScreenCard1EnabledButton: {
        width: 70,
        height: 28,
        borderRadius: 20
    },
    storyScreenCard1EnableButton: {
        backgroundColor: 'grey',
        width: 70,
        height: 28,
        borderRadius: 20
    },
    storyScreenCard1EnabledButtonText: {
        color: 'white',
        position: 'absolute',
        left: 8,
        lineHeight: 30,
        fontSize: 8,
        fontWeight: 'bold',
    },
    storyScreenCard1EnableButtonText: {
        color: 'white',
        position: 'absolute',
        right: 10,
        lineHeight: 30,
        fontSize: 8,
        fontWeight: 'bold',
    },
    storyParrotCircle: {
        backgroundColor: 'black',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 1 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 1,
            },
        }),
        borderRadius: 20,
        position: 'absolute',
        alignSelf: 'center',
        right: 0,
        height: 32,
        width: 32
    },
    storyParrotCircleEnable: {
        backgroundColor: 'black',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 1 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 1,
            },
        }),
        borderRadius: 20,
        position: 'absolute',
        alignSelf: 'center',
        height: 32,
        width: 32
    },
    storyOverview: {
        color: 'white',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontSize: 20,
        fontWeight: '500'
    },
    storyOverviewText: {
        color: 'white',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        // marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontSize: 16,
        textAlign: 'justify',
    },
    storyEpisodesCard: {
        ...Platform.select({
            ios: {
                shadowOffset: { height: 4 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 4,
            },
        }),
        position: 'absolute',
        backgroundColor: '#3F0715',
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (35) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (51) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    storyEpisodesText: {
        color: 'white',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (1) / 100),
        fontSize: 20,
        fontWeight: '500'
    },
    storyEpisodeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6.5) / 100),
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
    },
    storyEpisodeRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6.5) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
    },
    storyEpisodeImage: {
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (10) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (10) / 100),
        backgroundColor: '#F4E1A6'
    },
    storyEpisodeList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6.5) / 100),
        // backgroundColor:'red'
    },
    storyEpisodeNumber: {
        color: 'white',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (64) / 100),
        // marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontSize: 14,
        textAlign: 'justify',
    },
    storyEpisodeDescription: {
        color: 'white',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (60) / 100),
        // marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontSize: 12,
        textAlign: 'justify',
    },
    storyEpisodeNumberLock: {
        color: 'white',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (70) / 100),
        // marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontSize: 14,
        textAlign: 'justify',
    },
    storyEpisodeDescriptionLock: {
        color: 'white',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (70) / 100),
        // marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontSize: 12,
        textAlign: 'justify',
    },
    storyLeaderboardCard: {
        position: 'absolute',
        backgroundColor: '#650722',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 3 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 3,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (63) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (103) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    storyLeaderboardContent: {
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (40) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (27) / 100),
    },
    storyLeaderboardHeader: {
        color: 'white',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontSize: 20,
        fontWeight: '500'
    },
    storyLeaderboardCardList: {
        // backgroundColor: '#E5AD0E',
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100),
    },
    storyLeaderboardCardListImage: {
        alignSelf: 'center', marginLeft: 5, height: 40, width: 40
    },
    storyLeaderboardCardListName: {
        flexDirection: 'column', justifyContent: 'center', marginLeft: 10
    },
    storyLeaderboardCardListText: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        right: 20,
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        fontSize: 24
    },
    seeMoreButton: {
        ...Platform.select({
            ios: {
                shadowOffset: { height: 5 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 5,
            },
        }),
        borderRadius: 40,
        backgroundColor: '#650722',
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
        marginVertical: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
    },
    seeMoreButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
    },
    instructionText: {
        color: 'white',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        fontSize: 20,
        fontWeight: '500'
    },
    instructionTextContent: {
        color: 'white',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginBottom: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
        fontSize: 16,
    },
    storyTagsCard: {
        position: 'absolute',
        backgroundColor: '#8E2A43',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 1 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 1,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (143) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (43) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
    },
    storyTagsHeader: {
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (27) / 100),
    },
    storyTagsButton: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (4) / 100),
    },
    storyTagsButtonText: {
        color: 'white',
        backgroundColor: '#39111B',
        borderRadius: 18,
        lineHeight: 30,
        paddingHorizontal: 15,
        height: 30,
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 14,
        fontWeight: '500'
    },
    /*************************************** */
    gameProgressCard: {
        ...Platform.select({
            ios: {
                shadowOffset: { height: 4 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 4,
            },
        }),
        position: 'absolute',
        backgroundColor: '#01444F',
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (43) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    gameProgressCardHeader: {
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (27) / 100),
    },
    gameProgressCardText: {
        color: 'white',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        fontSize: 20,
        fontWeight: '500'
    },
    gameProgressCardPercent: {
        color: 'white',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        fontSize: 16,
        textAlign: 'right',
        fontWeight: '300'
    },
    gameProgressBarFull: {
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        backgroundColor: '#727272',
        height: 12
    },
    gameProgressBar: {
        width: `72%`,
        backgroundColor: '#ffffff',
        height: 12
    },
    gameInstructionCard: {
        position: 'absolute',
        backgroundColor: '#015C6B',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 3 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 3,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (40) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (43) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    gameInstructionCardHeader: {
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (27) / 100),
    },
    gameInstructionCardTitle: {
        color: 'white',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        fontSize: 20,
        fontWeight: '500'
    },
    gameInstructionCardText: {
        color: 'white',
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        fontSize: 16,
    },
    gameTagsCard: {
        position: 'absolute',
        backgroundColor: '#028095',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (60) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (43) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
    },
    gameTagsCardContent: {
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (27) / 100),
    },
    gameTagsCardButton: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (4) / 100),
    },
    gameTagsCardButtonText: {
        color: 'white',
        backgroundColor: '#01333C',
        borderRadius: 18,
        lineHeight: 30,
        paddingHorizontal: 15,
        height: 30, 
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 14,
        fontWeight: '500'
    },
    /*********************************************** */
    PayUsingHeader: {
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowOffset: { height: 2 },
                // shadowColor: 'grey',
                // shadowOpacity: 1
            },
            android: {
                elevation: 2,
            },
        }),
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (8) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
        justifyContent: 'flex-start',
    },
    payUsingAmount: {
        backgroundColor: 'black',
        opacity: 0.5,
        borderRadius: 8,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (9) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (11) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (17) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (78) / 100),
    },
    payUsingAmountHeader: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (66) / 100),
    },
    payUsingAmountHeaderText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 17
    },
    payUsingAmountContent: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (2) / 100),
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
        width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (66) / 100),
    },
    payUsingAmountDollar: {
        color: '#7BCFF0',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 47
    },
    payUsingAmountNumber: {
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 47
    },
    payUsingAmountText: {
        color: '#7BCFF0',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 47
    },
    payUsingAlignLogo: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    payUsingButtonText: {
        fontSize: 20,
        lineHeight: 25
    },
    /********************************** */
    searchBar: {
        marginHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (5) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8) / 100),
        borderBottomWidth: 1,
        borderBottomColor: '#20203E',
    },
    searchBarText: {
        marginLeft: '5%', fontSize: 20, color: 'white', textAlign: 'left', width: '75%'
    },
    searchBarLogo: {
        alignSelf: 'center', position: 'absolute', right: 10
    },
    searchHorizontalContent: {
        marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (4) / 100)
    },
    searchHorizontalContentImage: {
        height: 160,
        width: 120,
        marginLeft: 20,
        resizeMode: 'stretch'
    },
    searchResultContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (12) / 100),
        height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (16) / 100),
    },
    searchResultContentLeft: {
        alignSelf: 'center',
        marginRight: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (6) / 100),
    },
    searchResultContentCenter: {
        paddingTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4.5) / 100),
        alignSelf: 'flex-start'
    },
    searchResultContentCenterText: {
        height: 19,
        color: 'white',
        fontSize: 16,
        lineHeight: 19,
    },

    /************************ */

    // searchContainer: {
    //     marginVertical: 20,
    //     height: 50,
    //     width: '92%',
    //     borderRadius: 10,
    //     backgroundColor: '#404260',
    //     marginHorizontal: '4%',
    // },
    // categoryContainer: {
    //     marginVertical: 22,
    //     height: 80,
    //     width: '70%',
    //     borderRadius: 10,
    //     backgroundColor: '#303147',
    //     marginHorizontal: '4%',
    // },
    // searchText: {
    //     width: '100%',
    //     height: '100%',
    //     fontSize: 18,
    //     fontWeight: '400',
    //     textAlignVertical: 'center',
    //     paddingLeft: 20,
    //     color: '#F4C5D6',
    // },
    // categoryText: {
    //     width: '100%',
    //     height: '100%',
    //     fontSize: 18,
    //     fontWeight: '400',
    //     textAlignVertical: 'center',
    //     paddingLeft: 20,
    //     color: '#FCF5CA',
    // },
    // highlight: {
    //     fontWeight: '700',
    // },
    // button: {
    //     backgroundColor: 'green',
    //     paddingHorizontal: 20,
    //     paddingVertical: 15,
    //     marginTop: 15,
    // },
    // buttonText: {
    //     color: '#fff',
    //     fontWeight: 'bold',
    // },

});
export default styles;