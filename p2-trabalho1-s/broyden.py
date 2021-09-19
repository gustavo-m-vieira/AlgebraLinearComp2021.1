from newton import getError, getPossibleValues, createOutput
import numpy as np

def broyden_method(teta1, teta2, tol):

    error = 1.1
    counter = 0
    c2 = 1
    c3 = 0
    c4 = 0
    
    b = np.identity(3);

    outputText = createOutput(c2, c3, c4, counter, 'não definido');

    while error > tol:

        j = b
        possibleValues = getPossibleValues(c2, c3, c4, teta1, teta2)

        print("J: ", j)
        newJ = np.linalg.inv(j)

        deltaX = ((-1)*np.matmul(newJ,possibleValues))
        
        newX = np.zeros(3)

        newX[0] = c2 + deltaX[0]
        newX[1] = c3 + deltaX[1]
        newX[2] = c4 + deltaX[2]

        newPossibleValues = getPossibleValues(newX[0], newX[1], newX[2], teta1, teta2)
        
        y = np.zeros(3);
        for i in range(3):
            y[i] = possibleValues[i] + newPossibleValues[i]

        error = getError(deltaX, newX)
        [c2, c3, c4] = newX;

        outputText += createOutput(c2, c3, c4, counter, error);

        newBPart1 = (y-(np.matmul(b,deltaX))*np.transpose(deltaX))
        newBPart2 = (np.matmul(np.transpose(deltaX),deltaX))

        b = b + ( newBPart1/newBPart2 )
    
    print(outputText)