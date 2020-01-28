import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';
import ScarletScreen from './ScarletScreen';
import GreyScreen from './GreyScreen';

const App = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key='scarlet'
                    component={ScarletScreen}
                    title='scarlet'
                    initial />

                <Scene key='grey'
                    component={GreyScreen}
                    title='grey' />
            </Scene>

        </Router>
    )
}