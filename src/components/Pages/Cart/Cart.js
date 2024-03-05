import React, { useContext } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { CartContext } from '../../../Context/CartContext';
import CardItem from '../../CardItem/CardItem';

export default function Cart() {

    const { cart, addItemCart, removeItemCart } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={() => <Text style={styles.textInf}>Nenhum item no carrinho...</Text>}
                renderItem={({item}) => ( 
                    <CardItem data={item} 
                        addAmount={() => addItemCart(item)} 
                        removeAmount={() => removeItemCart(item)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 14
    },
    textInf: {
        textAlign: 'center'
    }
});
