import PostComponent from "../components/post";
import Dashboaed from "./dashboard/page";
import Link from "next/link";

interface HomeProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  return (
    <div>
      <PostComponent />
      <div>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
}
