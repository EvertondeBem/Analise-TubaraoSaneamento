import React, { useState } from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, Text, Flex } from '@chakra-ui/react';
import DrawerAnalysis from './DrawerAnalysis'; 

interface DrawerHistoryProps {
  isOpen: boolean;
  onClose: () => void;
  analysisHistory: string[];
}

const DrawerHistory: React.FC<DrawerHistoryProps> = ({ isOpen, onClose, analysisHistory }) => {
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);

  const extractProtocolNumber = (analysis: string) => {
    const match = analysis.match(/Protocolo: (\d+)/);
    return match ? match[1] : "N/A";
  };

  const handleViewAnalysis = (analysis: string) => {
    setSelectedAnalysis(analysis);
  };

  return (
    <Drawer placement="right" onClose={() => { onClose(); setSelectedAnalysis(null); }} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>Histórico de Análises</DrawerHeader>
          <DrawerBody>
            {analysisHistory.map((analysis, index) => (
              <Flex key={index} justifyContent="space-between" alignItems="center" borderBottom="1px solid #E2E8F0" py={2}>
                <Text>{extractProtocolNumber(analysis)}</Text>
                <Button size="sm" colorScheme="blue" onClick={() => handleViewAnalysis(analysis)}>Ver</Button>
              </Flex>
            ))}
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={onClose}>Fechar</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>

      <DrawerAnalysis isOpen={!!selectedAnalysis} onClose={() => setSelectedAnalysis(null)} analysisResult={selectedAnalysis} />
    </Drawer>
  );
};

export default DrawerHistory;
