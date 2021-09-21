from math import pow, exp

class Function():

    def __init__(self, c1, c2, c3, c4):
        self.c1,self.c2,self.c3,self.c4 = c1, c2, c3, c4

    def evaluate(self, x):
        return self.c1*exp(self.c2*x) + self.c3*pow(x,self.c4) 

    def derivative(self, x):
        return (self.c1*self.c2*exp(self.c2*x) + self.c3*self.c4*pow(x,(self.c4-1)));