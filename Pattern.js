function SquarePattern(n){
    let star = "";
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i===0 || i===(n-1)){
                star += "* ";
            } else if(j===0 || j=== (n-1)){
                star += "* ";
                } else{
                star += "  ";
                }
        }
        star += "\n";
    }
    return star;
};
console.log(SquarePattern(8))