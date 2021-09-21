import os
from newton import newton_method
from broyden import broyden_method
import math

def main():

    icod = int(input("ICOD: "))
    teta1 = float(input("teta1: "))
    teta2 = float(input("teta2: "))
    tol = int(input("Potência da tolerância: "))
    tol = math.pow(10,tol)

    outputText = ""

    outputText += "ICOD: " + str(icod) + "\n"
    outputText += "Teta1: " + str(teta1) + "\n"
    outputText += "Teta2: " + str(teta2) + "\n"
    outputText += "Potência: " + str(tol) + "\n"

    fileName = "method_"
    if(icod == 1):
        fileName += "newton"
        outputText += newton_method(teta1, teta2, tol)
    elif (icod == 2):
        fileName += "broyden"
        outputText += broyden_method(teta1, teta2, tol)

    with open(os.path.join(os.getcwd(),f"{fileName}.txt"), "w") as file:
        file.write(outputText)

main();