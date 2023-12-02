import { useContext } from "react";
import { Stage, Layer, Rect, Text, Label, Line } from "react-konva";

import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";

function DragContainer() {
  const blocks = useContext(DraggedBlocksContext);

  return (
    <Stage width={1000} height={1000}>
      <Layer>
        {blocks.map((block) => (
          <Label key={block.id} x={block.x} y={block.y} draggable>
            <Rect
              width={100}
              height={40}
              fill="#f1f2f4"
              shadowBlur={10}
              shadowColor="#808080"
            />
            <Text text={block.id + " " + block.name} fontSize={15} />
          </Label>
        ))}
      </Layer>
    </Stage>
  );
}
export default DragContainer;
