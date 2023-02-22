import React from 'react';
import { styles } from './styles';
import { Text } from 'react-native';

export function PostUsername({ username }) {
    return (
        <Text style={styles.postUsername}>{username}</Text>
    );
}