# Gerenciador de Produtos - CRUD System

> Um sistema de gerenciamento de produtos (CRUD) desenvolvido como solução para o teste prático frontend da Burh.

## 📋 Sobre o Projeto

Este projeto implementa um **CRUD completo** para gerenciamento de produtos, consumindo APIs RESTful. A aplicação foi desenvolvida com foco em boas práticas de desenvolvimento, componentização e experiência do usuário, mantendo um código limpo, bem estruturado e altamente manutenível.

### Funcionalidades Principais

- ✅ **Create**: Adicionar novos produtos com validação em tempo real
- ✅ **Read**: Listar todos os produtos com informações detalhadas
- ✅ **Update**: Editar produtos existentes
- ✅ **Delete**: Remover produtos com confirmação
- ✅ **Campos Multi-tipo**: Texto, numérico, data e booleano
- ✅ **Responsividade**: Layout mobile-first totalmente responsivo
- ✅ **Validação**: Validação completa de campos com mensagens de erro
- ✅ **Loading States**: Estados de carregamento e skeleton screens
- ✅ **Toast Notifications**: Feedback visual das ações do usuário

---

## 🎯 Decisões Técnicas

### Stack Escolhido

| Tecnologia                       | Motivo                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------- |
| **Next.js 16**                   | Framework React moderno com suporte a Server Components e excelente performance |
| **React 19**                     | Última versão com melhorias de performance e novas features                     |
| **TypeScript**                   | Type safety, melhor DX e detecção de erros em tempo de desenvolvimento          |
| **Tailwind CSS v4**              | Utility-first CSS, sem necessidade de pré-processador adicional                 |
| **React Hook Form**              | Gerenciamento eficiente de formulários com validação integrada                  |
| **Zod**                          | Schema validation library para garantir tipagem e validação                     |
| **React Query (TanStack Query)** | Gerenciamento de estado e cache de dados assíncronos                            |
| **Axios**                        | HTTP client para requisições à API                                              |
| **Radix UI**                     | Componentes acessíveis como base para UI custom                                 |
| **Sonner**                       | Toast notifications com melhor UX                                               |

### Arquitetura

```
src/
├── app/                      # App Router do Next.js
│   ├── page.tsx             # Página principal
│   ├── layout.tsx           # Layout raiz
│   └── globals.css          # Estilos globais
├── components/
│   ├── ui/                  # Componentes base (shadcn/ui)
│   ├── layout/              # Componentes de layout
│   └── produtct/            # Componentes específicos de produto
├── services/
│   └── product-service.ts   # Lógica de requisições API
├── hooks/
│   ├── use-products.ts      # Hook para listar produtos
│   ├── use-product-form.ts  # Hook para gerenciar formulário
│   └── use-home-page.ts     # Hook para lógica da página
├── lib/
│   ├── axios.ts             # Configuração do Axios
│   ├── utils.ts             # Funções utilitárias
│   └── validations/
│       └── product.ts       # Schema Zod de validação
├── types/
│   └── product.ts           # TypeScript interfaces
├── providers/
│   └── query-provider.tsx   # Provider do React Query
└── utils/
    ├── query-keys.ts        # Chaves para React Query
    └── functions.ts         # Funções auxiliares
```

### Padrões Implementados

#### 1. **BEM Naming Convention**

```css
/* Blocos e Modificadores */
.product-card {
}
.product-card__header {
}
.product-card--available {
}
```

#### 2. **Component-Driven Development**

- Componentes pequenos e reutilizáveis
- Props bem documentadas
- Separação clara de responsabilidades
- Containers vs Presentational Components

#### 3. **Custom Hooks**

- `useProducts()` - Lógica de listagem com React Query
- `useProductForm()` - Gerenciamento de formulário
- `useHomePage()` - Orquestração de lógica da página

#### 4. **Server Actions & API Routes**

- Requisições via Axios com interceptadores
- Error handling centralizado
- Tipagem completa com TypeScript

---

## 🏗️ Organização do Código

### Componentes

**Product List** - Componente principal que renderiza a grid de produtos

- Responsável por exibir a lista
- Estados de carregamento, vazio e erro
- Grid responsiva (1 col mobile → 4 cols desktop)

**Product Card** - Card individual do produto

- Exibe informações do produto
- Botões de ação (Editar, Excluir)
- Badge de disponibilidade

**Product Form** - Formulário compartilhado

- Usado tanto para criar quanto editar
- Validação com Zod + React Hook Form
- Gerenciamento automático de valores

**Modals**

- `AddProductModal` - Criar novo produto
- `EditProductModal` - Editar produto
- `DeleteProductDialog` - Confirmar exclusão

### Services

**ProductService** - Abstração da API

```typescript
-listProducts() -
  createProduct(data) -
  updateProduct(id, data) -
  deleteProduct(id);
```

### Hooks Customizados

```typescript
// use-products.ts
const { data: products, isLoading, error } = useProducts();

// use-product-form.ts
const { form, handleSubmit } = useProductForm({ defaultValues, onSubmit });

// use-home-page.ts
const {
  /* ... */
} = useHomePage();
```

---

## 📱 Responsividade

### Breakpoints Implementados

| Breakpoint | Colunas | Gap  | Aplicação |
| ---------- | ------- | ---- | --------- |
| Mobile     | 1 col   | 16px | < 640px   |
| Small      | 2 cols  | 20px | ≥ 640px   |
| Large      | 3 cols  | 24px | ≥ 1024px  |
| XL         | 4 cols  | 24px | ≥ 1280px  |

### Mobile First

- Começamos com versão mobile
- Progressivamente melhoramos para telas maiores
- Todos os componentes testados em diferentes resoluções
- Imagens e ícones dimensionados corretamente

---

## ✅ Validação & Tratamento de Erros

### Campos Validados

```typescript
{
  name: string (3-100 chars),          // Texto
  description: string (10-500 chars),  // Texto
  price: number (> 0, max 999999.99), // Numérico
  quantity: number (int, >= 0),        // Numérico
  createdAt: string (obrigatória),    // Data
  available: boolean                   // Booleano
}
```

### Tratamento de Erros

- Validação client-side em tempo real
- Mensagens de erro específicas por campo
- Toast notifications para feedback
- Loading states durante requisições
- Tratamento de falhas de rede

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js >= 18.0.0
- npm ou yarn

### Instalação

```bash
# 1. Clone o repositório
git clone <seu-repositorio>
cd product-manager

# 2. Instale as dependências
npm install
# ou
yarn install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

# A aplicação estará disponível em:
# http://localhost:3000
```

### Build para Produção

```bash
# Crie o build otimizado
npm run build
# ou
yarn build

# Inicie o servidor de produção
npm start
# ou
yarn start
```

### Linting

```bash
# Execute o linter
npm run lint
# ou
yarn lint
```

---

## 🔌 Configuração da API

A aplicação consome uma API RESTful configurada no arquivo `lib/axios.ts`. Para apontar para uma API diferente:

```typescript
// lib/axios.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://seu-api.com";
```

### Endpoints Esperados

```
GET    /products          # Listar todos os produtos
POST   /products          # Criar novo produto
PUT    /products/:id      # Atualizar produto
DELETE /products/:id      # Deletar produto
```

---

## 🎨 Design & UX

### Características de Design

- ✨ Interface limpa e intuitiva
- 🎯 Componentes bem definidos com espaçamento consistente
- ♿ Acessibilidade com ARIA attributes
- 🌐 Suporte a múltiplos idiomas (PT-BR)
- 📊 Estados visuais bem definidos (loading, empty, error)
- 🎬 Animações suaves em transições

### Paleta de Cores

- **Verde**: Ações positivas (Cadastrar, Editar, Disponível)
- **Vermelho**: Ações destrutivas (Excluir)
- **Cinza**: Texto, backgrounds neutros
- **Azul**: Informações adicionais (Estoque, etc)

---

## 📈 Performance

- **Code Splitting**: Componentes são carregados sob demanda
- **Image Optimization**: Imagens otimizadas automaticamente
- **Caching**: React Query com cache inteligente
- **Bundle Optimization**: Tailwind CSS com purging automático
- **Skeleton Screens**: Melhor percepção de performance

---

## 🧪 Testabilidade

O código foi desenvolvido com foco em testabilidade:

- Componentes isolados e reutilizáveis
- Hooks customizados com lógica extraída
- Services com responsabilidade única
- Tipos bem definidos (TypeScript)
- Validação com Zod (fácil de testar)

---

## 📝 Histórico de Commits

Os commits foram organizados de forma clara e descritiva:

```
feat: setup Next.js project with TypeScript
feat: create product types and schemas
feat: implement product service
feat: add product listing component
feat: add create/edit/delete functionality
feat: improve responsive design
fix: fix card spacing on mobile devices
```

---

## 🔐 Boas Práticas Implementadas

- ✅ TypeScript strict mode
- ✅ ESLint configurado
- ✅ Componentes funcionais com hooks
- ✅ Props validation com TypeScript
- ✅ Error boundaries (implícito com Next.js)
- ✅ Semantic HTML
- ✅ Acessibilidade (WCAG)
- ✅ Performance monitoring pronta

---

## 🎓 O Que Aprendi

- Integração avançada de React Query com Next.js
- Padrões de organização de código em projetos React grandes
- Validação e type-safety com Zod + TypeScript
- Responsividade e mobile-first design
- Boas práticas de UX em CRUDs

## 📄 Licença

Este projeto foi desenvolvido como teste técnico para a Burh.

---

**Desenvolvido com ❤️ para o teste prático Burh | 2026**
