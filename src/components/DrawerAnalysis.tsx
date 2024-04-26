import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, Text, IconButton  } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';


interface DrawerAnalysisProps {
  isOpen: boolean;
  onClose: () => void;
  analysisResult: string;
}

const DrawerAnalysis: React.FC<DrawerAnalysisProps> = ({ isOpen, onClose, analysisResult }) => {
  const shareViaWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(analysisResult)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>Resultado da Análise</DrawerHeader>
          <DrawerBody>
            <Text>{analysisResult}</Text>
          </DrawerBody>
          <DrawerFooter>
            <IconButton mr={3}
              colorScheme="green"
              aria-label="Compartilhar via WhatsApp"
              icon={<FaWhatsapp />}
              onClick={shareViaWhatsApp}
            />
            <Button colorScheme="blue" mr={3} onClick={() => { navigator.clipboard.writeText(analysisResult); onClose(); }}>
              Copiar
            </Button>
            <Button onClick={onClose}>Fechar</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default DrawerAnalysis;
