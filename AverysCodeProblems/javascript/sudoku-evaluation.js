// Example input:
let puzzle1 =
             [[ 8,9,5,   7,4,2,   1,3,6 ], 
              [ 2,7,1,   9,6,3,   4,8,5 ], 
              [ 4,6,3,   5,8,1,   7,9,2 ], 
              [ 9,3,4,   6,1,7,   2,5,8 ], 
              [ 5,1,7,   2,3,8,   9,6,4 ], 
              [ 6,8,2,   4,5,9,   3,7,1 ], 
              [ 1,5,9,   8,7,4,   6,2,3 ], 
              [ 7,4,6,   3,2,5,   8,1,9 ], 
              [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzle2 = 
             [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ], 
              [ 4,6,3,   5,8,1,   7,9,2 ], 
              [ 9,3,4,   6,1,7,   2,5,8 ], 
              [ 5,1,7,   2,3,8,   9,6,4 ], 
              [ 6,8,2,   4,5,9,   3,7,1 ], 
              [ 1,5,9,   8,7,4,   6,2,3 ], 
              [ 7,4,6,   3,2,5,   8,1,9 ], 
              [ 3,2,8,   1,9,6,   5,4,7 ]];

let isValid = isValid(puzzle1);

if(isValid)
{
     console.log("The sudoku puzzle is valid.");
}
else
{
     console.log("The sudoku puzzle is not valid.");
}

let sudokuIsSame = isSame(puzzle1, puzzle2);

if(sudokuIsSame)
{
     console.log("The sudoku puzzle is the same.");
}
else
{
     console.log("The sudoku puzzle is not the same.");
}

function isValid(puzzle)
{
     for(let i = 0; i < puzzle.length; i++)
     {
          // Validate all rows.
          let row = getRow(puzzle, i);

          if(!includes1to9(row))
          {
               return false;
          }

          // Validate all columns.
          let column = getColumn(puzzle, i);

          if(!includes1to9(column))
          {
               return false;
          }
     }

     // Validate all sections.
     for(let i = 0; i < 3; i++)
     {
          for(let j = 0; j < 3; j++)
          {
               let section = getSection(puzzle, i, j);

               if(!includes1to9(section))
               {
                    return false;
               }
          }
     }

     return true;
}

function isSame(puzzle1, puzzle2)
{
     // See https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/ for documentation.
     for(let i = 0; i < puzzle1.length; i++)
     {
          // Compare all rows.
          let row1 = JSON.stringify(getRow(puzzle1, i));
          let row2 = JSON.stringify(getRow(puzzle2, i));

          if(row1 !== row2)
          {
               return false;
          }

          // Compare all columns.
          let column1 = JSON.stringify(getColumn(puzzle1, i));
          let column2 = JSON.stringify(getColumn(puzzle2, i));

          if(column1 !== column2)
          {
               return false;
          }
     }

     return true;
}

function getRow(puzzle, index)
{
     // Returns the data from the given index.
     return puzzle[index];
}

function getColumn(puzzle, index)
{
     // Initialize an empty array.
     let column = [];

     // Iterate through puzzle.
     for(let i = 0; i < puzzle.length; i++)
     {
          // Get each row respectively.
          let row = getRow(puzzle, i);

          // Get the position of the column specified (index)
          // and set it to column[i].
          column[i] = row[index];
     }

     // Return the populated array.
     return column;
}

function getSection(puzzle, x, y)
{
     // Initializing an empty array.
     let section = [];

     // Estabishing a size to increase to.
     let sectionSize = 3;

     // Multiplying the x and y coordinates by the size.
     // For [1,1], rowStart = 3 and columnStart = 3.
     let rowStart = y * sectionSize;
     let columnStart = x * sectionSize;

     for(let i = 0; i < sectionSize; i++)
     {
          let row = getRow(puzzle, i + rowStart);
          
          for(let j = 0; j < sectionSize; j++)
          {
               let column = row[j + columnStart];
               section.push(column);
          }
     }
      
      return section;
}

function includes1to9(section)
{
     let total = 0;

     for(let i = 0; i < section.length; i++)
     {
          total += section[i];
     }

     if(total === 45)
     {
          return true;
     }

     return false;
}
