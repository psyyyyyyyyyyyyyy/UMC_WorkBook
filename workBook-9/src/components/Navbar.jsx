import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icons";
import styles from './navbar.module.css';

const Navbar = () => {
    const {amount} = useSelector((state) => state.cart);
    return (
        <nav>
            <div className={styles.nav_center}>
                <h3>UMC PlayList</h3>
                <div className={styles.nav_container}>
                    <CartIcon />
                    <div className={styles.amount_container}>
                        <p className={styles.total_amount}>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;