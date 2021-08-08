import React from "react";
import { Link } from "./About";

export const Hobbies = () => {
  return (
    <>
      <p style={{ margin: 0 }}>In my free time, you can find me:</p>
      <ul style={{ marginTop: 5 }}>
        <li>🚲Going on bike rides</li>
        <li>🏸Playing badminton</li>
        <li>🥏Tossing a disc around</li>
        <li>
          ▶️Making{" "}
          <Link href="https://www.youtube.com/c/NicholasT/">
            YouTube videos
          </Link>
        </li>
      </ul>
    </>
  );
};
