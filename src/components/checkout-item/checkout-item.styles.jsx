import styled from 'styled-components'; 

const layoutItemWidth = '23%';

export const CheckoutContianer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContianer = styled.div` 
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const LayoutSpanItem = styled.span`
  width: ${layoutItemWidth};
`

export const QuantityContainer = styled.span`
  display: flex;
`

export const ArrowContianer = styled.div` 
  cursor: pointer;
`

export const RemoveContianer = styled.div` 
  padding-left: 12px;
  cursor: pointer;
`
