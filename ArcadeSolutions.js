// --- The Journey Begins ---

// 1. add

// Mano's solution

function add(param1, param2) {
    return param1 + param2;
}

console.log(add(1, 2))

// Divya's solution

function add(param1, param2) {
    return param1 + param2;
}

// 2. centuryFromYear

// Mano's solution

function centuryFromYear(year) {
    if(year%100 == 0){
        return year/100
    } else {
        var a = (year/100).toString().split('.') 
        return parseInt(a[0]) + 1
    }
}

console.log(centuryFromYear(1905))

// Divya's solution
function centuryFromYear(year) {

    x = Math.trunc(year / 100);
    rem = year % 100;
    
    if (rem == 0)
        return x;
    else
        return x+1
}



// 3. checkPalindrome

// Mano's solution

function checkPalindrome(inputString) {
    var reverseString = inputString.split("").reverse().join("")
    
    if(inputString === reverseString) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPalindrome("aabaa"))

// Divya's solution

function checkPalindrome(inputString) {
    revstr= inputString.split("").reverse().join("")
    var n = inputString.localeCompare(revstr)
    if (n === 0)
        return true
    else
        return false
}


// --- Edge of the Ocean ---

// 4. adjacentElementsProduct

// Mano's solution

function adjacentElementsProduct(inputArray) {
    let largestProduct = inputArray[0] * inputArray[1]
    for(var i = 0; i < inputArray.length - 1; i++) {
        if(inputArray[i] * inputArray[i + 1] > largestProduct) {
            largestProduct = inputArray[i] * inputArray[i + 1]
        }
    }
    return largestProduct;
}

// Divya's solution

function adjacentElementsProduct(inputArray) {
    var largest = inputArray[0] * inputArray[1];
        var len = inputArray.length;
    if (len > 2)
        {
            var newpr;
            for(var i =1; i<len-1 ; i++)
            {
                newpr = inputArray[i]*inputArray[i+1];
                if (newpr > largest)
                    largest = newpr;
            }
                
        }
    return largest;
}

// 5. Shape Area

// Mano's solution

function shapeArea(n) {
    return (n * n) + (n-1) * (n-1)
}

// Divya's solution

function shapeArea(n) {
    
    if (n == 1)
        return 1;
    
    return (shapeArea(n-1)+( 4 * (n-1)));

}


// 6. Make Array Consecutive 2

// Mano's solution

function makeArrayConsecutive2(statues) {
    
    let max = statues[0]
    let min = statues[0]
    let requiredStatues = 0
    
    for(var i = 0; i < statues.length; i++) {
        if(statues[i] > max) {
            max = statues[i]
        } else if(statues[i] < min) {
            min = statues[i]
        }
    }
    
    let value = min
    
    for(var j = min; j < max; j++) {
        value++
        if(!statues.includes(j)) {
            requiredStatues++
        }
    }
    
    return requiredStatues
}

// Divya's solution

function makeArrayConsecutive2(statues) {
    
    var min= statues[0]
    var max=statues[0];
    var len = statues.length;
    
    if (len==1)
        return 0;
    
    for(var i =0;i< len;i++){
        
        if (statues[i]<min)
            min = statues[i];
        if(statues[i]>max)
            max = statues[i];
    }
    
    var result =  ((max-min) + 1) - len;
    return result;
}

// 7. Almost increasing sequence

// Mano's solution




// Divya's solution
function almostIncreasingSequence(sequence) {
  let invalidItemsCount = 0;
  
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i-1]) {
      invalidItemsCount++;
      if (invalidItemsCount > 1) return false;
      if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
    }
  }
  
  return true;
}



// 8. Matrix elements sum

// Mano's solution

function matrixElementsSum(matrix) {
    
    let sum = 0
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0 && i < matrix.length - 1) {
                matrix[i+1][j] = 0
            } else {
                sum = sum + matrix[i][j]
            }
        }
    }
    
    return sum
}

// Divya's solution
function matrixElementsSum(matrix) {

    var newarr=[];
    var sum=0;
    
    for(var i=0;i<matrix.length;i++){
        
        for(var j=0;j<matrix[i].length;j++){
            console.log(j);
            if(newarr.includes(j,0) === true)
            {   console.log(j); 
                continue;
            }    
            else if(matrix[i][j]==0)
                newarr.push(j);
            else
                sum = sum + matrix[i][j];
            console.log(i,j,newarr,sum);
        }
    }
    return sum;
        
}



// 9. All longest strings

// Mano's solution

function allLongestStrings(inputArray) {
    let maxStringLength = 0
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length > maxStringLength) {
            maxStringLength = inputArray[i].length
        }
    }
    
    let longestStrings = []
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length == maxStringLength) {
            longestStrings.push(inputArray[i])
        }
    }
    
    return longestStrings
}

// Divya's solution
function allLongestStrings(inputArray) {

    var max = 0;
    var newarr = [];
    
    for(var i =0;i<inputArray.length;i++){
        
        if(inputArray[i].length>=max){
            
            
            if(inputArray[i].length>max){
            max = inputArray[i].length;
            newarr.length=0;
            }
            
            newarr.push(inputArray[i]);
        }
    }
    return newarr;
    
}


// 10. Common Character Count

// Mano's solution

function commonCharacterCount(s1, s2) {
    let commonChar = 0
    let c1 = Array.from(s1)
    let c2 = Array.from(s2)
    
    if(s1.length < s2.length) {
        for(let i = 0; i < s1.length; i++) {
            if(c2.includes(s1[i])) {
                commonChar++
                c2.splice(c2.indexOf(s1[i]), 1)
            }
        }
    } else {
        for(let i = 0; i < s2.length; i++) {
            console.log(c1)
            if(c1.includes(s2[i])) {
                commonChar++
                c1.splice(c1.indexOf(s2[i]), 1)
            }
        }
    }
    
    return commonChar
}



// Divya's solution
function commonCharacterCount(s1, s2) {

    var shortArray=[];
    var len1 = s1.length;
    var len2 = s2.length;
    var minLenStr=0;
    var count = 0;

    if(len1<len2)
    {
        minLenStr = len1;
        shortArray = s1.split('');
        var longStr = [...s2];
    }
    else
    {
        minLenStr = len1;
        shortArray = s2.split('');
        var longStr = [...s1];
    }   
    
    
    shortArray.sort();
    console.log(shortArray);

    for(i=0;i<minLenStr;i++){

        if(longStr.indexOf(shortArray[i])>=0)
        {
            count++;
            longStr.splice(longStr.indexOf(shortArray[i]),1);
        }
    }

    return count;
}

// 11. Is Lucky

// Mano's solution

function isLucky(n) {
    let a = '' + n
    
    let firstHalf = Array.from(a.slice(0, a.length/2))
    let secondHalf = Array.from(a.slice(a.length/2))
    
    let firstHalfSum = 0
    let secondHalfSum = 0
    
    firstHalf.forEach((c) => {
        firstHalfSum += parseInt(c)
    })
    
    secondHalf.forEach((c) => {
        secondHalfSum += parseInt(c)
    })
    
    if(firstHalfSum == secondHalfSum) {
        return true
    } else {
        return false
    }
}

// Divya's solution
function isLucky(n) {
    
    var n2 = n;
    var len = n2.toString().length;
    var halflen = len/2;
    var num = (Math.pow(10,halflen));
    var half = n%num;
    n=(n-half)/num;
        
    var sum1 = sumOfDigits(n);
    var sum2 = sumOfDigits(half);
    
    if(sum1==sum2)
        return true;
    else
        return false;
    
}

function sumOfDigits(x){
    var sum = 0;
    while(x>0){
        sum += x%10;
        x=x/10;
    }
    return Math.floor(sum);
}

// 12. Sort by Height

// Mano's solution

function sortByHeight(a) {
    let noTrees = []
    
    a.forEach((e) => {
        if(e != -1) {
            noTrees.push(e)
        }
    })
    
    noTrees.sort((a, b) => {return (a - b)})
    
    let counter = 0
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] != -1) {
            a[i] = noTrees[counter]
            counter++
        }
    }
    
    return a
}

// Divya's solution