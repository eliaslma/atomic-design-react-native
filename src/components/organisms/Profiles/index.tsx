import React from 'react';
import { FlatList } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../molecules/Profile';


export function Profiles({ profiles }) {
    return (
        <FlatList
            data={profiles}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.profiles}
            keyExtractor={profile => profile.id}
            renderItem={({ item }) => (
                <Profile item={item}/>
            )}
        />
    );
}