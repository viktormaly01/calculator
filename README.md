
# 🧮 Calculadora Simples em JavaScript

Este projeto consiste numa "calculadora básica", desenvolvida em HTML, CSS e JavaScript, capaz de realizar as quatro operações aritméticas fundamentais: adição, subtração, multiplicação e divisão.

O objetivo central deste trabalho foi a prática de **lógica de programação, manipulação do DOM e estilização web, resultando numa interface interativa e funcional.

---

## 👥 ALuno

Viktor Maly

Docentes: Ricardo Veiga

---

## 🚀 Funcionalidades

A calculadora permite ao utilizador:

Input intuitivo: Digitar dois números e selecionar o operador pretendido (`+`, `-`, `*`, `/`).
Cálculo rápido: Obter o resultado imediato ao clicar no botão `=`.
Display dinâmico: Visualização clara do resultado no campo `.output-result`.
Formatação: Arredondamento automático para duas casas decimais quando necessário (`toFixed(2)`).
Reset: Botão de limpar (`Cl`) para reiniciar os cálculos e o estado da calculadora.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
| --- | --- |
| HTML5 | Estrutura da página, botões e elementos do display. |
| CSS3 | Layout, esquema de cores, formatação e responsividade. |
| JavaScript | Captura de eventos, lógica matemática e atualização do DOM. |

---

## 📖 Como Funciona a Lógica

1. Entrada: A interação com os botões é capturada através de *Event Listeners*. Os valores inseridos são armazenados como *strings* e processados dinamicamente.
2. Processamento:**
* Ao selecionar um operador, este é armazenado numa variável dedicada.
* Ao clicar em `=`, os valores são convertidos para o formato numérico (`Number()`).
* As operações são executadas por funções específicas para cada operação.
* O resultado final é formatado com `toFixed(2)` para garantir a legibilidade.


3. Saída: O resultado é injetado no display via `innerText`.

---

## 📂 Estrutura de Ficheiros

/
├── index.html      # Estrutura da página e botões
├── style.css       # Estilização visual e responsividade
├── script.js       # Lógica matemática e manipulação do DOM
└── README.md       # Documentação do projeto

```

---

## 🎨 Estilo e Design

* Responsividade: Layout centralizado utilizando `flexbox`.
* UI/UX: Botões com design moderno, bordas arredondadas e cores contrastantes.
* Legibilidade: Display com fundo destacado (`#fefae0`) e tipografia de grandes dimensões (60px no título) para melhor experiência de uso.

---

## 💡 Próximos Melhoramentos

* Implementar a lógica completa do botão Clear" (Cl).
* Suportar operações encadeadas(ex: calcular múltiplos números seguidos).
* Adicionar validação de erros (prevenção de divisões por zero ou pontos decimais duplicados).
* Otimização de código através da delegação de eventos nos botões.

---

## 📌 Conclusão

Este projeto é uma excelente demonstração da integração entre as tecnologias base da Web. Além de consolidar conhecimentos em JavaScript, permitiu criar uma ferramenta funcional que serve de base para aplicações web mais complexas.

---


