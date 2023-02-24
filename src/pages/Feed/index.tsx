import React from 'react';
import { profiles } from '../../utils/profiles';
import { styles } from './styles';
import { Posts } from '../../components/templates/Posts';
import { posts } from '../../utils/posts';
import { Stories } from '../../components/templates/Stories';

import {
    View,
} from 'react-native';

import {
    MessengerIcon,
    CameraIcon,
    LogoIcon,
    IgtvIcon,
} from '../../global/styles/icons';

export function Feed() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerSide}>
                    <CameraIcon />
                </View>

                <LogoIcon />
 
                <View style={styles.headerSide}>
                    <IgtvIcon />
                    <MessengerIcon style={styles.messengerIcon} />
                </View>
            </View>

            <Stories profiles={profiles}/>
            <Posts data={posts} />

        </View>
    );
}