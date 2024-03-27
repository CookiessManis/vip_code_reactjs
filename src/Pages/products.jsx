import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

export default function ProductPage() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  //     price: 1000000,
  //     description: "This is product 1",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  //     price: 2000000,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit expedita quasi porro et nesciunt ullam soluta? Magni, atque pariatur culpa est molestias quidem molestiae repudiandae? Rem inventore sed nesciunt.",
  //   },
  // ];

  // const email = localStorage.getItem("email");

  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")));
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="font-bold text-3xl text-blue-500 ml-5 mb-5">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center py-5">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
}
