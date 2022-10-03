import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3f06355-bd86-408f-b1be-e9ddfd69dce3"
        }}
        style={styles.ImageBackground_579_2346}
      />
      <View style={styles.View_579_2502}>
        <Text style={styles.Text_579_2502}>Subscribe</Text>
      </View>
      <View style={styles.View_579_2516}>
        <Text style={styles.Text_579_2516}>Select subscription deal</Text>
      </View>
      <View style={styles.View_579_2519}>
        <Text style={styles.Text_579_2519}>Cancel subscription</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/446e00b3-4393-4dea-8753-9334d8eb2d4a"
        }}
        style={styles.ImageBackground_579_2503}
      />
      <View style={styles.View_579_2506}>
        <View style={styles.View_579_2507} />
        <View style={styles.View_579_2508}>
          <Text style={styles.Text_579_2508}>Until canceled</Text>
        </View>
        <View style={styles.View_579_2510}>
          <Text style={styles.Text_579_2510}>$9.99/month</Text>
        </View>
      </View>
      <View style={styles.View_579_2511}>
        <View style={styles.View_579_2512} />
        <View style={styles.View_579_2513}>
          <Text style={styles.Text_579_2513}>
            Billed every three months until canceled
          </Text>
        </View>
        <View style={styles.View_579_2515}>
          <Text style={styles.Text_579_2515}>$7.99/month</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25a57815-37a1-49d5-a04c-4a2f23caea64"
        }}
        style={styles.ImageBackground_579_2517}
      />
      <View style={styles.View_579_2518}>
        <Text style={styles.Text_579_2518}>Pay Subscription</Text>
      </View>
      <View style={styles.View_2806_3881}>
        <View style={styles.View_2806_3882} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(241, 241, 241, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_579_2346: {
    width: wp("87%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_579_2502: {
    width: wp("50%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    justifyContent: "center"
  },
  Text_579_2502: {
    color: "rgba(104, 34, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_579_2516: {
    width: wp("50%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    justifyContent: "center"
  },
  Text_579_2516: {
    color: "rgba(24, 24, 24, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_579_2519: {
    width: wp("50%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    justifyContent: "center"
  },
  Text_579_2519: {
    color: "rgba(24, 24, 24, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_579_2503: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_579_2506: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("29%")
  },
  View_579_2507: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_579_2508: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_579_2508: {
    color: "rgba(238, 73, 123, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_579_2510: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_579_2510: {
    color: "rgba(104, 34, 102, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_579_2511: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("58%")
  },
  View_579_2512: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_579_2513: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_579_2513: {
    color: "rgba(238, 73, 123, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_579_2515: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_579_2515: {
    color: "rgba(104, 34, 102, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_579_2517: {
    width: wp("61%"),
    height: hp("7%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_579_2518: {
    width: wp("37%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_579_2518: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_2806_3881: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2806_3882: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
