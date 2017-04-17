import AndroidWifiModule from 'react-native-android-wifi';


export class WifiService {

    static getNetworks() {
        return new Promise(function(resolve, error){
            return AndroidWifiModule.loadWifiList(
                (data) => {resolve(JSON.parse(data))},
                (error) => {reject(error)}
            )
        })
    }
}
