import React from 'react';
import ReactNative from 'react-native';

const {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} = ReactNative;

const StylePropType = React.PropTypes.oneOfType([
  React.PropTypes.array,
  React.PropTypes.object,
]);

const PopoverTooltipItem = ({ onPress, containerStyle, label, labelStyle }) => (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      {
        typeof label === 'string' ?
          <Text style={[labelStyle]}>{label}</Text> :
          label()
      }
    </TouchableOpacity>
);

PopoverTooltipItem.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
  ]).isRequired,
  containerStyle: StylePropType,
  labelStyle: StylePropType,
};

PopoverTooltipItem.defaultProps = {
  labelStyle: null,
  containerStyle: null,
};

export default PopoverTooltipItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
