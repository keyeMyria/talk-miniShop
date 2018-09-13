import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product-details.model';
import * as productActions from '../actions/product-details.action';

export function productDetailsReducer(state: Product, action: productActions.Actions) {
    switch (action.type) {
        case productActions.SAVE_PRODUCT_DETAILS:
            return action.payload;
    }
}
