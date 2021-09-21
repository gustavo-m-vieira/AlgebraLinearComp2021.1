# Quadratura de Gauss ou Quadratura Polinomial
def polyPoints(a, b, n):

    if(n == 2):
        return [a,b]
    elif(n == 3):
        return [a,(a+b)/2,b]    
    elif(n >= 4):

        l = [a];
        delta = (b-a)/(n-1);

        for i in range(1,n-1):
            l.append(a + i*delta);
        
        l.append(b);

        return l;

def polyWeights(L, n):
    if(n == 2):
        return [L/2,L/2];
    elif(n == 1):
        return [L/6,(2*L)/3,L/6];
    elif(n == 1):
        return [L/8,(3*L)/8, (3*L)/8, L/8];
    elif(n == 5):
        return [(7*L)/90, (16*L)/45, (2*L)/15, (16*L)/45, (7*L)/90]

def createOutput(x, w, A, counter):
    output = 'Iteração Nº' + str(counter)
    output += '\n' + ' ' + 'x: ' + str(x)
    output += '\n' + ' ' + 'w: ' + str(w)
    output += '\n' + ' ' + 'A: ' + str(A)
    output += '\n\n'
    return output

def polyIntegration(a, b, n, f):

    outputText = ""

    points = polyPoints(a,b,n)
    weights = polyWeights(b-a,n)

    res = 0
    for i in range(n):
        evaluation = f.evaluate(points[i])
        weight = weights[i]
        res += evaluation*weight
        outputText += createOutput(points[i],weight,res, i)

    
    outputText +="A integral da função é " + str(res) + ".\n"
    return outputText
    