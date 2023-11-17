import React, { FC } from "react";
import Link from "next/link";
import {useRouter} from "next/router";

interface LayoutProps {
    title: string;
    content?: string;
    children: React.ReactNode;
}

const Index: FC<LayoutProps> = (props) => {
    const { title, content, children } = props;

    const { pathname } = useRouter();

    const showHomeButton = pathname !== "/";

    return (
        <div className={"flex min-h-screen"}>
            <div className={"container text-white relative w-2/5 mx-auto bg-teal-500 flex flex-col justify-center items-center p-8"}>
                {showHomeButton && <Link href={"/"}>
                    <span className={"absolute left-4 top-4 underline"}>Home</span>
                </Link>}

                <h3 className={"text-3xl font-light"}>
                    {title}
                </h3>

                {content &&
                  <p className={"mt-3 text-center"}>
                    {content}
                  </p>
                }
            </div>

            <div className={"container flex-1 mx-auto p-16"}>
                {children}
            </div>
        </div>
    )
}

export default Index