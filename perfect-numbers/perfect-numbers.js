//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
    if(number<1)
        throw new Error('Classification is only possible for natural numbers.');
    let nfactors= factors(number); 
    let factors_sum = nfactors.reduce( (acc, factor) => acc+factor,0);
    if(number == nfactors[0])
       return 'deficient';
    if (factors_sum  == number)
       return 'perfect';
    if(factors_sum > number)
       return 'abundant';
    if(factors_sum < number)
       return 'deficient'; 
};

const factors = (number)=>{
    let factors = [];
    let serie = Array.from({length: Math.ceil(number/2)}, (value ,index) => index+1)
        .map( numberToTest =>{
            if(number % numberToTest == 0)
                factors.push(numberToTest);
    });
    return factors;
}
