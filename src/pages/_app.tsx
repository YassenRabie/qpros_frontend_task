import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import TaskProvider from "@/context/tasksContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <TaskProvider>
          <Component {...pageProps} />
      </TaskProvider>
  );
}
