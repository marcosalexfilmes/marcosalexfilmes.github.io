# Carrossel de fotos na seção About

## Objetivo
Reorganizar a seção **About** para destacar as quatro fotos enviadas sem comprometer o carregamento da página.

## Layout
- No desktop, criar duas colunas equilibradas:
  - carrossel vertical de retratos à esquerda;
  - cards **Storytelling**, **Impact**, **Filmmaking** e **Photography** empilhados à direita.
- No celular, exibir primeiro o carrossel e depois a lista dos quatro cards.
- Preservar o fundo preto, os textos brancos e o estilo visual atual da página.

## Carrossel
- Usar as imagens na ordem em que foram enviadas: `DSC00758`, `IMG_0950`, `20250220_Acelerador...` e `marcoz`.
- Manter uma área de imagem estável, com enquadramento vertical e corte consistente para evitar mudanças de layout.
- Adicionar transição suave, navegação anterior/próxima e indicadores acessíveis.
- Avançar automaticamente, pausar durante interação e respeitar a preferência de movimento reduzido.

## Otimização
- Gerar versões WebP redimensionadas para o tamanho efetivamente exibido, preservando proporção e qualidade visual.
- Manter as versões otimizadas locais no repositório, sem links externos.
- Carregar a primeira foto imediatamente e as seguintes sob demanda para reduzir o peso inicial.

## Verificação
- Conferir enquadramento, legibilidade, controles e ausência de sobreposição no desktop e no celular.
- Confirmar que a página continua compilando sem erros.
