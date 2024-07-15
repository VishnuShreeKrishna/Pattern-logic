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

//=============================================

function RightTringlePattern(n){
    let star = "";
    let i,j,k;
    for(i=0; i<n; i++){
        for(j=0; j<n-i; j++){
          star += " ";
        }
        for(k=j;k<n;k++){
            star += "*";
        }
        star += "\n";
    }
    return star;
};
console.log(RightTringlePattern(8));   

//==========================================

function DownwardTringlePattern(n){
    let star = "";
    let i,j,k;
    for(i=0; i<n; i++){
        for(j=0; j<n-i; j++){
          star += "*";
        }
        for(k=j;k<n;k++){
            star += " ";
        }
        star += "\n";
    }
    return star;
};
console.log(DownwardTringlePattern(8));   

//=========================================

function SquarePattern(n){
    let star = "";
    let i,j,k;
    for(i=0; i<n; i++){
        for(j=0; j<n-i; j++){
          star += "*";
        }
        for(k=j;k<n;k++){
            star += " ";
        }
        star += "\n";
    }
    return star;
};
console.log(SquarePattern(8));

//=========================================

function LeftTringlePattern(n){
    let star = "";
    let i,j,k;
    for(i=0; i<n; i++){
        for(j=0; j<=i; j++){
          star += "*";
        }
        star += "\n";
    }
    return star;
};
console.log(LeftTringlePattern(8)); 

//=========================================

function HollowTringlePattern(n){
    let star = "";
    let i,j,k;
    for(i=0; i<n; i++){
        for(j=0; j<=i; j++){
            if(j===0 || j===i){
          star += "*";
        }else if(i===n-1){
            star += "*";
        }else{
            star += " " 
        }
        }
        star += "\n";
    }
    return star;
};
console.log(HollowTringlePattern(8)); 

//=========================================

function PrymidPattern(n){
    let star = "";
    let i,j,k;
    for(i=1; i<=n; i++){
        for(j=1; j<=(n-i); j++){
            star += " ";
        }
        for(k=1; k<= 2*i-1; k++){
            star += "*"
        }
        star += "\n";
    }
    return star;
};
console.log(PrymidPattern(5)); 

//=========================================

function ReversePrymidPattern(n){
    let star = "";
    let i,j,k;
    for(i=1; i<=n; i++){
        for(j=1; j<(i); j++){
            star += " ";
        }
        for(k=1; k<= 2*(n-i)+1; k++){
            star += "*"
        }
        star += "\n";
    }
    return star;
};
console.log(ReversePrymidPattern(5)); 

//=========================================

function DiamondPattern(n){
    let star = "";
    let i,j,k;
    for(i=1; i<n; i++){
        for(j=1; j<=(n-i); j++){
            star += " ";
        }
        for(k=1; k<=2*i-1; k++){
            star += "*"
        }
        star += "\n";
    }
    for(i=1; i<=n; i++){
        for(j=1; j<(i); j++){
            star += " ";
        }
        for(k=1; k<=2*(n-i)+1; k++){
            star += "*"
        }
        star += "\n";
    }
    return star;
};
console.log(DiamondPattern(5)); 

//=========================================

function HollowPyramidPattern(n){
    let star = "";
    let i,j,k;
    for(i=1; i<=n; i++){
        for(j=1; j<=(n-i); j++){
            star += " ";
        }
        for(k=1; k<= 2*i-1; k++){
            if(k===1 || k === 2*i-1){
                star += "*"
            }else if (i===n){
                star += "*"
            }else {
                star += " ";
            }
            
        }
        star += "\n";
    }
    return star;
};
console.log(HollowPyramidPattern(5));

//=========================================

function HollowDiamondPattern(n){
    let star = "";
    let i,j,k;
    for(i=1; i<n; i++){
        for(j=1; j<=(n-i); j++){
            star += " ";
        }
        for(k=1; k<=2*i-1; k++){
            if(k===1 || k===2*i-1){
                star += "*"
            }else{
                star += " "
            }
        }
        star += "\n";
    }
    for(i=1; i<=n; i++){
        for(j=1; j<(i); j++){
            star += " ";
        }
        for(k=1; k<=2*(n-i)+1; k++){
            if(k===1 || k===2*(n-i)+1){
            star += "*";
            } else {
                star += " ";
            }
        }
        star += "\n";
    }
    return star;
};
console.log(HollowDiamondPattern(5)); 

//=========================================

function HourglassPattern(n){
    let star = "";
    let i,j,k;
    for(i=1; i<=n; i++){
        for(j=1; j<(i); j++){
            star += " ";
        }
        for(k=1; k<=2*(n-i)+1; k++){
            star += "*"
        }
        star += "\n";
    }
    for(i=2; i<=n; i++){
        for(j=1; j<=(n-i); j++){
            star += " ";
        }
        for(k=1; k<=2*i-1; k++){
            star += "*"
        }
        star += "\n";
    }
    return star;
};
console.log(HourglassPattern(5));

//=========================================

function RightPascalstarPattern(n){
    let star = "";
    let i,j,k;
    for(i=1; i<=n; i++){
        for(j=1; j<=i; j++){
            star += "*";
        }
        star += "\n";
    }
    for(i=2; i<=n; i++){
        for(j=1; j<=n-i+1; j++){
            star += "*";
        }
        star += "\n";
    }
    return star;
};
console.log(RightPascalstarPattern(5));

//=========================================

function LeftPascalstarPattern(n){
    let star = "";
    let i,j,k;
    for(i=1; i<=n; i++){
        for(j=1; j<=i; j++){
            star += "*";
        }
        star += "\n";
    }
    for(i=2; i<=n; i++){
        for(k=1; k      <=n-i+1; j++){
            star += "*";
        }
        star += "\n";
    }
    return star;
};
console.log(LeftPascalstarPattern(5));
