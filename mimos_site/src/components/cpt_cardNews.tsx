// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../style';
import { robot } from '../assets';
import { Box, Card, CardContent, CardMedia, Divider, Typography} from '@mui/material';

// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// export const cardNews = () => {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step: number) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: 'block',
//                   maxWidth: 400,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

export const cardNews = () => {
  return (
    <>
      <Card>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <CardContent sx={{ display: 'flex'}}>
              <Typography component={ "div" } variant="h5" >
                  Noticias novas escritas aqui
              </Typography>
            </CardContent>
          </Box>
          <Divider/>
          <CardMedia>
            <Swiper
              slidesPerView={1}
              autoHeight={true}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 25000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: true
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[90%] h-[90%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[80%] h-[80%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[70%] h-[70%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[60%] h-[60%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[50%] h-[50%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[40%] h-[40%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[30%] h-[30%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[20%] h-[20%] relative z-[5]" /></SwiperSlide>
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}><img src={robot} alt="billing" className="w-[10%] h-[10%] relative z-[5]" /></SwiperSlide>
            </Swiper>
          </CardMedia>
      </Card>  
    </>
  )
}