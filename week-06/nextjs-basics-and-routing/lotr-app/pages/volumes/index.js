import { introduction } from "@/lib/data";
import Link from "next/link";
import { volumes } from "@/lib/data";

export default function Volumes() {
  const volumeOne = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const volumeTwo = volumes.find(({ slug }) => slug === "the-two-towers");
  const volumeThree = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            {volumeOne.title}
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">{volumeTwo.title}</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            {volumeThree.title}
          </Link>
        </li>
      </ul>
    </>
  );
}
