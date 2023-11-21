import CategoryItem from '../category-item/category-item.component';
import '../category-data/types-style.scss';

const CategoryTypes = ({categories}) => {
    //const {categories} = category;
    return (

    <div className="types-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
    </div>
    );
};

export default CategoryTypes;