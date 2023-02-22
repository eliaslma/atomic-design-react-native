import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export function PostLiked({ likes }) {
    return (
        <Text style={styles.likes}>{likes}</Text>
    )
}