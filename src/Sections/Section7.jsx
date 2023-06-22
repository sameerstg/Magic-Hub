import React from "react";
import p1 from "../Assets/Images/Phase1-Section7.png";
import p2 from "../Assets/Images/Phase2-Section7.png";
import p3 from "../Assets/Images/Phase3-Section7.png";
import p4 from "../Assets/Images/Phase4-Section7.png";

function Section7() {
    return (
        <div className="text-white px-6 h-screen mobile:my-96 tablet:mb-96 laptop:mt-96 laptop:mb-96 desktop:mb-0" >
            <div className="px-28 text-6xl font-bold">RoadMap</div>
            <div className=" grid desktop:grid-cols-4 laptop:grid-cols-2 mobile:grid-cols-2">
                <div className="mx-auto py-2 laptop:w-96">
                    <img src={p1} alt="" />

                    <div className="text-[#4EC0F4] text-[25px] font-semibold">
                        Research and Development
                    </div>
                    <li className="text-[18px]">Market Research</li>
                    <li className="text-[18px]">Conceptualization of Magic Hub</li>
                    <li className="text-[18px]">Idea Validation</li>
                    <li className="text-[18px]">Algorithm</li>
                    <li className="text-[18px]">Business plan developmenth</li>
                </div>

                <div className="mx-auto py-20 laptop:w-96">
                    <img src={p2} alt="" />
                    <div className="text-[#6B85E2] text-[25px] font-semibold">
                        MagicHub V1.0 Launch
                    </div>
                    <li className="text-[18px]">User documentation





                    </li>
                    <li className="text-[18px]">Community Building</li>
                    <li className="text-[18px]">UI/UX designing</li>
                    <li className="text-[18px]">Establishing API router</li>
                    <li className="text-[18px]">IDO launching</li>
                    <li className="text-[18px]">Swap & Claim launching</li>

                    <li className="text-[18px]">Bridge launching</li>

                </div>

                <div className="mx-auto laptop:w-96">
                    <img className="" src={p3} alt="" />{" "}
                    <div className="text-[#E4A74A] text-[25px] font-semibold mx-auto w-full">
                        Ecosystem Expanding Development
                    </div>
                    <li className="text-[18px]">GameFi Features Development

                    </li>
                    <li className="text-[18px]">Marketing Push in large scale</li>
                    <li className="text-[18px]">EVM utility expanding development</li>

                </div>
                <div className="mx-auto laptop:w-96 py-24">
                    <img className="mx-auto" src={p4} alt="" />{" "}
                    <div className="text-[#E4A74A] text-[25px] font-semibold mx-auto ">
                    GameFi Features Released and Ecosystem Expanding

                    </div>
                    <li className="text-[18px]">GameFi Features 

                    </li>
                    <li className="text-[18px]">GameFi Features Testing</li>
                    <li className="text-[18px]">Marketing Push in scale</li>
                    <li className="text-[18px]">GameFi Features Completed</li>
                    <li className="text-[18px]">Official Release of GameFi Features</li>
                    <li className="text-[18px]">Ecosystem Expanding</li>
                    <li className="text-[18px]">Will be updated and revealed!</li>

                </div>
               
            </div>
        </div>
    );
}

export default Section7;
