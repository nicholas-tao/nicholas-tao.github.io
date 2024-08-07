import { IItem } from "../types";
import { Link } from "./Home";
import React from "react";
import styled from "styled-components";

interface IProps {
  description: string;
  items: IItem[];
}

export const List = (props: IProps) => {
  const { description, items } = props;

  return (
    <Wrapper>
      {description}
      <ul style={{ marginTop: 5 }}>
        {items.map((item) => {
          return (
            <li key={item.description}>
              {item.emoji}
              {item.description}{" "}
              <Link href={item.link ?? ""}>{item.company}</Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 16px;
`;
