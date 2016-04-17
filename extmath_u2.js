/* 
ARGUMENTS:
x - array of numbers
RETURNS:
sum of all numbers in x
*/
if(!Math.add) {
    Math.add = function(x) {
        var a = 0;
        for (var i = 0; i < x.length; i++) {
            a += parseFloat(x[i]);
        }
        return a;
    };
}

/* 
ARGUMENTS:
x - array of numbers
RETURNS:
difference of all numbers in x
*/
Math.subtract = function(x) {
    var a = x[0];
    for (var i = 1; i < x.length; i++) {
        a -= x[i];
    }
    return a;
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS:
product of all numbers in x
*/
Math.multiply = function(x) {
    var a = x[0];
    for (var i = 1; i < x.length; i++) {
        a *= x[i];
    }
    return a;
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS:
quotient of all numbers in x
*/
Math.divide = function(x) {
    var a = x[0];
    for (var i = 1; i < x.length; i++) {
        a /= x[i];
    }
    return a;
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS:
modulus of all numbers in x
*/
Math.modulus = function(x) {
    var a = x[0];
    for (var i = 1; i < x.length; i++) {
        a %= x[i];
    }
    return a;
};

/* 
ARGUMENTS:
x - number
RETURNS: factorial of x
*/
Math.factorial = function(x) {
    return x <= 1 ? 1 : x * Math.factorial(x - 1);
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS: the range of the numbers in x; the lowest subtracted from the highest
*/
Math.range = function(x) {
    return Math.max.apply(null, x) - Math.min.apply(null, x);
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS: mean of numbers in x
*/
Math.mean = function(x) {
    return Math.add(x) / x.length;
};

/* 
ARGUMENTS:
x - number
y - number
z - number
RETURNS: true if x is greater than or equal to y and less than or equal to z, false otherwise
*/
Math.isInRange = function(x, y, z) {
    return x >= y && x <= z;
};

/* 
ARGUMENTS:
x - number
y - number
z - number
RETURNS: true if x is greater than y and less than z, false otherwise
*/
Math.isInRange2 = function(x, y, z) {
    return x > y && x < z;
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse cosecant of x
*/
Math.acosec = function(x) {
    return Math.asin(1 / x);
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse hyperbolic cosecant of x
*/
Math.acosech = function(x) {
    return x < 0 ? Math.log((1 - Math.sqrt(1 + x * x)) / x) : Math.log((1 + Math.sqrt(1 + x * x)) / x);
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse hyberbolic cosine of x
*/
Math.acosh = function(x) {
    return Math.log(x + Math.sqrt(x * x - 1));
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse cotangent of x
*/
Math.acot = function(x) {
    return Math.PI / 2 - Math.atan(x);
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse hyperbolic cotangent of x
*/
Math.acoth = function(x) {
    return Math.log((x + 1) / (x - 1)) / 2;
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse secant of x
*/
Math.asec = function(x) {
    return Math.PI / 2 - Math.asin(1 / x);
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse hyperbolic secant of x
*/
Math.asech = function(x) {
    return Math.log((1 + Math.sqrt(1 - x * x)) / x);
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse hyperbolic sine of x
*/
Math.asinh = function(x) {
    return Math.log(x + Math.sqrt(x * x + 1));
};

/* 
ARGUMENTS:
x - number
RETURNS: inverse hyperbolic tangent of x
*/
Math.atanh = function(x) {
    return Math.log((1 + x) / (1 - x)) / 2;
};

/* 
ARGUMENTS:
x - number
RETURNS: cosecant of x
*/
Math.cosec = function(x) {
    return 1 / Math.sin(x);
};

/* 
ARGUMENTS:
x - number
RETURNS: hyperbolic cosecant of x
*/
Math.cosech = function(x) {
    return 2 / (Math.exp(x) - Math.exp(-x));
};

/* 
ARGUMENTS:
x - number
RETURNS: hyperbolic cosine of x
*/
Math.cosh = function(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
};

/* 
ARGUMENTS:
x - number
RETURNS: cotangent of x
*/
Math.cot = function(x) {
    return 1 / Math.tan(x);
};

/* 
ARGUMENTS:
x - number
RETURNS: hyperbolic cotangent of x
*/
Math.coth = function(x) {
    return (Math.exp(x) + Math.exp(-x)) / (Math.exp(x) - Math.exp(-x));
};

/* 
ARGUMENTS:
x - number
RETURNS: secant of x
*/
Math.sec = function(x) {
    return 1 / Math.cos(x);
};

/* 
ARGUMENTS:
x - number
RETURNS: hyperbolic secant of x
*/
Math.sech = function(x) {
    return 2 / (Math.exp(x) + Math.exp(-x));
};

/* 
ARGUMENTS:
x - number
RETURNS: 0 if x is zero, 1 if x is positive, and -1 if x is negative
*/
Math.sign = function(x) {
    return x == 0 ? 0 : (x > 0 ? 1 : -1);
};

/* 
ARGUMENTS:
x - number
RETURNS: hyperbolic sine of x
*/
Math.sinh = function(x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
};

/* 
ARGUMENTS:
x - number
RETURNS: hyperbolic tangent of x
*/
Math.tanh = function(x) {
    return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
};

/* 
ARGUMENTS:
x - number
RETURNS: cube root of x
*/
Math.crt = function(x) {
    return Math.pow(x, (1 / 3));
};

/* 
ARGUMENTS:
x - number
y - number
RETURNS: the y root of x
*/
Math.rt = function(x, y) {
    return Math.pow(x, (1 / y));
};

/* 
ARGUMENTS:
x - number
RETURNS: true if x is even, false otherwise
*/
Math.isEven = function(x) {
    return x % 2 == 0;
};

/* 
ARGUMENTS:
x - number
RETURNS: true if x is prime, false otherwise
*/
Math.isPrime = function(x) {
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if((x) % 2 == 0) {
            return false;
        }
    }
    return true;
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS: the mode of the numbers is x; mode is most often occurring

NOTE: if there are multiple numbers that appear the same number of times, this will only return the first.
*/
Math.mode = function(x) {
    var a1 = [];
    var a2 = [];
    var c1 = 0;
    for (var i = 0; i < x.length; i++) {
        if(a1.indexOf(x[i]) == -1) {
            a1[c1] = x[i];
            if(i + 1 == x.length) {
                var c2 = 1;
            } else {
                var c2 = 1;
                for (var h = i + 1; h < x.length; h++) {
                    if(a1[c1] == x[h]) {
                        c2++;
                    }
                }
            }
            a2[c1] = c2;
            c1++;
        }
    }
    var e = 0;
    var r = a2[0];
    for (var g = 1; g < a2.length; g++) {
        if(r < a2[g]) {
            r = a2[g];
            e = g;
        }
    }
    return a1[e];
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS: median of numbers in x; median is the middle number, or average of the two middle numbers
*/
Math.median = function(x) {
    x.sort(function(a, b) {return a-b;});
    if(Math.isOdd(x.length)) {
        return x[Math.floor(x.length / 2)];
    } else {
        return (x[x.length / 2] + x[(x.length / 2) - 1]) / 2;
    }
};

/* 
ARGUMENTS:
[none]
RETURNS: randomly generated number between 0 and 1
*/
Math._random = Math.random;

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
if no arguments: random number between 0 and 1
if one argument: random number between 0 and x
if two arguments: random number between x and y
*/
Math.random = function(x, y) {
    if(arguments.length == 0) {
        return Math._random();
    } else if(arguments.length == 1) {
        return Math._random() * x;
    } else {
        return (Math._random() * (y - x + 1)) + x;
    }
};

/* 
ARGUMENTS:
x - number
RETURNS: true if x is an integer, false otherwise
*/
Math.isInteger = function(x) {
    return Math.ceil(x) == Math.floor(x);
};

/* 
ARGUMENTS:
x - number
RETURNS: true if x is natural, false otherwise
*/
Math.isNatural = function(x) {
    return Math.isInteger(x) && x > 0;
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS: standard deviation of numbers in x
*/
Math.stdDev = function(x) {
    var a = 0;
    for (var i = 0; i < x.length; i++) {
        a += x[i];
    }
    a /= x.length;
    var t = 0;
    for (var j = 0; j < x.length; j++) {
        t += Math.pow(x[j] - a, 2);
    }
    var n = t / (x.length - 1);
    return Math.sqrt(n);
};

/* 
ARGUMENTS:
a - number
b - number
c - number
RETURNS: results of quadratic equation, of false if no real solutions.

NOTE: this does not check if the solutions work, it just finds them.
*/
Math.quadEquation = function(a, b, c) {
    var s = (b*b) - (4 * a * c);
    if(s < 0) {
        return false;
    }
    var answers = [];
    answers[0] = (-b + Math.sqrt(s)) / (2 * a);
    answers[1] = (-b - Math.sqrt(s)) / (2 * a);
    return answers;
};

/* Math.Complex constructor.

ARGUMENTS:
real - number
imaginary - number
*/
Math.Complex = function(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
};

/*
ARGUMENTS:
complex - Math.Complex object
RETURNS: sum of this and complex
*/
Math.Complex.prototype.add = function(complex) {
    return new Math.Complex(this.real + complex.real, this.imaginary + complex.imaginary);
};

/*
ARGUMENTS:
complex - Math.Complex object
RETURNS: complex subtracted from this
*/
Math.Complex.prototype.subtract = function(complex) {
    return new Math.Complex(this.real - complex.real, this.imaginary - complex.imaginary);
};

/*
ARGUMENTS:
complex - Math.Complex object or number
RETURNS: product of this and number
*/
Math.Complex.prototype.multiply = function(number) {
    if(typeof number == "number") {
        return new Math.Complex(this.real * number, this.imaginary * number);
    }
    return new Math.Complex(this.real * number.real - this.imaginary * number.imaginary, this.real * number.imaginary + this.imaginary * number.real);
};

/*
ARGUMENTS:
complex - Math.Complex object or number
RETURNS: quotient of this divided by number
*/
Math.Complex.prototype.divide = function(number) {
    if(typeof number == "number") {
        return new Math.Complex(this.real / number, this.imaginary / number);
    };
    var numer = this.multiply(number.conjugate());
    var denom = number.multiply(number.conjugate());
    return numer.divide(denom.real);
};

/*
RETURNS: this multiplied by this
*/
Math.Complex.prototype.square = function() {
    return this.multiply(this);
};

/*
RETURNS: magnitude of this
*/
Math.Complex.prototype.magnitude = function() {
    return Math.sqrt(this.real * this.real, this.imaginary * this.imaginary);
};

/*
RETURNS: conjugate of this
*/
Math.Complex.prototype.conjugate = function() {
    return new Math.Complex(this.real, -this.imaginary)
};

/*
RETURNS: negative value of this
*/
Math.Complex.prototype.negative = function() {
    return new Math.Complex(-this.real, -this.imaginary);
};

/*
ARGUMENTS:
complex - Math.Complex object
RETURNS: true if this is equal to complex, and false otherwise
*/
Math.Complex.prototype.equals = function(complex) {
    return this.real == complex.real && this.imaginary == complex.imaginary;
};

/*
RETURNS: magnitude of this
*/
Math.Complex.prototype.valueOf = function() {
    return this.magnitude();
};

/*
RETURNS: this converted to a string
*/
Math.Complex.prototype.toString = function() {
    var string = "";
    if(this.real != 0) {
        string += this.real;
    }
    if(this.imaginary > 0) {
        if(this.real == 0) {
            string += this.imaginary + "i";
        } else {
            string += "+" + this.imaginary + "i";
        }
    } else if(this.imaginary < 0) {
        string += "-" + Math.abs(this.imaginary) + "i";
    }
    return string;
};

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
if no arguments: random integer, either 0 or 1
if one argument: random integer between 0 and x
if two arguments: random integer between x and y
*/
Math.randInt = function(x, y) {
    if(arguments.length == 0) {
        return Math.round(Math.random());
    } else
    if(arguments.length == 1) {
        return Math.round(Math.random(x));
    } else
    if(arguments.length == 2) {
        return Math.round(Math.random(x, y));
    }
};

/* 
ARGUMENTS:
a - number
b - number
c - number
these are used as the variables in a^2 + b^2 = c^2
RETURNS:
One of the arguments must be null. This value will be returned,
based on the other two values.
*/
Math.pythagorean = function(a, b, c) {
    if(c === null) {
        return Math.sqrt((a * a) + (b * b));
    } else {
        var x = b;
        if(b === null) {
            x = a;
        }
        return Math.sqrt((c * c) - (x * x));
    }
};

/* 
ARGUMENTS:
x - array with two numbers (used as the first point)
y - array with two numbers (used as the second point)
RETURNS:
distance between the two points (x1, y1) and (x2, y2).
*/
Math.distance = function(x, y) {
    return Math.sqrt(Math.pow((x[0] - y[0]), 2) + Math.pow((x[1] - y[1]), 2));
};

/* 
ARGUMENTS:
x - array with two numbers (used as the first point)
y - array with two numbers (used as the second point)
RETURNS:
midpoint of the two points (x1, y1) and (x2, y2).
*/
Math.midpoint = function(x, y) {
    var a = (x[0] + y[0]) / 2;
    var b = (x[1] + y[1]) / 2;
    return [a, b];
};

/* 
ARGUMENTS:
x - array with two numbers (used as the first point)
y - array with two numbers (used as the second point)
RETURNS:
slope of the line that contains the two points (x1, y1) and (x2, y2).
*/
Math.slope = function(x, y) {
    return (x[1] - y[1]) / (x[0] - y[0]);
};

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
area of the rectangle with width x and length y
*/
Math.areaRect = function(x, y) {
    return x * y;
};

/* 
ARGUMENTS:
b - number
h - number
RETURNS:
area of the triangle with base length b and height h
*/
Math.areaTri = function(b, h) {
    return 0.5 * b * h;
};

/* 
ARGUMENTS:
r - number
RETURNS:
area of the circle with radius r
*/
Math.areaCircle = function(r) {
    return Math.PI * r * r;
};

/* 
ARGUMENTS:
x - number
h - number
RETURNS:
area of the parallelogram with length x and height h
*/
Math.areaParallel = function(x, h) {
    return x * h;
};

/* 
ARGUMENTS:
b1 - number
b2 - number
h - number
RETURNS:
area of the trapezoid with base lengths b1 and b2 and height h
*/
Math.areaTrap = function(b1, b2, h) {
    return 0.5 * h * (b1 + b2);
};

/* 
ARGUMENTS:
d1 - number
d2 - number
RETURNS:
area of the rhombus with diagonal lengths d1 and d2
*/
Math.areaRhom = function(d1, d2) {
    return 0.5 * d1 * d2;
};

/* 
ARGUMENTS:
a - number
b - number
RETURNS:
area of the ellipse with radii a and b
*/
Math.areaEllipse = function(a, b) {
    return Math.PI * a * b;
};

/* 
ARGUMENTS:
r - number
RETURNS:
surface area of a sphere with radius r
*/
Math.areaSphere = function(r) {
    return 4 * Math.PI * r * r;
};

/* 
ARGUMENTS:
x - number
y - number
z - number
RETURNS:
surface area of the rectangular prism with sides x, y, and z
*/
Math.areaRectPrism = function(x, y, z) {
    return 2 * ((x * y) + (x * z) + (y * z));
};

/* 
ARGUMENTS:
r - number
h - number
RETURNS:
surface area of the cone with base radius r and height h
*/
Math.areaCone = function(r, h) {
    var s = Math.sqrt((r * r) + (h * h));
    return (Math.PI * r * s) + (Math.PI * r * r);
};

/* 
ARGUMENTS:
x - number
h - number
RETURNS:
surface area of the pyramid with base length x and height h

NOTE: this only works for 4-sided pyramids
*/
Math.areaPyramid = function(x, h) {
    var s = Math.sqrt((x * x) + (h * h));
    return (x * x) + ((0.5 * s * x) * 4);
};

/* 
ARGUMENTS:
r - number
h - number
RETURNS:
surface area of the cylinder with radius r and height h
*/
Math.areaCylinder = function(r, h) {
    return (Math.PI * r * r * 2) + (h * r * 2 * Math.PI);
};

/* 
ARGUMENTS:
x - number
y - number
z - number
RETURNS:
volume of the rectangular prism with sides x, y, and z
*/
Math.volRectPrism = function(x, y, z) {
    return x * y * z;
};

/* 
ARGUMENTS:
r - number
RETURNS:
volume of the sphere with radius r
*/
Math.volSphere = function(r) {
    return (4 / 3) * Math.PI * r * r * r;
};

/* 
ARGUMENTS:
r - number
h - number
RETURNS:
volume of the cone with base radius r and height h
*/
Math.volCone = function(r, h) {
    return (1 / 3) * Math.PI * r * r * h;
};

/* 
ARGUMENTS:
x - number
h - number
RETURNS:
volume of the pyramid with base side x and height h

NOTE: this only works for 4-sided pyramids
*/
Math.volPyramid = function(x, h) {
    return (1 / 3) * x * x * h;
};

/* 
ARGUMENTS:
r - number
h - number
RETURNS:
volume of the cylinder with radius r and height h
*/
Math.volCylinder = function(r, h) {
    return Math.Pi * r * r * h;
};

/* 
ARGUMENTS:
x - array with three numbers (used as first point)
y - array with three numbers (used as second point)
RETURNS:
midpoint of the two points (x1, y1, z1) and (x2, y2, z2)
*/
Math.midpoint3 = function(x, y) {
    var a = (x[0] + y[0]) / 2;
    var b = (x[1] + y[1]) / 2;
    var c = (x[2] + y[2]) / 2;
    return [a, b, c];
};

/* 
ARGUMENTS:
x - array with three numbers (used as first point)
y - array with three numbers (used as second point)
RETURNS:
distance between the two points (x1, y1, z1) and (x2, y2, z2)
*/
Math.distance3 = function(x, y) {
    return Math.sqrt(Math.pow((x[0] - y[0]), 2) + Math.pow((x[1] - y[1]), 2) + Math.pow((x[2] - y[2]), 2));
};

/* 
ARGUMENTS:
a - number
r - number
RETURNS:
area of the sector with arc length a and radius r
*/
Math.areaSector = function(a, r) {
    return 0.5 * a * r * r;
};

/* 
ARGUMENTS:
r - number
RETURNS:
area of the hemisphere with radius r
*/
Math.areaHemi = function(r) {
    return Math.areaSphere(r) / 2;
};

/* 
ARGUMENTS:
r - number
RETURNS:
volume of the hemisphere with radius r
*/
Math.volHemi = function(r) {
    return Math.volSphere(r) / 2;
};

/* 
ARGUMENTS:
r1 - number
r2 - number
h - number
RETURNS:
area of the pipe with outside radius r1, inside radius r2, and height h
*/
Math.areaPipe = function(r1, r2, h) {
    var a1 = Math.PI * r1 * 2 * h;
    var a2 = Math.PI * r2 * 2 * h;
    var a3 = 2 * (Math.areaCircle(r1) - Math.areaCircle(r2));
};

/* 
ARGUMENTS:
r1 - number
r2 - number
h - number
RETURNS:
volume of the pipe with outside radius r1, inside radius r2, and height h
*/
Math.volPipe = function(r1, r2, h) {
    return Math.volCylinder(r1, h) - Math.volCylinder(r2, h);
};

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
area of the kite with diagonals x and y
*/
Math.areaKite = function(x, y) {
    return (x * y) / 2;
};

/* 
ARGUMENTS:
x - number
y - number
theta - number
RETURNS:
area of the kite with sides x and y (these must be unequal) and included angle theta
*/
Math.areaKiteTrig = function(x, y, theta) {
    return x * y * Math.sin(theta);
};

/* 
ARGUMENTS:
x - number
h - number
RETURNS:
volume of the regular square pyramid with base side x and height h
*/
Math.volPyramid4 = function(x, h) {
    return (1 / 3) * x * x * h;
};

/* 
ARGUMENTS:
x - number
h - number
RETURNS:
volume of the regular triangular pyramid with base side x and height h
*/
Math.volPyramid3 = function(x, h) {
    return ((x * ((Math.sqrt(3) / 2) * x)) / 2) * (1 / 3) * h;
};

/* 
ARGUMENTS:
x - number
y - number
h - number
RETURNS:
volume of the regular pentagonal pyramid with apothem x, base side y, and height h
*/
Math.volPyramid5 = function(x, y, h) {
    return (5 / 6) * x * y * h;
};

/* 
ARGUMENTS:
a - number
h - number
RETURNS:
volume of the pyramid with area a and height h
*/
Math.volPyramidAny = function(a, h) {
    return (1 / 3) * a * h;
};

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
greatest common divisor of x and y
*/
Math.gcd = function(x, y) {
    var t;
    while (y != 0){
        t = y;
        y = x % y;
        x = t;
    }
    return x;
};

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
least common multiple of x and y
*/
Math.lcm = function(x, y) {
    return (x * y / gcd(x, y));
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS:
least common multiple of the numbers in x
*/
Math.lcmArray = function(x) {
    if(x.length == 2){
        return Math.lcm(x[0], x[1]);
    } else {
        var first = x[0];
        x.shift();
        return lcm(first, lcmm(x));
    }
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS:
highest number in x
*/
Math.maxArray = function(x) {
    return Math.max.apply(null, x);
};

/* 
ARGUMENTS:
x - array of numbers
RETURNS:
lowest number in x
*/
Math.minArray = function(x) {
    return Math.min.apply(null, x);
};

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
x rounded to y decimal points
*/
Math.roundTo = function(x, y) {
    return  Math.round(x * Math.pow(10, y)) / Math.pow(10, y);
};

/* 
ARGUMENTS:
x - number
RETURNS:
radian equivalent of x degrees
*/
Math.deg2rad = function(x) {
    return x * (Math.PI / 180);
};

/* 
ARGUMENTS:
x - number
RETURNS:
degree equivalent of x radians
*/
Math.rad2deg = function(x) {
    return x * (180 / Math.PI);
};

/* implement Math.imul(), if it doesn't already exist */
if(!Math.imul) {
    /* taken from the Mozilla Developer Network (https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/imul) */
    /* 
    ARGUMENTS:
    x - number
    y - number
    RETURNS:
    result of the C-like 32-bit integer multiplication of x and y
    */
    Math.imul = function(x, y) {
        var ah  = (x >>> 16) & 0xffff;
        var al = x & 0xffff;
        var bh  = (y >>> 16) & 0xffff;
        var bl = y & 0xffff;
        // the shift by 0 fixes the sign on the high part
        return (al * bl) + (((ah * bl + al * bh) << 16) >>> 0);
    };
}

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
result of the C-like 32-bit unsigned integer multiplication of x and y
*/
Math.umul = function(x, y) {
    return Math.imul(x, y) >>> 0;
};

/* implement Math.toSource(), if it doesn't already exist */
if(!Math.toSource) {
    /* 
    ARGUMENTS:
    [none]
    RETURNS:
    the string "Math"
    */
    Math.toSource = function() {
        return "Math";
    };
}

/* 
ARGUMENTS:
x - number
y - number
RETURNS:
true if x can be divided by y with no remainder, and false otherwise
*/
Math.dividesEvenly = function(x, y) {
    return x % y == 0;
};

/* 
ARGUMENTS:
x - number
RETURNS:
number that has a factorial of x
*/
Math.reverseFactorial = function(x) {
    if(x < 1) {
        return false;
    }
    if(x == 1) {
        return 1;
    }
    if(!Math.isEven(x)) {
        return false;
    }
    var highest = 2;
    var lastx = x;
    while (true) {;
        lastx = x;
        x /= highest;
        if(x == 1) {
            break;
        }
        if(lastx % highest != 0) {
            return false;
        }
        highest++;
    }
    return highest;
};

/* 
ARGUMENTS:
x - number
RETURNS:
sum of the interior angles of a polygon with x sides
*/
Math.polygonAngles = function(x) {
    return (x - 2) * 180;
};

/* add Math.average() as another name for Math.mean() */
Math.average = Math.mean;

/* 
ARGUMENTS:
x - number
h - number
RETURNS:
area of the regular triangular pyramid with base side x and height h
*/
Math.areaPyramid3 = function(x, h) {
    return ((Math.sqrt(3) * x * x) / 4) + (0.5 * (3 * x) * Math.sqrt(Math.pow((Math.sqrt(3) * x * x) / 6, 2) + (h * h)));
};

/* 
ARGUMENTS:
x - number
h - number
RETURNS:
area of the square pyramid with base side x and height h
*/
Math.areaPyramid4 = function(x, h) {
    var s = Math.sqrt((x * x) + (h * h));
    return (x * x) + ((0.5 * s * x) * 4);
};


/* 
ARGUMENTS:
x - number
y - number
h - number
RETURNS:
area of the regular pentagonal pyramid with apothem x, base side y, and height h
*/
Math.areaPyramid5 = function(x, y, h) {
    return (0.5 * x * (5 * y)) + (0.5 * Math.sqrt((x * x) + (h * h)) * (5 * y));
};

/* Math.SQRT3: square root of three */
Math.SQRT3 = Math.sqrt(3);
/* Math.GOLDEN: golden ratio */
Math.GOLDEN = (1 + Math.sqrt(5)) / 2;
/* Math.DELIAN: Delian constant */
Math.DELIAN = Math.pow(2, (1 / 3));
/* Math.SIN45: sine of 45 degrees */
Math.SIN45 = Math.sqrt(2) / 2;
/* Math.COS45: cosine of 45 degrees */
Math.COS45 = Math.sqrt(2) / 2;
/* Math.TAN45: tangent of 45 degrees */
Math.TAN45 = 1;
/* Math.SIN30: sine of 30 degrees */
Math.SIN30 = 1 / 2;
/* Math.COS30: cosine of 30 degrees */
Math.COS30 = Math.sqrt(3) / 2;
/* Math.TAN30: tangent of 30 degrees */
Math.TAN30 = 1 / Math.sqrt(3);
/* Math.SIN60: sine of 60 degrees */
Math.SIN60 = Math.sqrt(3) / 3;
/* Math.COS60: cosine of 60 degrees */
Math.COS60 = 1 / 2;
/* Math.TAN60: tangent of 60 degrees */
Math.TAN60 = Math.sqrt(3);
/* Math.SIN90: sine of 90 degrees */
Math.SIN90 = 1;
/* Math.COS90: cosine of 90 degrees */
Math.COS90 = 0;
/* Math.TAN90: tangent of 90 degrees */
Math.TAN90 = null;
/* Math.SIN180: sine of 180 degrees */
Math.SIN180 = 0;
/* Math.COS180: cosine of 180 degrees */
Math.COS180 = -1;
/* Math.TAN180: tangent of 180 degrees */
Math.TAN180 = 0;
/* Math.SIN270: sine of 270 degrees */
Math.SIN270 = -1;
/* Math.COS270: cosine of 270 degrees */
Math.COS270 = 0;
/* Math.TAN270: tangent of 270 degrees */
Math.TAN270 = null;
/* Math.SIN360: sine of 360 degrees */
Math.SIN360 = 0;
/* Math.COS360: cosine of 360 degrees */
Math.COS360 = 1;
/* Math.TAN360: tangent of 360 degrees */
Math.TAN360 = 0;