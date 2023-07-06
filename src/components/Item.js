export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        onChange={() => onToggleItem(item)}
        type="checkbox"
        checked={item.packed}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
