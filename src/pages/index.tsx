import { type NextPage } from "next";
import Link from "next/link";
import { DoubleColumnLayout } from "./components/Layouts/DoubleColumnLayout";
import { ArticleRecommend, Tags } from "./components/Recommends";

const Home: NextPage = () => {
  return (
    <div className="flex h-full flex-col">
      <DoubleColumnLayout
        rightNode={
          <div className="sticky">
            <ArticleRecommend />
            <Tags />
          </div>
        }
      >
        <div className="rounded-sm shadow-sm">
          <header className="border-color-light rounded-t-sm border-b border-solid bg-white p-4">
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
