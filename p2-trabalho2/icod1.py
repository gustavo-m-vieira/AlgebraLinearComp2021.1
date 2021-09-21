def createOutput(a, b, x, fx, modBA, counter):
    output = 'Iteração Nº' + str(counter)
    output += '\n' + ' ' + 'A: ' + str(a)
    output += '\n' + ' ' + 'B: ' + str(b)
    output += '\n' + ' ' + 'x: ' + str(x)
    output += '\n' + ' ' + 'f(x): ' + str(fx)
    output += '\n' + ' ' + '|b-a|: ' + str(modBA)
    output += '\n\n'
    return output


def createOutputNewton(counter, a1, a2, a3, a4, a5):
    output = 'Iteração Nº' + str(counter)
    output += '\n' + ' ' + 'x(k-1): ' + str(a1)
    output += '\n' + ' ' + 'f(x): ' + str(a2)
    output += '\n' + ' ' + "f'(x): " + str(a3)
    output += '\n' + ' ' + 'xk: ' + str(a4)
    output += '\n' + ' ' + 'xk-x: ' + str(a5)
    output += '\n\n'
    return output

def bissection(tol, a, b, f):
    outputText = ""
    counter = 0

    while(b-a > tol):
        x = (a+b)/2.0
        fx = f.evaluate(x)
        if (fx > 0.0): 
            b = x
        else:
            a = x
        counter += 1
        outputText += createOutput(a,b, x, fx, abs(b-a), counter)
        
    outputText += "A raiz encontrada é" + str(x) + ".\n"

    return outputText

def newton(tol, a, b, f):
    outputText = ""
    
    x = (a+b)/2.0
    tolk = 1
    counter = 0

    try:
        while tolk > tol:
            xk = x - (f.evaluate(x)/f.derivative(x))
            tolk = abs(xk - x)
            
            outputText += createOutputNewton(counter,x,f.evaluate(x),f.derivative(x),xk,tolk)

            x = xk
            counter+=1

    except OverflowError as e:
        x = "não encontrada pois não foi atingida convergência!"

    outputText += "A raiz encontrada é" + str(x) + ".\n"

    return outputText