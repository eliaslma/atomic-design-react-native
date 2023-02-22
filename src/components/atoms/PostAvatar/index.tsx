import React from 'react';
import { Image } from 'react-native';
import { styles } from '../../../pages/Feed/styles';

export function PostAvatar({ source }) {
    return (
        <Image source={source} style={styles.postAvatar} />
    );
}