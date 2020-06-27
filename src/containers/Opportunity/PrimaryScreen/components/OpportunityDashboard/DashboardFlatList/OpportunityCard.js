import React from 'react';
import * as Animatable from 'react-native-animatable';
import {Card, Subheading} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OpportunityCard = props => {
  const {data} = props;
  return (
    <Animatable.View>
      <Card>
        <Card.Title
          title={<Subheading>{data.name}</Subheading>}
          right={() => <FontAwesome name="fire" size={18} color="yellow" />}
        />
      </Card>
    </Animatable.View>
  );
};

export default OpportunityCard;
