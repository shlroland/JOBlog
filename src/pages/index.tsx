import { type NextPage } from "next";
import Link from "next/link";
import { DoubleColumnLayout } from "./components/layouts/DoubleColumnLayout";

const Home: NextPage = () => {
  return (
    <div className="flex h-full flex-col">
      <DoubleColumnLayout>
        <div className="rounded-sm shadow-sm">
          <header className="rounded-t-sm border-b border-solid border-color-light bg-white p-4">
            <Link href="/" className="p-3 first-of-type:pl-0">
              所有
            </Link>
          </header>
        </div>
      </DoubleColumnLayout>
    </div>
  );
};

export default Home;
