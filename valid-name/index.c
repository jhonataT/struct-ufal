#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int verifyInitialUpperCase(char name[20], int nameLength){
    printf("nome: %s\ntamanho:%d\n", name, nameLength);
}

int main(){
    char name[20];
    fgets(name, 20, stdin);
    int nameLength = strlen(name);
    int initialCase = verifyInitialUpperCase(name, nameLength - 1);
}