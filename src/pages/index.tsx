import Layout from "@/components/common/layout";

const APP_DESCRIPTION = "This app helps you track your tasks by creating a list of tasks with assigns and task timeframe and other details.";

export default function Home() {
  return (
      <main>
        <Layout
            title={"Tasks App"}
            content={APP_DESCRIPTION}
        >
            hello world
        </Layout>
      </main>
  )
}
