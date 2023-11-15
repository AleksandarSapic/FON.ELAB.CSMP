type Inputs = {
  input1?: string | null;
  input3?: string | null;
  input2?: string | null;
};

type Parameters = {
  parameter1?: number | null;
  parameter2?: number | null;
  parameter3?: number | null;
};

type DraggedBlock = {
  id: number;
  name: string;
  input: Inputs;
  parameter: Parameters;
  output: string;
};

interface DraggedBlocks {
  objects: DraggedBlock[];
  addBlock: (
    name: string,
    input: Inputs,
    parameter: Parameters,
    output: string
  ) => void;
  removeBlock: (id: number) => void;
}

const DraggedBlocks: DraggedBlock[] = [
  {
    id: 1,
    name: "Sin",
    input: {
      input1: "Sabirac",
      input3: null,
      input2: null,
    },
    parameter: {
      parameter1: 2,
      parameter2: null,
      parameter3: 2.5,
    },
    output: "ArcSin",
  },
];

export default DraggedBlocks;
