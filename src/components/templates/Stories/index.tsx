import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Profiles } from '../../organisms/Profiles';

export function Stories({ profiles }) {
    return (
        <View style={styles.stories}>
            <Profiles profiles={profiles}/>
        </View>
    );
}