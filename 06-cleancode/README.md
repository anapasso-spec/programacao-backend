# Relatório de Refatoração e Code Review

## O que foi refatorado
- **Eliminação de números mágicos:** Criada a constante `PRECO_POR_KG = 2.5` na classe `LivroFisico` para evitar valores soltos no código.
- **Proteção de dados:** Garantido o uso do atributo privado `#peso` com o método de acesso `getPeso()`.
- **Reuso de código:** Mantida a herança da classe mãe `Livro` com o uso do `super()`.

## Apontamentos da revisão do colega
- **Checklist de Clean Code:** Ambas as partes revisadas atenderam a todos os 7 critérios do checklist (Nomes claros, Sem números mágicos, Métodos pequenos, Sem duplicação, Dados protegidos, Um arquivo/classe e Comentários úteis).
- **Observação:** Não foram identificadas pendências ou necessidade de ajustes adicionais em nenhuma das classes avaliadas durante o Code Review.