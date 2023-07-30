import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import "../downloadstyle.css"

import decensha_macOSIcon from "../assets/downloads/macOS_Icon.svg";
import macOSDownload from "../assets/downloads/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import decensha_iOSIcon from "../assets/downloads/iOS_Icon.svg";
import iOSDownload from "../assets/downloads/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

export const meta: V2_MetaFunction = () => {
    return [
      { title: "Download Decensha Client - Decensha" },
      { name: "description", content: "A decentralized chatroom" },
    ];
  };

export default function Sales() {
  return (
    <div className="sitebody">
      <h1 className="download-header">Download Decensha Client</h1>
        <p id="download-textparam">You can download and install Decensha Client for your operating system.</p>

        <div id="download-platbtns-cont">

            <div id="download-platbtns">
                <div id="download-platbtns-header">macOS</div>
                <div id="download-platbtns-iconimage">
                    <img
                    alt="macOS Icon" 
                    src={decensha_macOSIcon} />
                </div>
                <div id="download-platbtns-downloads">
                    <img 
                    src={macOSDownload} 
                    alt="Download"
                    style={{
                        width: "300px",
                        height: "50px",
                        cursor: "pointer",
                        WebkitUserSelect: "none",
                    }}
                    />
                    <div id="download-directbtn"><span id="download-directbtn-in">Direct Download (.dmg)</span></div>
                </div>
            </div>

            <div id="download-platbtns">
                <div id="download-platbtns-header">iOS</div>
                <div id="download-platbtns-iconimage">
                    <img
                    alt="iOS Icon" 
                    style={{
                        borderRadius: "50px",
                        boxShadow: "black 0px 0px 3px",
                        margin: "30px"
                    }}
                    src={decensha_iOSIcon} />
                </div>
                <div id="download-platbtns-downloads">
                    <img 
                    src={iOSDownload} 
                    alt="Download"
                    style={{
                        width: "300px",
                        height: "50px",
                        cursor: "pointer",
                        WebkitUserSelect: "none",
                    }}
                    />
                </div>
            </div>
        </div>

      <Outlet />
    </div>
  );
}