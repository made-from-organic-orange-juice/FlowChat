//Libraries
import React, { useRef, useEffect, useState, useContext, FC } from 'react';
import { Animated } from 'react-native';

// Includes
import { Context as AuthContext } from '../../context/AuthContext';
import { ErrorProps } from '../../types';

// Styles
import {
  AnimatedErrorContainer,
  ErrorContainer,
  ErrorMessage,
  MainContainer,
} from './styles';

const ErrorBox: FC<ErrorProps> = ({ onError }) => {
  const [isRunningAnimation, setIsRunningAnimation] = useState<Boolean>(false);
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
      if (onError) {
        onError();
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
  }, [clearErrorMessage, isRunningAnimation, onError, state]);

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
