import { Actions } from 'react-native-router-flux';

import React, { Component } from 'react';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Badge,
    Icon,
    Text
} from 'native-base';


export class AppFooter extends Component {
    render() {
        return (
            <Footer >
              <FooterTab>
                <Button onPress={ Actions.sharedWifi }>
                  <Icon name="md-locate"></Icon>
                  <Text>Shared Networks</Text>
                </Button>
                <Button onPress={ Actions.wifiNetworks } badge active>
                  <Badge><Text>{this.props.networks.length}</Text></Badge>
                  <Icon name="wifi"></Icon>
                  <Text>My Networks</Text>
                </Button>
              </FooterTab>
            </Footer>
        )
    }
}
