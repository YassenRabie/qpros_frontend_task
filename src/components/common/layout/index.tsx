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
            <div className={"container mx-auto bg-teal-500 flex-1 flex flex-col justify-center items-center p-8"}>
                <h3 className={"text-white"}>
                    {title}
                </h3>

                {content &&
                  <p className={"text-white mt-3"}>
                    {content}
                  </p>
                }
            </div>

            <div className={"flex-2 container mx-auto p-16"}>
                {children}
            </div>
        </div>
    )
}

export default Index