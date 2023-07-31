import MenuBar from '../components/cpt_menu';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { cardNews } from '../components/cpt_cardNews';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


const Home = () => (
    // <div className="text-white bg-primary w-full overflow-hidden">
    <>
        <header>
            <MenuBar/>
        </header>
        <body>
            <Container className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2">
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
                    {/* <Grid container spacing={2} justifyContent="center"> */}
                    {/* </Grid> */}
                </div>
            </Container>
            {cardNews()}
        </body>
    </>
)

export default Home