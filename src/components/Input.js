export function Input({ type, pHolder, handleChange }) {
  return <input type={type} placeholder={pHolder} onChange={handleChange} />;
}
