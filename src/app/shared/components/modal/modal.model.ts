export type ModalType =
    | 'CREATE_PROJETO'
    | 'CREATE_PROPOSTA'
    | 'CREATE_CONTRATO'
    | 'CREATE_CLIENTE'
    | 'CREATE_EMAIL'
    | 'EDIT_PROJETO'
    | 'EDIT_PROPOSTA'
    | 'EDIT_CONTRATO'
    | 'EDIT_CLIENTE'
    | 'EDIT_EMAIL'
    | 'CONFIRM'
    | 'SETTINGS_PROJETO'
    | 'SETTINGS_PROPOSTA'
    | 'SETTINGS_CONTRATO';

export type NotificationColor =
    | 'danger'
    | 'success';

export type ModalConfirm = {
    titulo: string,
    subtitulo: string,
    label: string,
}

export type ModalNotification = {
    message: string,
    color: NotificationColor,
}

export type ModalEditProposta = {
    id: string,
    clienteId: number,
    titulo: string,
}

export type ModalData = {
    modalType: ModalType,
    content: ModalEditProposta | ModalConfirm | ModalNotification
}
