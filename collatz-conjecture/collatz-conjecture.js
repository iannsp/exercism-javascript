//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (input) => {
    let steps = 0;
    let terminator = 1;
    let proc = input;
    if(input==1)return steps;
    if(input<=0) throw new Error("Only positive numbers are allowed");
    while(proc != terminator){
        steps++;
        if(proc % 2 == 0){
            proc = Math.round(proc / 2);
        }else {
            proc = proc *3 +1;
        }
    }
    return steps;
};

