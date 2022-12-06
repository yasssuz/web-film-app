"use client";

import styles from "./styles.module.scss";
import LogoIcon from "@/icons/logo.svg";
import HomeIcon from "@/icons/home.svg";
import MovieIcon from "@/icons/movie.svg";
import TvIcon from "@/icons/tv.svg";
import BookmarkIcon from "@/icons/bookmark.svg";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Sidebar() {
  const segment = useSelectedLayoutSegment();

  return (
    <aside className={styles.container}>
      <LogoIcon />
      <Link
        href="/app"
        className={`${styles.iconLink} ${!segment && styles.iconLinkSelected}`}
      >
        <HomeIcon />
      </Link>
      <Link
        href="/app/movies"
        className={`${styles.iconLink} ${
          segment === "movies" && styles.iconLinkSelected
        }`}
      >
        <MovieIcon />
      </Link>
      <Link
        href="/app/series"
        className={`${styles.iconLink} ${
          segment === "series" && styles.iconLinkSelected
        }`}
      >
        <TvIcon />
      </Link>
      <Link
        href="/app/bookmarks"
        className={`${styles.iconLink} ${
          segment === "bookmarks" && styles.iconLinkSelected
        }`}
      >
        <BookmarkIcon />
      </Link>
    </aside>
  );
}
