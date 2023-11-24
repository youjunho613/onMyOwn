import Weather from "@/components/weather/Weather";
import styles from "./page.module.css";
import TodoList from "@/components/todolist/TodoList";
import Calendar from "@/components/calendar/Calendar";
import Calculator from "@/components/calculator/Calculator";

export default function Home() {
  return (
    <main className={styles.main}>
      <Weather />
      <Calculator />
      <TodoList />
      <Calendar />
    </main>
  );
}
