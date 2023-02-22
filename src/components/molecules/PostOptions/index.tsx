import React from 'react';
import { styles } from '../../../pages/Feed/styles';
import { View } from 'react-native';
import { SaveIcon } from '../../../global/styles/icons'
import { ButtonIcons } from '../../atoms/ButtonIcons';

import {
    MessengerIcon,
    FavoriteIcon,
    CommentIcon,
} from '../../../global/styles/icons';

export function PostOptions() {
    return (
        <View style={styles.postOptions}>
            <View style={styles.postOptionsSide}>
                <ButtonIcons icon={MessengerIcon} />
                <ButtonIcons icon={FavoriteIcon} />
                <ButtonIcons icon={CommentIcon} />
            </View>
            <ButtonIcons icon={SaveIcon} />
        </View>
    );
}