var x = prompt('введите число');
var n = prompt('введите желаемую степень');
  
function pow(x, n) {
    var squre = x;
    for (var i = 1; i < n; i++) {
       squre *= x;
    }
    return squre;
}

if (n == 0)
{ console.log(1); }
else
{ console.log(pow(x, n)); }

