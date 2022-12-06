import Sidebar from "@/components/shared/sidebar";
import styles from "@/styles/appLayout.module.scss";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.container}>
      <Sidebar />
      {children}
    </main>
  );
}
