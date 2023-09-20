import React from "react";

function Category({ setCategory }) {
  const changeCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <select
      onChange={changeCategory}
      style={{
        padding: "6px 8px",
        height: "32px",
        transform: "translateY(-1px)",
      }}
    >
      <option value="기타">기타</option>
      <option value="개인">개인</option>
      <option value="공부">공부</option>
      <option value="쇼핑">쇼핑</option>
    </select>
  );
}

export default Category;
