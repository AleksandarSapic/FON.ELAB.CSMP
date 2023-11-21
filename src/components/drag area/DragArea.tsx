import DragContainer from "./DragContainer";

interface DragAreaProps {
  handleDrop: (blockName: string) => void;
}

function DragArea({ handleDrop }: DragAreaProps) {
  return (
    <div className="w-50 drag-area">
      <DragContainer handleDrop={handleDrop} />
    </div>
  );
}
export default DragArea;
