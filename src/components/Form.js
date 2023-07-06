import { useState } from "react";

export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
}
