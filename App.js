import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';
import CartProvider from './src/Context/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Routes/>
      </CartProvider>
    </NavigationContainer>
  );
}