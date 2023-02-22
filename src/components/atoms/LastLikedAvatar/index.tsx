import React from 'react';
import { styles } from '../../../pages/Feed/styles';
import { Image } from 'react-native';

export function LastLikedAvatar({ source }) {
    return (
        <Image source={source} style={styles.lastLiked} />
    );
}