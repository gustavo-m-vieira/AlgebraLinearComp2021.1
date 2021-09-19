from typing import List
from math import pow

""" Módulo contendo as classes das funções bem como métodos bem explícitos
    Cada função possui um método para obtenção do valor esperado dada uma lista de constantes,
    e um método para o cálculo de suas derivações parciais em relação às constantes.
"""

class FirstEq():
    def __init__(self,constants_list:List) -> None:
        self.c2,self.c3,self.c4 = constants_list
    #

    def evaluate(self) -> float:
        return (2*pow(self.c3,2) + pow(self.c2,2) + 6*pow(self.c4,2) - 1)

    #
    def _evaluate_first_order_derivatives(self) -> List[float]:
        # Legenda ---> derivada em relação a Cn = deriv_cn

        deriv_c2 = 2*self.c2;
        deriv_c3 = 4*self.c3;
        deriv_c4 = 12*self.c4;
        return [deriv_c2, deriv_c3, deriv_c4];
    #

class SecondEq():
    
    def __init__(self,constants_list:List) -> None:
        self.c2,self.c3,self.c4 = constants_list
    #

    def evaluate(self, teta1:float) -> float:
        first_term = 8*pow(self.c3,3);
        second_term = 6*self.c3*pow(self.c2,2);
        third_term = 36*self.c3*self.c2*self.c4
        fourth_term = 108*self.c3*pow(self.c4,2);

        return (first_term + second_term + third_term + fourth_term - teta1) 
    #

    def _evaluate_first_order_derivatives(self) -> List[float]:
        # Legenda ---> derivada em relação a Cn = deriv_cn

        deriv_c2 = 12*self.c2*self.c3 + 36*self.c3*self.c4;
        deriv_c3 = 24*pow(self.c3,2) + 6*pow(self.c2,2) + 36*self.c2*self.c4 + 108*pow(self.c4,2);
        deriv_c4 = 36*self.c3*self.c2 + 216*self.c3*self.c4;

        return [deriv_c2, deriv_c3, deriv_c4];
    #

class ThirdEq():
    
    def __init__(self,constants_list:List) -> None:
        self.c2,self.c3,self.c4 = constants_list
    #

    def evaluate(self, teta2:float) -> float:
        first_term = 60*pow(self.c3,4);
        second_term = 60*pow(self.c3,2)*pow(self.c2,2) 
        third_term = 576*pow(self.c3,2)*self.c2*self.c4
        fourth_term = 2232*pow(self.c3,2)*pow(self.c4,2)
        fifth_term = 252*pow(self.c4,2)*pow(self.c2,2)
        sixth_term = 1296*pow(self.c4,3)*self.c2
        seventh_term = 3348*pow(self.c4,4)
        eigth_term = 24*pow(self.c2,3)*self.c4
        nineth_tem = 3*self.c2;

        return (first_term + second_term + third_term + fourth_term + fifth_term +
                sixth_term + seventh_term + eigth_term + nineth_tem - teta2) 
    #

    def _evaluate_first_order_derivatives(self) -> List[float]:
        # Legenda ---> derivada em relação a Cn = deriv_cn

        #Auxiliares pra diminuir o código
        c2,c3,c4 = self.c2,self.c3,self.c4

        deriv_c2 = (120*pow(c3,2)*c2 + 576*pow(c3,2)*c4 + 504*pow(c4,2)*c2 + 1296*pow(c4,3) + 72*pow(c2,2)*c4 + 3)
        deriv_c3 = (240*pow(c3,3) + 120*c3*pow(c2,2) + 1152*c3*c2*c4 + 4464*c3*pow(c4,2))
        deriv_c4 = (576*pow(c3,2)*c2 + 4464*pow(c3,2)*c4 + 504*c4*pow(c2,2) + 3888*pow(c4,2)*c2 + 13392*pow(c4,3) + 24*pow(c2,3))
        
        return [deriv_c2, deriv_c3, deriv_c4];
    #

