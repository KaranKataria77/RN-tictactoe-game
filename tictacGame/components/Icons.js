/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function Icons({name}) {
    switch (name){
        case 'circle':
            return <Icon name="circle-thin" size={45} color="#f4c724" />
        case 'cross':
            return <Icon name="times" size={45} color="#10a881" />
        default:
            return <Icon name="pencil" size={45} color="#303030" />
    }
}

export default Icons;
