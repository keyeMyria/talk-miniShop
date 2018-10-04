import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
{
  products {
    id
    productName
    price
    contractLength
    productSeller
    cmsProduct {
      features,
      imageName
    }
  }
}
`;

export const GET_BASKET = gql`
query getBasket($cartId:String!){
  basket(id:$cartId) {
    cartId
    cart {
      productId
      productName
      price
      contractLength
      productSeller
    }
    cmsProductForCart {
      features
      imageName
    }
  }
}
`;

export const GET_ORDER = gql`
query getOrder($userId:String!,$cartId:String!){
	user(id:$userId) {
      userId
      title
      firstName
      lastName
      email
      phoneNumber
      dob
    }
  basket(id:$cartId) {
    cartId
    cart {
      productId
      productName
      price
      contractLength
      productSeller
    }
  }
}
`;


export const ENDPOINT = 'http://localhost:4000/graphql';
