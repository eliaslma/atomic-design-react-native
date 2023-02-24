import React from 'react';
import { profiles } from '../../utils/profiles';
import { styles } from './styles';
import { Posts } from '../../components/templates/Posts';
import { posts } from '../../utils/posts';
import { Stories } from '../../components/templates/Stories';
import { Header } from '../../components/templates/Header';

import {
    View,
} from 'react-native';

export function Feed() {
    return (
        <View style={styles.container}>
            <Header />
            <Stories profiles={profiles} />
            <Posts data={posts} />
        </View>
    );
}