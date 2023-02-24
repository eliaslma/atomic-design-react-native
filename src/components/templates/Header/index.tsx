import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import { ButtonIcons } from '../../atoms/ButtonIcons';
import {
    MessengerIcon,
    CameraIcon,
    LogoIcon,
    IgtvIcon,
} from '../../../global/styles/icons';

export function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headerSide}>
                <ButtonIcons icon={CameraIcon}/>
            </View>

            <LogoIcon />

            <View style={styles.headerSide}>
                <IgtvIcon />
                <MessengerIcon style={styles.messengerIcon} />
            </View>
        </View>
    );
}