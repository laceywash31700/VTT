import { useState, useEffect } from 'react';
import './Board.css';

const Board = ({ map, tokens }) => {
  const [boardMap, setBoardMap] = useState([]); // Renamed map to boardMap to avoid naming conflicts

  // Load the map image and calculate the dimensions
  useEffect(() => {
    const mapImage = new Image();
    mapImage.onload = () => {
      const { width, height } = mapImage;
      const cellSize = 50; // Adjust cell size as needed
      const numRows = Math.ceil(height / cellSize);
      const numCols = Math.ceil(width / cellSize);
      const newMap = Array.from({ length: numRows }, () => Array(numCols).fill(0));
      setBoardMap(newMap);
    };
    mapImage.src = './map.jpg'; // Adjust path to map image
  }, []);

  return (
    <div className="board" style={{ backgroundImage: `url(./map.jpg)` }}>
      {boardMap.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="cell">
              {/* Render tokens in this cell */}
              {renderTokenAtPosition(tokens, [rowIndex, colIndex])}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const renderTokenAtPosition = (tokens, position) => {
  // Check if any token exists at this position
  const token = Object.values(tokens).find(
    (token) => token.position[0] === position[0] && token.position[1] === position[1]
  );

  // If a token exists at this position, render it
  if (token) {
    return <div className="token" />;
  }

  // Otherwise, render an empty cell
  return null;
};

export default Board;
