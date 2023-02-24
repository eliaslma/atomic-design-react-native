import React from 'react';
import { Image } from 'react-native';

export function ProfileImage({item}){
    return(
        <Image source={item.avatar} />
    );
}