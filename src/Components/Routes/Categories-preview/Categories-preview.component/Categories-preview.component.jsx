import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../../Contexts/Categories.context";
import CategoryPreview from '../../../Category-preview/Category-preview.component'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;