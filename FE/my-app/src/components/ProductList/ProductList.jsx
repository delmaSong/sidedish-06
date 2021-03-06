import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel/Carousel';
import Title from './Title';
import Placeholder from 'components/Placeholder';
import { API_URL, useFetch } from 'utils/useFetch';

const ProductList = ({ productType, onClick }) => {
  const [list, setList] = useState({});
  const isListLoading = useFetch(API_URL(productType), setList);
  const { data = [], menuType, menuTypeTitle } = list;

  return (
    <>
      {!isListLoading && (
        <PlaceholderWrap>
          <Placeholder />
        </PlaceholderWrap>
      )}
      <ProductListWrap>
        <Title menuType={menuType} menuTypeTitle={menuTypeTitle} />
        <Carousel list={data} onClick={onClick} />
      </ProductListWrap>
    </>
  );
};

const ProductListWrap = styled.div`
  margin: 0 auto;
  padding-top: 6rem;
`;

const PlaceholderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33.75rem; /* 540 / 16 */
`;

export default ProductList;
