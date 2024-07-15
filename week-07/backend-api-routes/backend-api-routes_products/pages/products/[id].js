import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return;
  }

  return (
    <ul>
      <li key={product.id}>
        <strong>Name: </strong>
        {product.name}
        <br />
        <strong>Description: </strong>
        {product.description}
        <br />
        <strong>Price: </strong>
        {product.price}
        {product.currency}
        <br />
        <strong>Category: </strong>
        {product.category}
        <br />
        <br />
      </li>
    </ul>
  );
}
