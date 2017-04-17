import AndroidWifiModule from 'react-native-android-wifi';
import { Actions } from 'react-native-router-flux';

import React, { Component } from 'react';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    List,
    ListItem,
    Spinner,
    Button,
    Badge,
    Icon,
    Text,
    Left,
    Right
} from 'native-base';

import { NetworkComponentMixin } from '../../mixins/NetworkComponentMixin';


export class WifiNetworksComponent extends NetworkComponentMixin {
    getAction(network) {
        if (network.SSID == this.state.connectedNetwork) {
            return (
                <Button style={styles.actionButton} primary>
                  <Text style={styles.actionText}>Share</Text>
                </Button>
            )
        } else{
            return (
                <Button onPress={Actions.test}
                        style={styles.actionButton}
                        primary
                        bordered>
                  <Text style={styles.actionText}>Connect</Text>
                </Button>
            )
        }
    }
    render() {
        if (this.state.isReady){
            return (
                <List dataArray={this.state.networks}
                      renderRow={(network) =>
                                 <ListItem>
                                       <Left>
                                             <Text>{network.SSID}</Text>
                                        </Left>
                                        <Right>
                                              { this.getAction(network) }
                                        </Right>
                                  </ListItem>
                              }>
                </List>
            )
        }
        return (<Spinner color="blue"></Spinner>)
    }
}


const styles = {
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        flex: 1,
        textAlign: "center",
        fontSize: 13,
    },
    actionButton: {
        width: 90,
        marginRight: 0
    }
};
