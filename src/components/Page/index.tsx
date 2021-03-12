import { ReactNode } from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';


const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model 3',
            'Model S',
            'Model X',
            'Model Y',
            'Model Solar e Powerwall',
            
          ].map (modelName => (
            <ModelSection 
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent 
                  label={modelName}
                  description="Order Online for Touchess Delivery"
              />
            }
          />
          ))}
        </div>
          
            <Spacer />

          <UniqueOverlay/>

      </ModelsWrapper>
    </Container>
  );
};

export default Page;
