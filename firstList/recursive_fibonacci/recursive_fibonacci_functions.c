void seqPrint(int a, int b){
    printf("%d ", a + b);
}

void seqGenerator(int a, int b, int index, int* seqElements){
    if(index == *seqElements)
        return;

    int c = a;
    a = b;
    b = b + c;
    seqPrint(a, b);
    seqGenerator(a, b, index += 1, seqElements);
} 