import React from 'react';
import { profiles } from '../../utils/profiles';
import { styles } from './styles';
import { Posts } from '../../components/templates/Posts';

import {
    View,
    Text,
    Image,
    FlatList
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

            <View style={styles.stories}>
                <FlatList
                    data={profiles}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.profiles}
                    keyExtractor={profile => profile.id}
                    renderItem={({ item }) => (
                        <View style={styles.profile}>
                            <Image source={item.avatar} />
                            <Text style={styles.username}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>

            <Posts />

        </View>
    );
}