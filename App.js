/**
 * Marica Telecom App
 * v0.90.0
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
} from "react-native";
import SwitchBtn from "./comps/SwitchBtn";
import HelpConnectionBtn from "./comps/HelpConnectionBtn";

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const App = () => {
    const isDarkMode = true; // useColorScheme() === "dark";

    const backgroundStyle = {
        flex: 1,
        backgroundColor: "#00020f",
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#002d2a",
                    maxHeight: 550,
                    borderBottomRightRadius: 60,
                    borderBottomLeftRadius: 60,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        source={require("./assets/imgs/logo-marica2.png")}
                        style={{
                            width: 120,
                            height: 110,
                            resizeMode: "contain",
                            marginTop: 20,
                        }}
                    />
                    <View style={{ paddingVertical: 10 }}>
                        <SwitchBtn />
                    </View>
                </View>
                <View style={{ position: "absolute", bottom: -20, right: 5 }}>
                    <HelpConnectionBtn />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: 24,
    },
});

export default App;

/* ARCHIVES

<View style={{ margin: "10px 0" }}>
                    <SwitchBtn />
                    <Text style={{ color: "#fff" }}>Hello</Text>
                </View>

const Section = ({ children, title }) => {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}
            >
                {children}
            </Text>
        </View>
    );
};

<li className="top-item logo-area text-white">
                            <figure className="">
                                <img
                                    className="logo-img"
                                    src="/img/febront/logo-marica2.png"
                                    width={80}
                                    height={70}
                                    title="logo da Maricá"
                                    alt="logo da Maricá"
                                />
                            </figure>
                        </li>

import RNSimpleOpenvpn, {
    addVpnStateListener,
    removeVpnStateListener,
} from "react-native-simple-openvpn";

    const [connRes, setConnRes] = useState(null);
    const [statusConn, setStatusConn] = useState("disconnected");

    useEffect(() => {
        if (connRes) return;

        const openVPNResult = async function startOvpn() {
            return await RNSimpleOpenvpn.connect({
                remoteAddress: "45.237.71.224 1194",
                ovpnFileName: "maricatelecom",
                assetsPath: "",
            }).catch((err) => {
                setConnRes(err);
                setStatusConn("disconnected");
            });
        };

        if (openVPNResult) {
            setConnRes(openVPNResult);
            setStatusConn("connected");
        }
    }, [connRes]);

    async function stopOvpn() {
        try {
            await RNSimpleOpenvpn.disconnect();
        } catch (error) {
            // ...
        }
    }

    function printVpnState() {
        console.log(JSON.stringify(RNSimpleOpenvpn.VpnState, undefined, 2));
    }

*/
