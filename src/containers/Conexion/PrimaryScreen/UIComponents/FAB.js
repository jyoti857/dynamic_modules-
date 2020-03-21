import React, {useState} from 'react';
import {FAB, Portal, Provider, withTheme} from 'react-native-paper';

const FABUI = props => {
  const [open, setOpen] = useState(false);

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'account-plus' : 'plus'}
          actions={[
            {
              icon: 'account-multiple-plus',
              label: 'Individual',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'office-building',
              label: 'Organization',
              onPress: () => console.log('Pressed email'),
            },
          ]}
          onStateChange={({open}) => setOpen(open)}
        />
      </Portal>
    </Provider>
  );
};

export default FABUI;
