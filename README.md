# Padrão de Projeto Strategy - Sistema de Navegação GPS

## Sobre o Projeto

Este projeto demonstra a implementação do **Padrão de Projeto Strategy** através de um sistema de navegação GPS. O objetivo é mostrar a diferença entre uma implementação **sem** o padrão Strategy e uma implementação **com** o padrão Strategy.

### Vantagens:
- **Flexibilidade**: Fácil adição de novas estratégias
- **Manutenibilidade**: Cada estratégia é isolada em sua própria classe
- **Princípio Aberto/Fechado**: Aberto para extensão, fechado para modificação
- **Eliminação de condicionais**: Remove grandes blocos if/else ou switch/case

## Como Executar

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Instalação
```bash
npm install
```

### Executar Exemplos

#### 1. Exemplo SEM Strategy Pattern (problemático)
```bash
npm run without
```

#### 2. Exemplo COM Strategy Pattern (recomendado)
```bash
npm run with
```

---

**Links Úteis:**
- [Implementação sem Strategy](./src/withoutStrategy/)
- [Implementação com Strategy](./src/withStrategy/)
