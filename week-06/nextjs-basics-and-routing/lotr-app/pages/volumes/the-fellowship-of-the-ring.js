import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeOne() {
  const volumeOne = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumeOne.title}</h1>
      <p>{volumeOne.description}</p>
      <ul>
        <li>
          {volumeOne.books[0].ordinal}: {volumeOne.books[0].title}
        </li>
        <li>
          {volumeOne.books[1].ordinal}: {volumeOne.books[1].title}
        </li>
      </ul>
      <Image
        src="/public/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="A picture of the cover"
      />
      <ul>
        <li>
          <Link href="/volumes/the-two-towers">Next volume →</Link>
        </li>
      </ul>
    </>
  );
}
