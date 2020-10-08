import Link from "next/link";
import Head from "next/head";
import { NewRelicSnippet } from "../components/NewRelicSnippets";

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Server</title>
      </Head>
      <ul>
        <li>
          <Link href="/b" as="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/a" as="/b">
            <a>b</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
