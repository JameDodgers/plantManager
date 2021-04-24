import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import { 
  RectButton, 
  RectButtonProps
} from 'react-native-gesture-handler';

import { SvgFromUri } from 'react-native-svg'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export default ({data, ...rest} : PlantProps) => {
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <SvgFromUri
        uri={data.photo}
        width={50}
        height={50}
      />
      <Text style={styles.title}>
        {data.name}
      </Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>
          Regar às
        </Text>
        <Text style={styles.time}>
          {data.hour}
        </Text>
      </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.shape,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    marginVertical: 5,
  },
  title: {
    flex: 1,
    fontFamily: fonts.heading,
    marginLeft: 10,
    fontSize: 17,
    color: colors.heading,
  },
  details: {
    alignItems: 'flex-end',

  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  }
})