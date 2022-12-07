import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, CategoryTitleLink, CategoryPreviewList } from './category-preview.styles';


const CategoryPreview = ({ title, products}) => {
  return (
    <CategoryPreviewContainer>
      <h2> 
        <CategoryTitleLink to={title}>{title.toUpperCase()}</CategoryTitleLink>
      </h2>
      <CategoryPreviewList>
        {
          products.filter( (_, index) => index < 4 )
          .map((product) => 
            <ProductCard key={product.id} product={product} />
          )
        }
      </CategoryPreviewList>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;