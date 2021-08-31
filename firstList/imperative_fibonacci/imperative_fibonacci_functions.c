void seqPrint(int a, int b){
    printf("%d ", a + b);
}

void seqGenerator(int a, int b, int seqElements){
    for(int i = 2; i < seqElements; i++){
        int c = a;
        a = b;
        b = b + c;

        seqPrint(a, b);
    }
    return;
} 