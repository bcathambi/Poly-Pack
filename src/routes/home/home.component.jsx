
import CategoryTypes from '../../component/category-data/category-types.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Poly Pack",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/4/AQ/QM/JV/14110358/ldpe-packaging-pouch-500x500.jpeg"
    },
    {
      id: 2,
      title: "Transparent Pack",
      imageUrl: "https://partyaccessories.pk/cdn/shop/products/11_9f3d263c-58f9-440f-a066-d04461f0cca0_1200x1200.jpg?v=1649852319"
    },
    {
      id: 3,
      title: "Courier Pack",
      imageUrl: "https://m.media-amazon.com/images/I/41G9-6ZGWXL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 4,
      title: "Bags",
      imageUrl: "https://image.isu.pub/190319113647-330bbc5fd5115226b2ff5471801e5023/jpg/page_1.jpg"
    },
    {
      id: 5,
      title: "Plastics",
      imageUrl: "https://www.radhepolypack.com/wp-content/uploads/2021/01/SliderNew-2.jpg"
    },
  ];
  
  return (
    <CategoryTypes categories={categories}/>      
  );
};

export default Home;
