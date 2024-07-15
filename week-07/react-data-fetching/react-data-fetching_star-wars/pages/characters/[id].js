import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const id = parseInt(router.query.id);

  const {
    data: characters,
    error,
    isLoading,
  } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <Layout>
      <Card
        id={id}
        name={characters.name}
        height={characters.height}
        eyeColor={characters.eye_color}
        birthYear={characters.birth_year}
      />
    </Layout>
  );
}
