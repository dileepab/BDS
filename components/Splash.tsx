import {useEffect} from 'react';
import {Dimensions, Text, View} from "react-native";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

import SplashImage1 from "./images/svg/splash-image-1";

export default function Splash() {
    const duration = 1500;
    const dimensions = Dimensions.get('window');
    const offsetAnim = useSharedValue({x: -dimensions.width, y: dimensions.height * .9});
    const fadeAnim = useSharedValue(0);

    const anim1 = {
        duration: duration,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
    const shapeStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offsetAnim.value.x}, {translateY: offsetAnim.value.y}],
        };
    });

    useEffect(() => {
        offsetAnim.value = withTiming({x: 0, y: dimensions.height * .3}, anim1);
        fadeAnim.value = withTiming(1, anim1);
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: "#C11D1D", position: 'relative' }}>
            <Animated.View style={[{position: 'absolute'}, shapeStyle]}>
                <SplashImage1 />
            </Animated.View>
            <Animated.View style={{position: 'absolute', opacity: fadeAnim, top: '77%'}}>
                <Text style={{display: 'flex', fontSize: 50, fontWeight: 'bold', color: '#fff', width: dimensions.width, textAlign: 'center'}}>ABCD</Text>
            </Animated.View>
        </View>
    )
}
