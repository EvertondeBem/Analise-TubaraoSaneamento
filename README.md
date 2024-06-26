# Sistema de Análise de Amostra de Água

Este é um sistema desenvolvido em React.js para realizar análise físico-química de amostras de água. Ele permite aos usuários inserir detalhes da amostra, como número do protocolo, pH, cor, flúor e NTU, e realizar uma análise para determinar se a amostra atende aos padrões de potabilidade estabelecidos pela Portaria GM/MS nº888, de 04 de maio de 2021 e Portaria de nº 421 de 13/05/2016 da Secretaria do Estado da Saúde de SC.

## Funcionalidades

- Inserir detalhes da amostra, incluindo número do protocolo, pH, cor, flúor e NTU.
- Realizar análise físico-química da amostra.
- Exibir o resultado da análise em um drawer com opção de compartilhar via WhatsApp e copiar para a área de transferência.

## Como Funciona

1. **Inserção de Detalhes da Amostra:** Os usuários preenchem os campos com os detalhes da amostra, incluindo número do protocolo, pH, cor, flúor e NTU.

2. **Análise da Amostra:** Ao clicar no botão "Analisar", o sistema verifica se os valores inseridos estão dentro dos parâmetros permitidos. Se estiverem dentro dos parâmetros, exibe uma mensagem indicando que a amostra está dentro dos padrões de potabilidade. Caso contrário, exibe uma mensagem indicando que a amostra está fora dos padrões e sugere uma ação corretiva.

3. **Exibição do Resultado:** O resultado da análise é exibido em um drawer, onde os usuários podem compartilhar o resultado via WhatsApp ou copiar para a área de transferência.

## Tecnologias Utilizadas

- React.js
- Chakra UI
- React Icons
- Git

## Como Contribuir

Se você deseja contribuir com melhorias ou correções para este sistema, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com sua modificação: `git checkout -b feature/nova-funcionalidade`.
3. Faça o commit das suas alterações: `git commit -m 'Adiciona nova funcionalidade'`.
4. Faça o push para a branch: `git push origin feature/nova-funcionalidade`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
