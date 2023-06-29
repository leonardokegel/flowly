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

export type Row = ClientRow