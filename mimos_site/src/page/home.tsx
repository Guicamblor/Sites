import styles from '../style';
import { 
  Main, 
  NavBar, 
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer 
} from '../components';
import MenuBar from '../components/cpt_menu';


const Home2 = () => (
    <div className="text-white bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <MenuBar/>
        </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Main/>
        </div>
        </div>
    </div>
)

export default Home2