import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products() {
  const { data: products, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {products.map((product) => (
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
      ))}
    </ul>
  );
}
