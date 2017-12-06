import React, {
    Component
} from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import {
  NavigationActions
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import session from './../common/services/session.service';
import { List, ListItem } from 'react-native-elements'

export default class MoreScreen extends Component {

  state = {
    activities: [],
    refreshing: false
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="menu" size={24} color={tintColor} />
    )
  }

  render() {
    const list = [
      {
        name: 'Blogs',
      },{
        name: 'Groups',
      },{
        name: 'Help & Support',
      },{
        name: 'Autoplay videos',
        switchButton: true,
      },{
        name: 'Points animation',
        switchButton: true,
      },{
        name: 'Invite',
      },{
        name: 'Settings',
        onPress: this.onPressSettings
      },{
        name: 'Logout',
        onPress: this.onPressLogout
      },
    ];

    return (
      <View style={styles.screen}>
        <List containerStyle={{flex:1 }}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                switchButton={l.switchButton}
                hideChevron ={true}
                onPress= {l.onPress}
              />
            ))
          }
        </List>
        <View style={styles.footer}>
          <Text style={styles.version} textAlign={'center'}>v1.0.0 (201712)</Text>
          <View style={styles.footercol}>
            <Text style={styles.link}>FAQ</Text>
            <Text style={styles.link}>Code</Text>
            <Text style={styles.link}>Terms</Text>
            <Text style={styles.link}>Privacy</Text>
          </View>
        </View>
      </View>
    );
  }

  onPressSettings = () => {
    this.props.navigation.navigate('Settings');
  }

  onPressLogout = () => {
    session.clear();
    const loginAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })
      ]
    })

    this.props.navigation.dispatch(loginAction);
  }
}

const styles = StyleSheet.create({
	screen: {
    //paddingTop: 20,
    backgroundColor: '#FFF',
    flex: 1,
  },
  footer: {
    alignItems: 'stretch',
    width: '100%',
    height: 50,
  },
  footercol: {

    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  version: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});