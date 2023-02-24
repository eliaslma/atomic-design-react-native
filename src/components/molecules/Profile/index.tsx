import React from 'react';
import { View } from 'react-native';
import { ProfileImage } from '../../atoms/ProfileImage';
import { ProfileUsername } from '../../atoms/ProfileUsername';
import { styles } from './styles';

export function Profile({item}){
    return(
        <View style={styles.profile}>
            <ProfileImage item={item}/>
            <ProfileUsername item={item}/>
        </View>
    );
}