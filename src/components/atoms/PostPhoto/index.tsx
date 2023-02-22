import React from 'react';
import { Image } from 'react-native';
import { styles } from '../../../pages/Feed/styles';

export function PostPhoto({ source }) {
    return (
        <Image source={source} style={styles.cover} />
    );
}