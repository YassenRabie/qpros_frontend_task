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
        <div className={"flex min-h-screen flex-col lg:flex-row"}>
            <div className={"container text-white relative w-full mx-auto bg-teal-500 flex flex-col justify-center items-center p-6 lg:w-2/5 lg:p-16"}>
                {showHomeButton && <Link href={"/"}>
                    <span className={"absolute left-4 top-4 underline"}>Home</span>
                </Link>}

                <h3 className={"text-3xl font-light"}>
                    {title}
                </h3>

                {content &&
                  <p className={"mt-3 text-center text-xs lg:text-base"}>
                    {content}
                  </p>
                }
            </div>

            <div className={"container flex-1 mx-auto p-6 lg:p-16"}>
                {children}
            </div>
        </div>
    )
}

export default Index