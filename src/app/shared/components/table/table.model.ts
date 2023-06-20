type Document = {
    id: string
    titulo: string
    status: number
}

type Cliente = {
    id: string
    nome: string
    email: string
    telefone: string
    propostas: Document[]
    contratos: Document[]
}

type Projeto = {
    titulo: string
    status: number
    cliente: {
        id: string
        nome: string
        empresa: string
    }
    data_inicio: string
    valor: number
    valor_pago: number
}

type Proposta = {
    id: string
    titulo: string
    status: number
    cliente: {
        id: string
        nome: string
        empresa: string
    }
}

type Contrato = {
    id: string
    titulo: string
    status: number
    cliente: {
        id: string
        nome: string
        empresa: string
    }
}

export type Row = Cliente | Projeto | Proposta | Contrato