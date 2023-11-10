function sumPairs(ints, sum){
    const map = new Map();
    for(let i = 0; i < ints.length; i++){
        if(map.has(sum - ints[i])){
            return [sum - ints[i], ints[i]];
        }
        map.set(ints[i], i);
    }
    null;    
}