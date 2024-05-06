import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next JS Dev</h1>
      <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
      <input className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
      <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
      <button type="button" className="btn btn-primary">Primary</button>
     </main>
  );
}
