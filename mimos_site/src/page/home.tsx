import MenuBar from '../components/cpt_menu';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { cardNews } from '../components/cpt_cardNews';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Home = () => (
    // <div className="text-white bg-primary w-full overflow-hidden">
    <>
        <header>
            <MenuBar/>
        </header>
        <div>
            <div className="backGroudDiv">
                <div>
                    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                        <Typography variant="h6" gutterBottom>
                            Bem-vindo à página Mimos da Ana
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Escolha a categoria abaixo para ver exemplos dos nossos produtos e faça a sua encomenda.
                        </Typography>
                    </Stack>
                </div>
            </div>
            {/* Ajustar o css desse swiper por que está espremido */}
            <div className="news-card">
                <Grid container spacing={2} justifyContent="center">
                    {cardNews()}
                </Grid>
            </div>
        </div>
    </>
)

export default Home