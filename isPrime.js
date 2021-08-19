const isPrime = (num) => {
    const boundary= Math.floor(Math.sqrt(num));
for(i=2; i <=  boundary; i++){
    if( num%i == 0 ){
        return "not a prime"
    }
}
return "is a prime";
}

console.log(isPrime(7));
console.log(isPrime(13));
console.log(isPrime(15));