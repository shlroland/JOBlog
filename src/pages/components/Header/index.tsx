import cx from "classnames";
import { useMemo, type FC } from "react";
import Link from "next/link";
import { GiRoundStar } from "react-icons/gi";
import {
  MdOutlineLightMode,
  MdOutlineGTranslate,
  MdOutlineSearch,
} from "react-icons/md";
import styles from "./index.module.css";
import { useBoolean } from "ahooks";

interface HeaderProps {
  hasBg?: boolean;
}

const NAV_LINKS = [
  {
    path: "/",
    locale: "文章",
  },
  {
    path: "/archives",
    locale: "归档",
  },
];

export const Header: FC<HeaderProps> = ({ hasBg }) => {
  const [visible, { toggle }] = useBoolean(false);

  const navMenu = useMemo(
    () =>
      NAV_LINKS.map((nav) => (
        <li key={nav.path}>
          <Link href={nav.path} aria-label={nav.locale}>
            <span>{nav.locale}</span>
          </Link>
        </li>
      )),
    []
  );

  return (
    <header
      className={cx([
        `h-header relative w-full transition-all duration-300 ease-in-out`,
        hasBg && "bg-transparent",
      ])}
    >
      <div
        className={cx([
          `z-100 h-header border-color-light relative border border-solid bg-white`,
          `[&>.layout]:relative [&>.layout]:flex [&>.layout]:items-center`,
        ])}
      >
        <div className="layout">
          <div
            className={`h-header mr-16 inline-flex items-center text-left leading-none`}
          >
            <Link href="/" scroll={false} aria-label="home">
              <GiRoundStar className="text-4xl text-[#684380]" />
            </Link>
          </div>

          <div
            className={cx([
              "absolute right-4 block md:hidden",
              visible && styles.active,
            ])}
            onClick={toggle}
          >
            <div className={styles.stick}></div>
            <div className={styles.stick}></div>
            <div className={styles.stick}></div>
          </div>

          <nav className={cx([styles.nav,visible && styles.active])}>
            <ul>
              {navMenu}
              <li className={styles.toolWrapper}>
                <MdOutlineGTranslate />
              </li>
              <li className={styles.toolWrapper}>
                <MdOutlineLightMode />
              </li>
              <li className={styles.toolWrapper}>
                <MdOutlineSearch />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
