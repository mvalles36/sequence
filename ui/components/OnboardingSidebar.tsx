import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBell,
  faSitemap,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import IntegrationIcon from "../public/integration.svg";

const iconStyle: React.CSSProperties = {
  width: 15,
};

const ITEMS = [
  {
    section: "Welcome",
    icon: <FontAwesomeIcon icon={faStar} style={iconStyle} />,
  },
  {
    section: "Integrations",
    icon: (
      <svg
        width="15"
        height="23"
        viewBox="0 0 15 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={iconStyle}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.05784 16.164L0.869614 17.3692C0.407343 17.6237 0.393041 18.2829 0.843834 18.5573L6.41952 21.9512C7.22372 22.4407 8.23382 22.4407 9.03801 21.9512L14.6137 18.5573C15.0645 18.2829 15.0502 17.6237 14.5879 17.3691L12.2795 16.0979L9.51867 17.7784C8.34893 18.4904 6.8797 18.4904 5.70996 17.7784L3.05784 16.164ZM4.21352 15.5276L6.51405 14.2606C7.27031 13.8441 8.18723 13.8441 8.94349 14.2606L11.1238 15.4614L8.92356 16.8007C8.11936 17.2902 7.10927 17.2902 6.30507 16.8007L4.21352 15.5276Z"
          fill="#4E4F55"
        />
        <path
          d="M6.28516 3.95952C7.04142 3.54303 7.95833 3.54303 8.71459 3.95952L14.359 7.06805C14.8213 7.32264 14.8356 7.98181 14.3848 8.25621L8.80911 11.6501C8.00492 12.1396 6.99482 12.1396 6.19063 11.6501L0.614937 8.25622C0.164143 7.98183 0.178445 7.32265 0.640716 7.06807L6.28516 3.95952Z"
          fill="#4E4F55"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.9434 11.0136L0.755234 12.2186C0.292963 12.4732 0.278661 13.1324 0.729455 13.4068L6.30514 16.8007C7.10934 17.2902 8.11944 17.2902 8.92363 16.8007L14.4993 13.4068C14.9501 13.1324 14.9358 12.4732 14.4735 12.2186L12.1651 10.9473L9.40418 12.6279C8.23444 13.3399 6.76521 13.3399 5.59547 12.6279L2.9434 11.0136ZM4.09909 10.3771L6.39967 9.1101C7.15593 8.69361 8.07285 8.69361 8.82911 9.1101L11.0094 10.3108L8.80907 11.6502C8.00488 12.1397 6.99478 12.1397 6.19058 11.6502L4.09909 10.3771Z"
          fill="#4E4F55"
        />
      </svg>
    ),
  },
  {
    section: "Create an Alert",
    icon: <FontAwesomeIcon icon={faBell} style={iconStyle} />,
  },
  {
    section: "Configure the Message",
    icon: <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />,
  },
  {
    section: "Done",
    icon: <FontAwesomeIcon icon={faCheck} style={iconStyle} />,
  },
];

const OnboardingSiebar = ({ index }: { index: number }) => (
  <Sidebar items={ITEMS} index={index} />
);

export default OnboardingSiebar;
