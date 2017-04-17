import AndroidWifiModule from 'react-native-android-wifi';

import { Component } from 'react';

import { WifiService } from '../services';


export class NetworkComponentMixin extends Component{
    state = {"networks": []};

    componentDidMount() {
        this.setInitialState();

    }

    async setInitialState(){
        var state = await WifiService.getNetworks();
        this.setState({"networks": state, "isReady": true});
        AndroidWifiModule.getSSID((ssid) => {
            this.setState({"connectedNetwork": ssid})
        });
    }
}
