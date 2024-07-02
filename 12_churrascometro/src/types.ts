export type Alimento = "carne" | "linguica" | "frango" | "paoAlho"

// Objeto tipo Chave, valor
export const quantidadePessoas: Record<Alimento, number> = {
    carne: 400,
    linguica: 200,
    frango: 200,
    paoAlho: 100,
}

// modificação dos valores dos nomes
export const nomesAlimentos: Record<string, string> = {
    carne: "Carne",
    linguica: "Linguiça",
    frango: "Frango",
    paoAlho: "Pão de Alho",
}