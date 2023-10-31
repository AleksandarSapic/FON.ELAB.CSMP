interface BlockCategoriesButtonProps {
  category: string;
  onClick: (category: string) => void;
}

function BlockCategoriesButton({
  category,
  onClick,
}: BlockCategoriesButtonProps) {
  return <button onClick={() => onClick(category)}>{category}</button>;
}
export default BlockCategoriesButton;
