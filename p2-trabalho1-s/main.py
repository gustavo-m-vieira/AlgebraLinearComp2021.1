from newton import newton_method
from broyden import broyden_method
import sys
import math

def main():

    icod = int(input("ICOD: "))
    teta1 = float(input("teta1: "))
    teta2 = float(input("teta2: "))
    tol = int(input("Potência da tolerância: "));
    tol = math.pow(10,tol);

    print("params: ", "icod:", icod, "teta1:", teta1, "teta2:", teta2, "tol: ", tol)

    if(icod == 1):
        method = newton_method(teta1, teta2, tol);
    elif (icod == 2):
        method = broyden_method(teta1, teta2, tol);

    sys.exit();

main();