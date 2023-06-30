type document = {
    id: string
    titulo: string
    status: number
}

export type ClientRow = {
    id: string
    empresa: string
    nome: string
    email: string
    propostas: document[]
    contratos: document[]
}

export type ProjectsRow = {
    id: string
    titulo: string
    status: number
    cliente: {
        id: string
        empresa: string
        nome: string
    }
    data_inicio: string
    valor: string
}

export type ProposalsRow = {
    id: string
    titulo: string
    status: number
    cliente: {
        id: string
        empresa: string
        nome: string
    }
}

export type Row = ClientRow | ProjectsRow | ProposalsRow