import React, { useRef, useState } from "react";
import { dropdownArrow } from "../../assets";
import { useOnClickOutside } from "../../hooks/useOutsideClick";

import styles from "./styles.module.css";

const Dropdown = ({ items }) => {
  const [showList, setShowList] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const ref = useRef();

  useOnClickOutside(ref, () => setShowList(false));

  const handleSelection = (item) => {
    setCurrentItem(item);
    setShowList(false);
  };

  return (
    <div className={`${styles.container}`} ref={ref}>
      <img
        src={dropdownArrow}
        alt="arrow"
        className={styles.arrow}
        onClick={() => setShowList(!showList)}
      />
      <div className={styles.display} onClick={() => setShowList(!showList)}>
        {currentItem ? currentItem : "Select"}
      </div>
      {showList ? (
        <div className={styles.list}>
          {items
            ? items.map((item, index) => (
                <div key={index} onClick={() => handleSelection(item)}>
                  {item}
                </div>
              ))
            : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { Dropdown };
