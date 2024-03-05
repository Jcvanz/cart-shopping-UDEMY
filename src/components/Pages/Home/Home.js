import React, { useContext, useState } from 'react';
import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Product from '../../Product/Product';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../../Context/CartContext';

export default function Home() {

    const { cart, addItemCart } = useContext(CartContext);

    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Coca-cola',
            price: 9.58
        },
        {
            id: '2',
            name: 'Arroz',
            price: 20
        },
        {
            id: '3',
            name: 'Queijo',
            price: 15
        },
        {
            id: '4',
            name: 'Sorvete',
            price: 21.50
        },
        {
            id: '5',
            name: 'Batata palha',
            price: 5.50
        },
    ])

    function handleAddCArt(item) {
        addItemCart(item)
    }
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContainer}>
                <Text style={styles.title}>Lista de produtos</Text>
                <Pressable style={styles.btn} onPress={() => navigation.navigate('Cart')}>
                    <View style={styles.dot}>
                        <Text style={styles.dotText}>
                            {cart?.length}
                        </Text>
                    </View>
                    <Feather name='shopping-cart' size={30} color='#000'/>
                </Pressable>
            </View>
            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Product data={item} addToCart={() => handleAddCArt(item)} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14,
        paddingStart: 14
    },
    cartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333ea',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 2,
        bottom: -2,
        left: -4
    },
    dotText: {
        fontSize: 12,
        color: '#fff'
    },
    list: {
        marginTop: 20
    }
});
