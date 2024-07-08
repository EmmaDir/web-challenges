import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeTwo() {
  const volumeTwo = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumeTwo.title}</h1>
      <p>{volumeTwo.description}</p>
      <ul>
        <li>
          {volumeTwo.books[0].ordinal}: {volumeTwo.books[0].title}
        </li>
        <li>
          {volumeTwo.books[1].ordinal}: {volumeTwo.books[1].title}
        </li>
      </ul>
      <Image
        src="/public/images/the-two-towers.png"
        height={230}
        width={140}
        alt="A picture of the cover"
      />
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            ← Previous volume
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">Next volume →</Link>
        </li>
      </ul>
    </>
  );
}
