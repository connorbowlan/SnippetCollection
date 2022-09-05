import React from 'react';

/**
 * The Cell component represents the fundamental "clickable object" in
 * retro-draw, there will be <Cell /> in both Palette and Grid.
 * 
 * Props passed in will include:
 * - color, which is the background color of the cell
 * - isActive, which will be set only on cells in the Palette
 * - handleClick, which will be a function to run when the cell has been clicked on 
 */

// Using function methodName(props) follows newer React standards.
// See https://reactjs.org/docs/components-and-props.html for examples and documentation.
function Cell(props) {

  /* Create constants for color, isActive, and handleClick, reading the value off of props */

  /**
   * For the template you need to
   * - set the className to be "cell active" if the value of isActive
   *    is true
   * - set the style property on the div to have backgroundColor equal to the 
   *    color string passed in with the props
   * - set the onClick property to be equal to the handleClick function
   *    passed in with the props
   */
  const color = props.color;
  const isActive = props.isActive;

  const isActiveCellClass = isActive ? 'cell active' : 'cell';
  const styles = {
    background: color,
  }

  return (
    <div className={isActiveCellClass} style={styles}></div>
  );
}

export default Cell;