import { gql } from "@apollo/client";

export const LOAD_CURRENCIES = gql`
  query currencies {
    currencies {
      label
      symbol
    }
  }
`;

export const LOAD_ALL = function (page) {
  return gql`
  query {
    category(input: { title: "${page.toLowerCase()}" }) {
      name
      products {
        id
        name,
        inStock,
        description,
        gallery,
        prices {
          amount
          currency {
            symbol
            label
          }
        }
        description,
        brand,
        attributes{
          id,
          name,
          type,
          items{
            displayValue,
            value,
            id
            
          }
        }
      }
    }
  }
`;
};


export const LOAD_PRODUCT = function (id) {
  return gql`
    query {
      product(id: "${id}") {
        id
        name
        gallery
        prices {
          amount
          currency {
            symbol
            label
          }
          
        }
        description,
        brand,
        attributes{
          id,
          name,
          type,
          items{
            displayValue,
            value,
            id
            # Disable Apollo caching for this Color
            __typename @skip(if: true)
          }
          # Disable Apollo caching for this Color
          __typename @skip(if: true)
        }
      }
    }
  `;
};
