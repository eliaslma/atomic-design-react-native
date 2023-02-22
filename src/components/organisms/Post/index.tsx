import React from 'react';
import { View } from 'react-native';
import { styles } from '../../../pages/Feed/styles';
import { PostHeader } from '../../molecules/PostHeader';
import { PostPhoto } from '../../atoms/PostPhoto';
import { PostOptions } from '../../molecules/PostOptions';
import { PostAbout } from '../../molecules/PostAbout';
import { PostDescription } from '../../atoms/PostDescription';

export function Post({ item }) {
    return (
        <View style={styles.post}>
            <PostHeader username={item.username} avatar={item.avatar} />
            <PostPhoto source={item.cover} />
            <View style={styles.postFooter}>
                <PostOptions />
                <PostAbout item={item} />
                <PostDescription description={item.description} />
            </View>
        </View>
    );
}