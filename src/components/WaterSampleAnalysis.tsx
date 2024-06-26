import { useState } from 'react';
import { Box, Heading, Text, Button, Input, FormControl, FormLabel, FormHelperText, Flex, Image } from '@chakra-ui/react';
import DrawerAnalysis from './DrawerAnalysis';
import DrawerHistory from './DrawerHistory';

const WaterSampleAnalysis = () => {
  const [protocolNumber, setProtocolNumber] = useState('');
  const [ph, setPh] = useState('');
  const [color, setColor] = useState('');
  const [fluoride, setFluoride] = useState('');
  const [ntu, setNTU] = useState('');
  const [operator, setOperator] = useState('');
  const [isDrawerAnalysisOpen, setIsDrawerAnalysisOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');
  const [analysisHistory, setAnalysisHistory] = useState<string[]>([]);
  const [isDrawerHistoryOpen, setIsDrawerHistoryOpen] = useState(false);

  const handleAnalysis = () => {
    const phValue = parseFloat(ph);
    const colorValue = parseFloat(color);
    const fluorideValue = parseFloat(fluoride);
    const ntuValue = parseFloat(ntu);

    let resultMessage = '';

    if (
      phValue < 6.00 ||
      phValue > 9.00 ||
      colorValue < 0 ||
      colorValue > 15 ||
      fluorideValue < 0.70 ||
      fluorideValue > 1.00 ||
      ntuValue < 0.0 ||
      ntuValue > 5.0
    ) {
      resultMessage = `Realizado análise físico-químico da amostra, e o resultado obtido está fora dos parâmetros da qualidade de água potável que atende ao padrão de potabilidade estabelecido pela Portaria GM/MS nº888, de 04 de maio de 2021 e Portaria de nº 421 de 13/05/2016 da Secretaria do Estado da Saúde de SC.\n\nProtocolo: ${protocolNumber}\nPH: ${ph}\nCor: ${color}\nFlúor: ${fluoride}\nNTU: ${ntu}\n\nOperador: ${operator}\nObs: Solicitamos fazer a descarga de rede ou cavalete e uma nova análise.`;
    } else {
      resultMessage = `Realizado análise físico-químico da amostra, e o resultado obtido está dentro dos parâmetros da qualidade de água potável que atende ao padrão de potabilidade estabelecido pela Portaria GM/MS nº888, de 04 de maio de 2021 e Portaria de nº 421 de 13/05/2016 da Secretaria do Estado da Saúde de SC.\n\nProtocolo: ${protocolNumber}\nPH: ${ph}\nCor: ${color}\nFlúor: ${fluoride}\nNTU: ${ntu}\n\nOperador: ${operator}`;
    }

    setAnalysisResult(resultMessage);

    setIsDrawerAnalysisOpen(true);

    setAnalysisHistory(prevHistory => [resultMessage, ...prevHistory.slice(0, 9)]);
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" maxW="500px" width="100%" position="relative">
        <Image src="../logo1.png" alt="Logo-TBSSA" position="relative" top={0} left={0} width="100%" zIndex={-1} />

        <Heading size="sm" mb={2}>
          Análise de Amostra de Água
        </Heading>
        <Text mb={2}>Insira detalhes da amostra e clique em Analisar.</Text>

        <FormControl mb={2}>
          <FormLabel>Número do Protocolo</FormLabel>
          <Input type="number" value={protocolNumber} onChange={(e) => setProtocolNumber(e.target.value)} />
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

        <Button size="sm" colorScheme="blue" mr={3} onClick={handleAnalysis}>
          Analisar
        </Button>


        <DrawerAnalysis isOpen={isDrawerAnalysisOpen} onClose={() => setIsDrawerAnalysisOpen(false)} analysisResult={analysisResult} />
        

        <Button size="sm" colorScheme="green" onClick={() => setIsDrawerHistoryOpen(true)}>
          Histórico
        </Button>
        

        <DrawerHistory isOpen={isDrawerHistoryOpen} onClose={() => setIsDrawerHistoryOpen(false)} analysisHistory={analysisHistory} />
      </Box>
    </Flex>
  );
};

export default WaterSampleAnalysis;
