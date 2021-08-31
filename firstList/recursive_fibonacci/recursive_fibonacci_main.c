#include <stdio.h>
#include "recursive_fibonacci_functions.c"

int main(){
    printf("Escreva o números de elementos da sequência de fibonacci:");
    int seqElements; scanf("%d", &seqElements);
    printf("%d %d ", 0, 1);
    seqGenerator(0, 1, 2, &seqElements);
    printf("\n");
};