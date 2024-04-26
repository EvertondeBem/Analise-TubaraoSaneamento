import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import WaterSampleAnalysis from './components/WaterSampleAnalysis';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <WaterSampleAnalysis />
    </ChakraProvider>
  );
};

export default App;