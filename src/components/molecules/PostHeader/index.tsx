import React from 'react';
import { styles } from '../../../pages/Feed/styles';
import { View } from 'react-native';
import { PostAvatar } from '../../atoms/PostAvatar';
import { PostUsername } from '../../atoms/PostUsername';
import { PostLocation } from '../../atoms/PostLocation';

export function PostHeader({ username, avatar }) {
    return (
        <View style={styles.postHeader}>
            <PostAvatar source={avatar} />
            <View>
                <PostUsername username={username} />
                <PostLocation />
            </View>
        </View>
    );
}