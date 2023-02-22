import React from 'react';
import { styles } from './styles';
import { Text } from 'react-native';

export function PostDescription({ description }) {
    return (
        <Text style={styles.description}>{description}</Text>
    );
}