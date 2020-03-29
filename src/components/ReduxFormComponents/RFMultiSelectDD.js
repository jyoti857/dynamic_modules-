import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, ScrollView} from 'react-native';
import {
  Card,
  Checkbox,
  Avatar,
  Subheading,
  withTheme,
  Button,
  Chip,
  Searchbar,
  Divider,
} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import _ from 'lodash';
import {compose} from 'redux';
import {Row, Col} from 'react-native-easy-grid';

// const UUIDV1 = require('uuid/v1');

function Item({id, item, selected, onSelect, colors, icon, avatarColor}) {
  return (
    <Card onPress={() => onSelect(id)}>
      <Card.Title
        title={<Subheading>{item.label}</Subheading>}
        titleStyle={{marginLeft: 10}}
        left={props => (
          <Avatar.Icon
            {...props}
            icon={() => (
              <FontAwesome
                name={icon || 'asterisk'}
                color="white"
                solid
                size={20}
              />
            )}
            size={50}
            style={{backgroundColor: avatarColor || colors.action}}
          />
        )}
        right={props => (
          <Checkbox
            {...props}
            status={selected ? 'checked' : 'unchecked'}
            onPress={() => onSelect(id)}
            color={colors.primary}
          />
        )}
      />
    </Card>
  );
}

const RenderChip = ({data, icon, onSelect, avatarColor, colors}) => {
  if (!_.isEmpty(data)) {
    return data.map(d => (
      <Chip
        mode="outlined"
        icon={() => (
          <FontAwesome
            name={icon || 'asterisk'}
            color={colors.action || colors.primary}
            solid
          />
        )}
        key={Math.random()}
        onClose={() => onSelect(d.value)}
        style={[{borderColor: avatarColor}, styles.chip]}>
        {d.label}
      </Chip>
    ));
  }
  return null;
};

const RFMultiSelectDD = props => {
  const {colors, radius} = props.theme;
  const {input, label, items, icon, onSelect, avatarColor} = props;
  const [showSheet, setShowSheet] = useState(false);
  const [chipData, setChipData] = useState(input.value || []);
  const [searchText, setSearchText] = useState(items);
  useEffect(() => {
    const d = [];
    const values = input.value;
    if (!_.isEmpty(values)) {
      _.forEach(values, id => {
        const i = _.find(items, {value: id});
        if (i) {
          d.push(i);
        }
      });
    }
    setChipData(d);
  }, [input.value, items]);

  return (
    <View>
      <Row>
        <Col>
          <Button
            mode="outlined"
            theme={{roundness: radius.button}}
            onPress={() => setShowSheet(true)}
            icon="arrow-down-drop-circle-outline"
            color="#34495E">
            {label}
          </Button>
        </Col>
      </Row>
      <Row>
        <ScrollView horizontal>
          <RenderChip
            colors={colors}
            icon={icon}
            data={chipData}
            onSelect={onSelect}
            avatarColor={avatarColor}
          />
        </ScrollView>
      </Row>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1.5,
    marginRight: 2,
  },
});

export default compose(withTheme)(RFMultiSelectDD);
