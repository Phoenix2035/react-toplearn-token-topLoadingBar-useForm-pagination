import React from "react";
import {Img} from "react-image";
import CircleLoader from "react-spinners/ScaleLoader";

function ShowImage({image}) {
    return (
        <Img
            src={[
                `https://toplearnapi.ghorbany.dev/${image}`,
                "https://via.placeholder.com/150x100"
            ]}
            loader={
                <div className="text-center mx-auto">
                    <CircleLoader loading={true} color={"#4A90E2"}/>
                </div>
            }
        />
    )
}


export default ShowImage;