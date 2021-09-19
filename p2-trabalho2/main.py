from rkn import rkn

def main():
    
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

    
    rkn(passoInt, tempoInt, m, c, k, a, w)

main();


""" Test Inputs 
    
    m_c_k = [1,0.1,2]
    a = [1,2,1.5]
    w = [0.05,1,2] 

"""