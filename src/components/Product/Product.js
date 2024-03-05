import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Product({ data, addToCart }) {

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>{data.name}</Text>
            <Text>{`R$ ${data.price}`}</Text>
        </View>
        <Pressable style={styles.btnAdd} onPress={addToCart}>
            <Text style={styles.btnText}>+</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#333',
        padding: 15,
        marginBottom: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
    },
    btnAdd: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#168fff',
        borderRadius: 5
    }
});
