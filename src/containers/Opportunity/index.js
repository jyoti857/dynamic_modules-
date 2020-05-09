import React, {useState} from 'react';
import PrimaryScreen from './PrimaryScreen';

const Opportunity = props => {
  const [switchOn, isSwtitchOn] = useState(true);
  return <PrimaryScreen showAll={switchOn} />;
};

export default Opportunity;
