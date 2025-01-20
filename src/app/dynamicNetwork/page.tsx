"use client";
import React, { useState, useCallback } from "react";
import { DefaultNode, Graph } from "@visx/network";

interface CustomNode {
  x: number;
  y: number;
  color?: string;
  id: number;
}

interface CustomLink {
  source: CustomNode;
  target: CustomNode;
  dashed?: boolean;
}

const initialNodes: CustomNode[] = [
  { id: 1, x: 50, y: 20, color: "#f4d03f" },
  { id: 2, x: 200, y: 250, color: "#c39bd3" },
  { id: 3, x: 300, y: 40, color: "#26deb0" },
];

const initialLinks: CustomLink[] = [
  { source: initialNodes[0], target: initialNodes[1], dashed: true },
  { source: initialNodes[1], target: initialNodes[2], dashed: true },
  { source: initialNodes[2], target: initialNodes[0], dashed: true },
];

const background = "#272b4d";

export default function Example() {
  const [nodes, setNodes] = useState<CustomNode[]>(initialNodes);
  const [draggingNodeId, setDraggingNodeId] = useState<number | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handlePointerDown = (event: React.PointerEvent, nodeId: number) => {
    event.preventDefault(); // Prevent default behavior (especially for mobile)
    const { clientX, clientY } = event;
    setDraggingNodeId(nodeId);
    setOffset({ x: clientX, y: clientY });
  };

  
  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      if (draggingNodeId === null) return;
      const { clientX, clientY } = event;
      const dx = clientX - offset.x;
      const dy = clientY - offset.y;

      setNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.id === draggingNodeId
            ? { ...node, x: node.x + dx, y: node.y + dy }
            : node
        )
      );

      setOffset({ x: clientX, y: clientY }); 
    },
    [draggingNodeId, offset]
  );

  
  const handlePointerUp = () => {
    setDraggingNodeId(null); 
  };

 
  React.useEffect(() => {
    if (draggingNodeId !== null) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    } else {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [draggingNodeId, handlePointerMove]);

  const links: CustomLink[] = initialLinks.map((link) => ({
    ...link,
    source: nodes.find((node) => node.id === link.source.id)!,
    target: nodes.find((node) => node.id === link.target.id)!,
  }));

  const graph = { nodes, links };

  return (
    <svg
      width={"100%"}
      height={1000}
      style={{ touchAction: "none" }} 
    >
      <rect width={"100%"} height={1000} fill={background} />
      <Graph<CustomLink, CustomNode>
        graph={graph}
        top={20}
        left={100}
        nodeComponent={({ node }) => (
          <g
            onPointerDown={(e) => handlePointerDown(e, node.id)} 
            style={{ cursor: "pointer" }}
          >
            <DefaultNode fill={node.color || "#999"} />
          </g>
        )}
        linkComponent={({ link: { source, target, dashed } }) => (
          <line
            x1={source.x}
            y1={source.y}
            x2={target.x}
            y2={target.y}
            strokeWidth={2}
            stroke="#999"
            strokeOpacity={0.9}
            strokeDasharray={dashed ? "8,4" : undefined}
          />
        )}
      />
    </svg>
  );
}

