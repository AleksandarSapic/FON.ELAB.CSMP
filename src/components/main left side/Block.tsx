import BlockProps from "../../interfaces/BlockProps";

function Block({ name }: BlockProps) {
  return <div className="col-4 block">{name}</div>;
}

export default Block;
