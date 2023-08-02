import MenuBar from '../components/cpt_menu';
import { cardNews } from '../components/cpt_cardNews';
import { Container, Typography, Stack, Divider, Grid, Box, Card } from '@mui/material';
import { homeBoxTheme, homeCategorieTheme } from '../styles/homeStyles';
import { ImagensDasCategorias } from '../customImages/categoriesImages';

const Home = () => {  
    return(
        <>
            <header>
                <MenuBar/>
            </header>
            <body>
                <Container className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2" style={homeBoxTheme}>
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
                </Container>
                <Divider/>
                <Box style={homeBoxTheme}>
                    {cardNews()}
                </Box>
                <Box style={homeCategorieTheme} >
                    <Card>
                        <Grid 
                        container spacing = {1} 
                        sx={{
                            '--Grid-borderWidth': '1px',
                            borderTop: 'var(--Grid-borderWidth) solid',
                            borderLeft: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                            '& > div': {
                                borderRight: 'var(--Grid-borderWidth) solid',
                                borderBottom: 'var(--Grid-borderWidth) solid',
                                borderColor: 'divider',
                            },
                        }}
                        >
                            {ImagensDasCategorias.map((categoria, index) => (
                                <Grid 
                                key={index} 
                                {...{ xs: 12, sm: 6, md: 4, lg: 3 }} 
                                minHeight={270} 
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    flexWrap: 'wrap'
                                }}>
                                    {categoria.image}
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </Box>
            </body>
        </>
    );
}

export default Home