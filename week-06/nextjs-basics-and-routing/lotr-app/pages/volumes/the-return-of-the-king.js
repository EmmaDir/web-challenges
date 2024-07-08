import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeTree() {
  const volumeThree = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumeThree.title}</h1>
      <p>{volumeThree.description}</p>
      <ul>
        <li>
          {volumeThree.books[0].ordinal}: {volumeThree.books[0].title}
        </li>
        <li>
          {volumeThree.books[1].ordinal}: {volumeThree.books[1].title}
        </li>
      </ul>
      <Image
        src="/public/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="A picture of the cover"
      />
      <ul>
        <li>
          <Link href="/volumes/the-two-towers">← Previous volume</Link>
        </li>
      </ul>
    </>
  );
}
