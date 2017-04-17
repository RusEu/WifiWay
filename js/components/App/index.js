import React, { Component } from 'react';

import { Actions, Scene, Router } from 'react-native-router-flux';
import {
    Container,
    Content,
    Header,
    List,
    ListItem,
    H1,
    Button,
    Text,
    Icon,
    Left,
    Right
} from 'native-base';

import { WifiNetworksComponent } from '../WifiNetworksComponent';
import {
    SharedWifiNetworksComponent
} from '../SharedWifiNetworksComponent';
import { AppFooter } from '../AppFooter';

import { NetworkComponentMixin } from '../../mixins/NetworkComponentMixin';


const styles = {
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: "#f8f8f8"
    }
};


export class WifiWay extends NetworkComponentMixin {
    render() {
        return (
              <Container>
                <Header style={styles.header}>
                  <Text style={styles.headerText}>WifiWay</Text>
                </Header>
                <Router>
                  <Scene key="root" hideNavBar>
                    <Scene key="sharedWifi"
                           component={SharedWifiNetworksComponent}
                           title="Shared Networks"
                           />
                    <Scene key="wifiNetworks"
                           title="My Networks"
                           component={WifiNetworksComponent}
                           initial/>
                  </Scene>
                </Router>
                <AppFooter networks={this.state.networks}></AppFooter>
              </Container>
        );
    }
}
