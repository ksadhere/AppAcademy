const {
  or,
  and,
  calculateTruthTable,
} = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

// Compute the following truth tables:

// ```
// A    B     !A || (A && B)
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1
// ```

// ```
// A    B     B || !A
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1
// ```

// ```
// A    B     !(A && !B)
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1
// ```

// ```
// A    B     !(A || !B)
// --------------------
// 0    0       0
// 0    1       1
// 1    0       0
// 1    1       0
// ```

// ```
// A    B     A || !A
// --------------------
// 0    0       1
// 0    1       1
// 1    0       1
// 1    1       1
// ```

// ```
// A    B     B && !B
// --------------------
// 0    0       0
// 0    1       0
// 1    0       0
// 1    1       0
// ```

// ```
// A    B    C     A && B || !C
// --------------------
// 0    0    0       1
// 0    0    1       0
// 0    1    0       1
// 0    1    1       0
// 1    0    0       1
// 1    0    1       0
// 1    1    0       1
// 1    1    1       1
// ```

// ```
// A    B    C     !A || (B && C)
// --------------------
// 0    0    0       1
// 0    0    1       1
// 0    1    0       1
// 0    1    1       1
// 1    0    0       0
// 1    0    1       0
// 1    1    0       0
// 1    1    1       1
// ```

/******************************************************************************/

// Update arguments to calculate and console.log returned value
calculateTruthTable(0, and, 1); // 0
calculateTruthTable(1, or, 0); // 1
