import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => setItems((items) => [...items, item]);
  const handleDeleteItem = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));
  const handleToggleItem = (item) =>
    setItems((items) =>
      items.map((ele) =>
        ele.id === item.id ? { ...item, packed: !item.packed } : ele
      )
    );
  const handleClearList = () => setItems([]);
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
