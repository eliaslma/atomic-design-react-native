import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import { PostLiked } from '../../atoms/PostLiked';
import { LastLikedAvatar } from '../../atoms/LastLikedAvatar';

export function PostAbout({ item }) {
    return (
        <View style={styles.postAbout}>
            <LastLikedAvatar source={item.lastLiked.avatar}/>
            <PostLiked likes={item.likes}/>
        </View>
    )
}