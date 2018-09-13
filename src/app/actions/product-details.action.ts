import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product-details.model';

export const SAVE_PRODUCT_DETAILS = '[PRODUCT] Save';

export class SaveProductDetails implements Action {
    readonly type = SAVE_PRODUCT_DETAILS;
    constructor (public payload: Product) {}
}

export type Actions = SaveProductDetails;
