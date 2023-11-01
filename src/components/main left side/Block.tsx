import BlockProps from "../../interfaces/BlockProps";

function Block({ name }: BlockProps) {
  return <div className="block">{name}</div>;
}

export default Block;
