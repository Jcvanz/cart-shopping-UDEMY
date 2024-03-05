import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CardItem({ data, addAmount, removeAmount }) {

    const [amount, setAmount] = useState(data?.amount);

    function handleIncrease() {
        addAmount();
        setAmount(item => item + 1);
    }

    function handleDecrease() {
        removeAmount();
        setAmount(item => item - 1);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Pressable style={styles.btn} onPress={handleDecrease}>
                    <Text>-</Text>
                </Pressable>
                <Text>{amount}</Text>
                <Pressable style={styles.btn} onPress={handleIncrease}>
                    <Text>+</Text>
                </Pressable>
            </View>
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
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    price: {
        fontSize: 16
    },
    amountContainer: {
        marginVertical: 14,
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#168fff',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5
    },
})