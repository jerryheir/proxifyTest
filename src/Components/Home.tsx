import React from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { connect } from 'react-redux';
import { toggleMenu } from '../Actions/mainAction';
import { Icon } from 'native-base';
import { styles } from '../Styles';

interface Props {
  open: boolean;
  toggleMenu: Function;
  screen: string;
}
interface State {}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props){
    super(props);
    this.animatedPosition = new Animated.ValueXY({ x: 0, y: 0 })
  }
  animatedPosition: Animated.ValueXY;
  componentDidUpdate(prevProps: Props){
    if (prevProps.open !== this.props.open){
      this.toggle()
    }
  }
  toggle = () => {
    const { open } = this.props;
    const object = { useNativeDriver: false };
    const animatedPosition = open ?         
    {
      toValue: { x: 0, y: 0 },
      duration: 300,
    } : {
      toValue: { x: 260, y: -260 },
      duration: 400,
    }
    Animated.timing(
      this.animatedPosition,
      {
        ...animatedPosition,
        ...object
      }
    ).start()
  }
  render() {
    const { toggleMenu, screen } = this.props;
    return (
      <Animated.View style={[styles.homeAnimatedContainer, {
        left: this.animatedPosition.x, right: this.animatedPosition.y,
        transform: [{ rotate: this.animatedPosition.x.interpolate({
          inputRange: [0, 200],
          outputRange: [0, -0.09]
        }) }]
      }]}>
        <View style={styles.homeHeader}>
          <Pressable
          onPress={()=>toggleMenu()}
          style={styles.homePressable}
          >
            <Icon 
            type={"Feather"}
            name={"menu"}
            style={styles.homeHeaderIcon}
            />
          </Pressable>
          <Text style={styles.homeHeaderText}>{screen}</Text>
        </View>
      </Animated.View>
    );
  }
};

const mapStateToProps = ({ main }: any) => ({
  open: main.open,
  screen: main.screen
})

export default connect(mapStateToProps, {
  toggleMenu
})(Home);