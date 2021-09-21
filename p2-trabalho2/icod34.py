from math import pow

def stepForward(x, deltaX, f):
    fx = f.evaluate(x)
    f_next_delta = f.evaluate(x+deltaX)
    return ((f_next_delta - fx)/deltaX)

def stepBack(x, deltaX, f):
    fx = f.evaluate(x)
    f_prev_delta = f.evaluate(x-deltaX)
    return ((fx - f_prev_delta)/deltaX)

def centralDifference(x, deltaX, f):
    f_next_delta = f.evaluate(x+deltaX)
    f_prev_delta = f.evaluate(x-deltaX)
    return ((f_next_delta - f_prev_delta)/(2*deltaX))

def richardson(x, delta1, delta2, f):
    
    d1 = stepForward(x,delta1,f)
    d2 = stepForward(x, delta2,f)

    q = (delta1/delta2)

    return (d1 + ((d1-d2)/(pow(q,-1)-1)))

