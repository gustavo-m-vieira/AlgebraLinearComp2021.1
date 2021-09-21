import os
from rkn import rkn
    # Test Values
    # m = 1
    # c = 0.2
    # k = 2
    # a = [1,2,1.5]
    # w = [0.05,1,2] 

def main():
    
    outputText = ""
    passoInt = float(input("Passo de integração: "))
    tempoInt = float(input("Tempo total de integração: "))

    m = float(input("M: "))
    c = float(input("C: "))
    k = float(input("K: "))
    
    a = []
    a.append(float(input("a1: ")))
    a.append(float(input("a2: ")))
    a.append(float(input("a3: ")))
    
    w = []
    w.append(float(input("w1: ")))
    w.append(float(input("w2: ")))
    w.append(float(input("w3: ")))

    outputText += "Passo de Integração: " + str(passoInt) + "\n"
    outputText += "Tempo de Integração: " + str(tempoInt) + "\n"
    outputText += "m: " + str(m) + "\n"
    outputText += "c: " + str(c) + "\n"
    outputText += "k: " + str(k) + "\n"
    outputText += "a1: " + str(a[0]) + "\n"
    outputText += "a2: " + str(a[1]) + "\n"
    outputText += "a3: " + str(a[2]) + "\n"
    outputText += "w1: " + str(w[0]) + "\n"
    outputText += "w2: " + str(w[1]) + "\n"
    outputText += "w3: " + str(w[2]) + "\n"

    
    outputText += rkn(passoInt, tempoInt, m, c, k, a, w)

    with open(os.path.join(os.getcwd(),"rkn.txt"), "w") as file:
        file.write(outputText)

main();