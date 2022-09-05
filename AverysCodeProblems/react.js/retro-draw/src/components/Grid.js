import React from 'react';
import Cell from './Cell';


/**
 * The Grid component represents the interface for displaying clickable
 * color cells, and needs to update the color of a clicked cell from the
 * activeColor when a user clicks on it.
 */
const Grid = (props) => {
  /**
   * Create constants for activeColor, cellList, and setCellList, reading the value off of the props
   */

  
  /**
   * For the template you need to:
   * - map over the cellList
   * - return from the mapping function a <Cell /> which:
   *    - has a unique key (you can use 'grid-' and the index of the cell)
   *    - has a prop of color equal to value of color on the cell from the map
   *    - has a prop of handleClick which is a function that:
   *        - makes a copy of the current cellList
   *        - updates the color of the clicked cell to the activeColor (the index from the map function is useful here)
   *        - calls setCellList, passing in the updated copy
   */
  return <div className="grid"></div>
}

export default Grid;