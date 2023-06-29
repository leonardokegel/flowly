type document = {
    id: string
    titulo: string
    status: number
}

export type ClientRow = {
    id: string
    cliente: string
    contato: string
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
        cliente: string
        contato: string
    }
    data_inicio: string
    valor: string
}

export type Row = ClientRow | ProjectsRow