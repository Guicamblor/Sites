# Mimos da Ana · Calculadora 3D (Next.js)

Versão em Next.js + React + TypeScript da calculadora `index.html`. Mesmo visual, mesmas contas e a mesma ligação com a Planilha Google (usa o mesmo `Codigo.gs` do Apps Script).

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Gerar o site para hospedar

```bash
npm run build
```

O site pronto fica na pasta **`out/`**. Ele é estático: dá para subir essa pasta no Netlify, GitHub Pages, Vercel ou qualquer hospedagem de arquivos.

Na Vercel também dá para importar o projeto direto do GitHub, sem rodar o build no seu computador.

## Estrutura

| Caminho | O que tem |
|---|---|
| `app/layout.tsx` | Fontes (Nunito e Dancing Script), título da aba e ícone. |
| `app/globals.css` | Todo o visual (cores da marca no topo, em `:root`). |
| `app/page.tsx` | Página inicial; só renderiza a calculadora. |
| `components/Calculadora.tsx` | Cabeçalho, abas, conexão com a planilha e avisos. |
| `components/AbaCalcular.tsx` | Formulário do produto, filamentos, tempo e o resumo do preço. |
| `components/AbaHistorico.tsx` | Lista dos cálculos salvos na planilha. |
| `components/AbaConfiguracoes.tsx` | Custos padrão, catálogo de filamentos e conexão. |
| `lib/calculo.ts` | **Valores padrão e a fórmula do preço.** |
| `lib/planilha.ts` | Chamadas ao Apps Script e armazenamento no navegador. |
| `public/logo.jpg` | Logo da marca. |

## Mudar os valores padrão

Em `lib/calculo.ts`, no objeto `PADRAO`:

```ts
valorHora: 0.77,   // R$ por hora de impressão
watts: 220,        // consumo da impressora (só referência)
kwh: 0.95,         // tarifa de energia (só referência)
mult: 2,           // cobrar o dobro do custo
filamentos: [{ nome: 'PLA Basic', preco: 240 }, ...]
```

Esses valores só valem até a primeira vez que você salva em **Configurações**. Depois disso, valem os da planilha.
