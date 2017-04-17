import AndroidWifiModule from 'react-native-android-wifi';


const initialState = {
    networks: []
}

export default function (state = initialState, action) {
    return initialState;
    // let wifiNetworks = AndroidWifiModule.loadWifiList(
    //     (wifiStringList) => {
    //         let wifiArray = JSON.parse(wifiStringList);
    //         return wifiArray
    //     },
    //     (error) => {
    //         return error
    //     }
    // )
    // if (wifiNetworks) {
    //     return {"networks": wifiNetworks};
    // } else {
    //     return initialState;
    // }
}
