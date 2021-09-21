from math import pow
from utils import Function as f
from icod1 import bissection, newton
from icod34 import centralDifference, richardson, stepForward, stepBack
from polyIntegration import polyIntegration
from gaussIntegration import gaussIntegration
import os

def main():

    outputText = ""
    fileName = ""

    icod = int(input("ICOD: "))
    c1 = float(input("C1: "))
    c2 = float(input("C2: "))
    c3 = float(input("C3: "))
    c4 = float(input("C4: "))

    if (icod==1):
        fileName = "calculo_raiz"
        outputText += "Calculo da Raiz\n"
        outputText += "C1: " + str(c1) + " C2: " + str(c2) + " C3: " + str(c3) + " C4: " + str(c4) + "\n"


        a = float(input("Ponto inicial do intervalo: "))
        b = float(input("Ponto final do intervalo: "))
        tol =  int(input("Tolerância: "))

        tol = pow(10, tol)

        method = int(input("Método: (1 -> Bisseção, 2 -> Newton): "));

        outputText += "Ponto inicial do intervalo: " + str(a) + "\n"
        outputText += "Ponto final do intervalo:" + str(b) + "\n"
        outputText += "Tolerância: " + str(tol) + "\n"


        if(method == 1):
            fileName += "_bissecao"
            outputText += "Método da Bisseção\n"
            outputText += bissection(tol,a,b,f(c1,c2,c3,c4));
        elif(method == 2):
            fileName += "_newton"
            outputText += "Método de Newton\n"
            outputText += newton(tol, a, b, f(c1,c2,c3,c4));

    elif(icod == 2):
        fileName = "calculo_integral"
        outputText += "Calculo da Integral\n"
        outputText += "C1: " + str(c1) + " C2: " + str(c2) + " C3: " + str(c3) + " C4: " + str(c4) + "\n"

        a = float(input("Ponto inicial do intervalo: "))
        b = float(input("Ponto final do intervalo: "))
        points = int(input("Qtd pontos de integração: "))

        if(points < 2 or points > 10):
            points = int(input("Insira uma número de 2 a 10: "))
        
        outputText += "Ponto inicial do intervalo: " + str(a) + "\n"
        outputText += "Ponto final do intervalo:" + str(b) + "\n"
        outputText += "Pontos de Integração: " + str(points) + "\n"

        method = int(input("Método: (1 -> Quadratura de Gauss, 2 -> Quadratura Polinomial): "));

        if(method == 1):
            fileName += "_integracao_gaussiana"
            outputText += "Método de Gauss\n"
            outputText += gaussIntegration(a,b,points,f(c1,c2,c3,c4));
        elif(method == 2):
            fileName += "_integracao_polinomial"
            outputText += "Método Polinomial\n"
            outputText += polyIntegration(a,b,points,f(c1,c2,c3,c4))

    elif(icod == 3):
        outputText += "Calculo da Derivada\n"
        outputText += "C1: " + str(c1) + " C2: " + str(c2) + " C3: " + str(c3) + " C4: " + str(c4) + "\n"

        x = float(input("x: "))
        deltaX = float(input("delta: "))

        outputText += "X: " + str(x) + " Delta X: " + str(deltaX) + "\n"

        method = int(input("Método: (1 -> Passo a frente, 2 -> Passo atrás, 3-> Diferença central): "));
        

        if(method==1):
            fileName = "derivada_passa_frente"
            outputText += "Método passa a frente\n"
            derivative = stepForward(x, deltaX, f(c1,c2,c3,c4))
            outputText += "A derivada é " + str(derivative) + "\n"

        elif(method==2):
            fileName = "derivada_passa_atras"
            outputText += "Método passo atrás\n"
            derivative = stepBack(x, deltaX, f(c1,c2,c3,c4))
            outputText += "A derivada é " + str(derivative) + "\n"

        elif(method==3):
            fileName = "derivada_diferenca_central"
            outputText += "Diferença Central\n"
            derivative = centralDifference(x, deltaX, f(c1,c2,c3,c4))
            outputText += "A derivada é " + str(derivative) + "\n"
 
    
    elif(icod == 4):
        fileName = "derivada_richardson"
        outputText += "Calculo da estimação da derivada\n"
        outputText += "C1: " + str(c1) + " C2: " + str(c2) + " C3: " + str(c3) + " C4: " + str(c4) + "\n"

        x = float(input("Dê o valor de x que se deseja calcular: "))
        deltaX1 = float(input("deltaX 1: "));
        deltaX2 = float(input("deltaX 2: "));

        outputText += "A: " + str(x) + " Delta X1: " + str(deltaX1) + " Delta X2: " + str(deltaX2) + "\n"
            
        derivative = richardson(x, deltaX1, deltaX2, f(c1,c2,c3,c4));
        outputText += "A derivada é " + str(derivative) + "\n"
    

    with open(os.path.join(os.getcwd(),f"{fileName}.txt"), "w") as file:
        file.write(outputText)

main()