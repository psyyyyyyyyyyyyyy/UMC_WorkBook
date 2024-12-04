import NavBar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems, dispatch])

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <CartContainer />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
export default App;