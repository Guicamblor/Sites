import MenuBar from '../components/cpt_menu';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { cardNews } from '../components/cpt_cardNews';


const Home = () => (
    // <div className="text-white bg-primary w-full overflow-hidden">
    <div className="backGroudDiv">
        <div>
            <MenuBar/>
        </div>
        <div className="backGroudDiv">
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <p>
                    Bem vindo a pagina Mimos da Ana
                </p>
                <p>
                    Escolha a categoria abaixo para ter exemplos dos nossos produtos.
                    Faça a sua encomenda
                </p>
            </Stack>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {cardNews()}
            </Stack>
        </div>
    </div>
)

export default Home