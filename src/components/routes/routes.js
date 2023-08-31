import CheckoutContainer from "../pages/checkout/CheckoutContainer";
import HomeContainer from "../pages/home/HomeContainer";
import ProductListContainer from "../pages/productList/ProductListContainer";

export const routes = [
  {
    id: 1,
    path: "/",
    Element: HomeContainer,
  },
  {
    id: 2,
    path: "/productList",
    Element: ProductListContainer,
  },
  {
    id: 3,
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
