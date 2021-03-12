import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header,Logo, Burger, Footer } from './styles';



const UniqueOverlay: React.FC = () => {
  const {scrollYProgress} = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0,1])


  return (
    <Container>
     <Header>
       <Logo />
       <ul>
         <li> 
           <a href="#">MODEL S</a>
         </li>

         <li> 
           <a href="#">MODEL 3</a>
         </li>
         <li> 
           <a href="#">MODEL X</a>
         </li>
         <li> 
           <a href="#">MODEL Y</a>
         </li>
         <li> 
           <a href="#">POWEWRWALL</a>
         </li>
         <li> 
           <a href="#">SOLAR PANELS</a>
         </li>
       </ul>
       <Burger />
     </Header>


     <Footer style={{ opacity }}>
       <ul>
         <li> 
           <a href="https://github.com/BrayanAndrade/Tesla">Ui Clone</a>
         </li>

         <li> 
           <a href="https://github.com/BrayanAndrade/Tesla">made width 🤍</a>
         </li>
         <li> 
           <a href="https://github.com/BrayanAndrade/Tesla">by Brayan Andrade</a>
         </li>
       </ul>
     </Footer>
    </Container>
  );
};

export default UniqueOverlay;
