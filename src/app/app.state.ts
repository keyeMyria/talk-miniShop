import { Product } from './models/product-details.model';
import { productDetailsReducer } from 'src/app/reducers/product-details.reducer';

export interface AppState {
    readonly product: Product;
}
