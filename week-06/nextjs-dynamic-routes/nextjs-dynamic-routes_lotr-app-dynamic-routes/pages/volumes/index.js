import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  const handleClick = () => {
    router.push(`/volumes/${getRandomElement(volumes).slug}`);
  };

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Random Volume</button>
    </>
  );
}
