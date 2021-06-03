/** @jsxImportSource @emotion/react */

import { FC, memo } from "react";
import { PersonType } from "./App";
import styles from "./Person.module.pcss";
import cx from "clsx";
import Button from "./Button";

const getBgColor = (person: PersonType) => {
  if (person.gender === 0) {
    return "rgb(200, 200, 255)";
  }

  if (person.gender === 1) {
    return "rgb(255, 200, 200)";
  }

  return "rgb(200, 200, 200)";
};

type Props = {
  person: PersonType;
  firePerson: (id: string) => void;
};

const Person: FC<Props> = (props) => {
  const { person, firePerson } = props;

  /*
  const classes = cx(styles.root, {
    [styles.male]: person.gender === 0,
    [styles.female]: person.gender === 1
  });
  */

  // <label htmlFor />

  return (
    <div
      css={[
        {
          border: "1em solid rgb(0, 0, 0)",
          borderRadius: "1em",
          marginTop: "1em",
          marginBottom: "1em",
          padding: "1em",
          backgroundColor: getBgColor(person)
        }
      ]}
    >
      <div>
        <strong>{person.lastName}</strong>, {person.firstName}
      </div>

      <div>
        <Button
          onClick={() => {
            firePerson(person.id);
          }}
        >
          Liberate!
        </Button>
      </div>
    </div>
  );
};

export default memo(Person);
