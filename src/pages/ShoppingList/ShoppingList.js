import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Container } from './ShoppingList.styled';
const ShoppingList = () => (
  <Container>
    <MainTitle text="Shopping List" />
    <IngredientsShoppingList />
  </Container>
);
export default ShoppingList;
