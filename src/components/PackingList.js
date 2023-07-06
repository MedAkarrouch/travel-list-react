import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let itemsArr;
  if (sortBy === "input") itemsArr = items;
  if (sortBy === "description")
    itemsArr = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    itemsArr = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {itemsArr.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
      {itemsArr.length > 0 && (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By Input Order</option>
            <option value="description">Sort By Description</option>
            <option value="packed">Sort By Packed Status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      )}
    </div>
  );
}
