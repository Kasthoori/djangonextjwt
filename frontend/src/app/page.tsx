import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next JS Dev</h1>
      <input className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
      <button type="button" className="btn btn-primary">Primary</button>
     </main>
  );
}
