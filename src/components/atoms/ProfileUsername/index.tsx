import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export function ProfileUsername({item}){
    return(
        <Text style={styles.username}>{item.name}</Text>
    );
}