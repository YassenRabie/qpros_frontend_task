import React, { FC } from "react";

interface LayoutProps {
    title: string;
    content?: string;
    children: React.ReactNode;
}

const Index: FC<LayoutProps> = (props) => {
    const { title, content, children } = props;

    return (
        <div className={"flex min-h-screen"}>
            <div className={"container w-2/5 mx-auto bg-teal-500 flex flex-col justify-center items-center p-8"}>
                <h3 className={"text-white text-3xl font-light"}>
                    {title}
                </h3>

                {content &&
                  <p className={"text-white mt-3 text-center"}>
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