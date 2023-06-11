import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { ModalRef } from './modal.ref';
import { MODAL_DATA } from './modal-tokens';

export interface ModalConfig {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  data?: any
  hasBackdropClick?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private overlay: Overlay, private injector: Injector){}

  open<T>(component: ComponentType<T>, config?: ModalConfig): ModalRef {
    // Create overlay
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      panelClass: ['p-5', 'min-w-[50%]', 'max-w-[600px]']
    });

    const modalRef = new ModalRef(overlayRef);

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: ModalRef, useValue: modalRef },
        { provide: MODAL_DATA, useValue: config?.data }
      ]
    });

    overlayRef.backdropClick().subscribe(() => {
      if (config?.hasBackdropClick) {
        modalRef.close();
      }
    })

    // Attach component
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return modalRef;
  }
}
