import React, {useState} from 'react';
import {Animated} from 'react-native';

const FadeIn = props => {
  const [fadeAnimation] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
    }).start();
  });

  const {style, children} = props;

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnimation,
      }}>
      {children}
    </Animated.View>
  );
};

export default FadeIn;
