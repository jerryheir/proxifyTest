import React from 'react';
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { styles } from '../Styles';
import Home from '../Components/Home';
import SideBar from '../Components/SideBar';

interface Props {}

interface State {}

class Routes extends React.Component<Props, State> {
    render() {
        return (
            <SafeAreaView 
            style={styles.routeContainer}
            forceInset={{ bottom: 'never' }}>
                <View style={styles.routeInnerContainer}>
                    <SideBar />
                    <Home />
                </View>
            </SafeAreaView>
        )
    }
}

export default Routes;
