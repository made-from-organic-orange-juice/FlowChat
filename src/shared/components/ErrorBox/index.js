//Libraries
import React, { useRef, useEffect, useState, useContext } from 'react';
import { Animated } from 'react-native';

// Includes
import { Context as AuthContext } from '../../context/AuthContext';

// Styles
import {
  AnimatedErrorContainer,
  ErrorContainer,
  ErrorMessage,
  MainContainer,
} from './styles';

const ErrorBox = ({ stopLoading }) => {
  const [isRunningAnimation, setIsRunningAnimation] = useState(false);
  const { state, clearErrorMessage } = useContext(AuthContext);

  /**
   * The are for animating the error container in and out.
   * We are using ref for persist purpose
   */

  const animatedOpacityValue = new Animated.Value(0);
  const animatedOpacityValueRef = useRef(animatedOpacityValue);

  /**
   * Animate the error message when we receive one,
   * and make sure we can't spam the message multiples times in a row.
   */
  useEffect(() => {
    if (state.errorMessage !== '') {
      // if we need to stop loading somewhere...
      if (stopLoading) {
        stopLoading();
      }
      // Only run the animation when its finished!
      if (!isRunningAnimation) {
        setIsRunningAnimation(true);
        Animated.timing(animatedOpacityValueRef.current, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();

        setTimeout(() => {
          Animated.timing(animatedOpacityValueRef.current, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            clearErrorMessage();
            setIsRunningAnimation(false);
          });
        }, 5000);
      }
    }
  }, [clearErrorMessage, isRunningAnimation, state, stopLoading]);

  return (
    <MainContainer>
      {state.errorMessage ? (
        <AnimatedErrorContainer opacity={animatedOpacityValueRef.current}>
          <ErrorContainer>
            <ErrorMessage> {state.errorMessage} </ErrorMessage>
          </ErrorContainer>
        </AnimatedErrorContainer>
      ) : null}
    </MainContainer>
  );
};

export default ErrorBox;
