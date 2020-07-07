import React, {useState, useEffect} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import Lo from 'lodash';
import {FieldArray} from 'redux-form';

const EditOppServicesForm = props => {
  const [fadeValue] = useState(new Animated.Value(0));

  const {serviceLabels} = props;
  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 600,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, [fadeValue]);
  const renderServiceRows = () => {
    if (!Lo.isEmpty(serviceLabels) && serviceLabels.length > 0) {
      return (
        <FieldArray
          name="opp_service_array"
          fieldLabels={serviceLabels}
          component={NumberFAHolder}
        />
      );
    }
  };
};

export default EditOppServicesForm;
