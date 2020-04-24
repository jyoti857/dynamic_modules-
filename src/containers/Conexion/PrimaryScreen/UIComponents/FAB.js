import React, {useState} from 'react';
import {FAB, Portal, Provider, withTheme} from 'react-native-paper';
import {INDIVIDUAL, ORGANIZATION} from '../../constants';
const FABUI = props => {
  const [fabOpen, setFabOpen] = useState(false);
  const {handleConexionCreate} = props;
  const {colors} = props.theme;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={fabOpen}
          icon={fabOpen ? 'account-plus' : 'plus'}
          actions={[
            {
              icon: 'account-multiple-plus',
              label: 'Individual',
              onPress: () => handleConexionCreate(true, INDIVIDUAL),
              style: {backgroundColor: colors.accent, color: '#000'},
            },
            {
              icon: 'office-building',
              label: 'Organization',
              onPress: () => handleConexionCreate(true, ORGANIZATION),
              style: {backgroundColor: colors.accent, color: '#000'},
            },
          ]}
          onStateChange={({open}) => setFabOpen(open)}
        />
      </Portal>
    </Provider>
  );
};

export default withTheme(FABUI);
