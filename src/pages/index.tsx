import Layout from "@/components/common/layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EmptyList from "@/components/home/EmptyList";

const APP_DESCRIPTION = "This app helps you track your tasks by creating a list of tasks with assigns and task timeframe and other details.";

export default function Home() {
  return (
      <main>
        <Layout
            title={"Tasks App"}
            content={APP_DESCRIPTION}
        >
            <div className={"flex flex-col items-center"}>
                <Button className={"ml-auto"}>
                    New Task <Plus className={"ml-2"} />
                </Button>

                <EmptyList />
            </div>
        </Layout>
      </main>
  )
}
