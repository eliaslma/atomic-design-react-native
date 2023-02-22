import React from 'react';
import { styles } from '../../../pages/Feed/styles';
import { Text } from 'react-native';

export function PostDescription({ description }) {
    return (
        <Text style={styles.description}>{description}</Text>
    );
}