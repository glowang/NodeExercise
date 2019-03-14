const rect = {
    perimeter: (x,y) => (2*(x+y)),
    area:(x,y) => (x*y)
};

function solveRect(l,b) {
    console.log("solving for rect area");
    return rect.area(l*b);
};