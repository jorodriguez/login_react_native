import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

Row = (props) => (
    <View style={styles.container}>
        <Image source={{ uri: '' }} style={this.styles.photo} />
        <Text >
            {`${props.name} ${props.email}`}
        </Text>
    </View>
);

export default Row;