import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";

const Page2FinalThoughts = ({ title, finalthoughts }) => {
    return (
        <div className="py-6 md:py-12">
            <Title title={title} text_color={"text-primary"} />
            <div className="pt-6 space-y-5">
                {finalthoughts.map((data, index) =>
                    <Description
                        key={index}
                        description={data}
                        text_color={"text-black"}
                        text_start={true}
                    />
                )}
            </div>
        </div>
    );
};

export default Page2FinalThoughts;
