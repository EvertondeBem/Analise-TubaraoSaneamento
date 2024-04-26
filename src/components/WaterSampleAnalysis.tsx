// WaterSampleAnalysis.tsx

import { useState } from 'react';
import { Box, Heading, Text, Button, Input, FormControl, FormLabel, FormHelperText, Flex, Image } from '@chakra-ui/react';
import DrawerAnalysis from './DrawerAnalysis';


const WaterSampleAnalysis = () => {
  const [protocolNumber, setProtocolNumber] = useState('');
  const [ph, setPh] = useState('');
  const [color, setColor] = useState('');
  const [fluoride, setFluoride] = useState('');
  const [ntu, setNTU] = useState('');
  const [operator, setOperator] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

const handleAnalysis = () => {
  const phValue = parseFloat(ph);
  const colorValue = parseFloat(color);
  const fluorideValue = parseFloat(fluoride);
  const ntuValue = parseFloat(ntu);

  if (phValue < 7.00 || phValue > 7.30 || colorValue < 0 || colorValue > 15 || fluorideValue < 0.70 || fluorideValue > 1.00 || ntuValue < 0.0 || ntuValue > 5.0) {
    const resultMessage = `Realizado análise físico-químico da amostra, e o resultado obtido está fora dos parâmetros da qualidade de água potável que atende ao padrão de potabilidade estabelecido pela Portaria GM/MS nº888, de 04 de maio de 2021 e Portaria de nº 421 de 13/05/2016 da Secretaria do Estado da Saúde de SC.\n\nProtocolo: ${protocolNumber}\nPH: ${ph}\nCor: ${color}\nFlúor: ${fluoride}\nNTU: ${ntu}\n\nOperador: ${operator}\nObs: `;
    setAnalysisResult(resultMessage);
  } else {
    const resultMessage = `Realizado análise físico-químico da amostra, e o resultado obtido está dentro dos parâmetros da qualidade de água potável que atende ao padrão de potabilidade estabelecido pela Portaria GM/MS nº888, de 04 de maio de 2021 e Portaria de nº 421 de 13/05/2016 da Secretaria do Estado da Saúde de SC.\n\nProtocolo: ${protocolNumber}\nPH: ${ph}\nCor: ${color}\nFlúor: ${fluoride}\nNTU: ${ntu}\n\nOperador: ${operator}`;
    setAnalysisResult(resultMessage);
  }
  
  
  
    setIsDrawerOpen(true);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        p={4}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        maxW="500px"
        width="100%"
        position="relative"
      >
        <Image src="../src/assets/logo1.png" alt="Logo-TBSSA" position="relative" top={0} left={0} width="100%" zIndex={-1} />

        <Heading size="sm" mb={2}>Análise de Amostra de Água</Heading>
        <Text mb={2}>Insira detalhes da amostra e clique em Analisar.</Text>

        <FormControl mb={2}>
          <FormLabel>Número do Protocolo</FormLabel>
          <Input type="text" value={protocolNumber} onChange={(e) => setProtocolNumber(e.target.value)} />
          <FormHelperText>Informe o número do protocolo.</FormHelperText>
        </FormControl>
        
        <FormControl mb={2}>
          <FormLabel>PH</FormLabel>
          <Input type="number" value={ph} onChange={(e) => setPh(e.target.value)} />
          <FormHelperText>Informe o valor de PH da amostra.</FormHelperText>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>Cor</FormLabel>
          <Input type="number" value={color} onChange={(e) => setColor(e.target.value)} />
          <FormHelperText>Informe o valor da cor da amostra.</FormHelperText>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>Flúor</FormLabel>
          <Input type="number" value={fluoride} onChange={(e) => setFluoride(e.target.value)} />
          <FormHelperText>Informe o valor de flúor da amostra.</FormHelperText>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>NTU</FormLabel>
          <Input type="number" value={ntu} onChange={(e) => setNTU(e.target.value)} />
          <FormHelperText>Informe o valor de NTU da amostra.</FormHelperText>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>Operador</FormLabel>
          <Input type="text" value={operator} onChange={(e) => setOperator(e.target.value)} />
          <FormHelperText>Informe o nome do operador.</FormHelperText>
        </FormControl>

        <Button size="sm" colorScheme="blue" onClick={handleAnalysis}>Analisar</Button>
        
        <DrawerAnalysis isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} analysisResult={analysisResult} />
      </Box>
    </Flex>
  );
};

export default WaterSampleAnalysis;
