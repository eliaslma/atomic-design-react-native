import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SvgProps } from 'react-native-svg';

interface Props{
    icon: React.FC<SvgProps>
}

export function ButtonIcons({icon: Icon}: Props){
    return(
        <TouchableOpacity style={styles.postOptionsIcon}>
            <Icon/>
        </TouchableOpacity>
    );
}