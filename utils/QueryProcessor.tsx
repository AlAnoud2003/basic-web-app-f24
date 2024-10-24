export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "amkhulai" );
  }

  if (query.includes("What is your name?")) {
    return "amkhulai-313";
  }


  const additionMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    return (num1 + num2).toString();
  }

  const largestMatch = query.toLowerCase().match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/);
  if (largestMatch) {
    const num1 = parseInt(largestMatch[1], 10);
    const num2 = parseInt(largestMatch[2], 10);
    const num3 = parseInt(largestMatch[3], 10);
    const largest = Math.max(num1, num2, num3);
    return largest.toString();
  }

  const multiplicationMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)\?/);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    return (num1 * num2).toString();
  }

  const squareCubeMatch = query.toLowerCase().match(/which of the following numbers is both a square and a cube: ([\d, ]+)\?/);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const result = numbers.filter(num => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    });
    return result.join(', ');
  }

  const primeMatch = query.toLowerCase().match(/which of the following numbers are primes: ([\d, ]+)\?/);
  if (primeMatch) {
    const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const isPrime = (num: number) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const result = numbers.filter(isPrime);
    return result.join(', ');
  }


  if (query.includes("What is") && query.includes("plus") && query.includes("multiplied by")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 3) {
        const [num1, num2, num3] = numbers;
        return (num1 + (num2 * num3)).toString();
    }
  }

  if (query.includes("What is") && query.includes("to the power of")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
        const [base, exponent] = numbers;
        return Math.pow(base, exponent).toString();
    }
  }

  if (query.includes("Which of the following is an anagram of")) {
    const match = query.match(/an anagram of (\w+): (.+)\?/);
    if (match) {
        const targetWord = match[1];
        const words = match[2].split(', ').map(word => word.trim());

        const sortedTarget = targetWord.split('').sort().join('');
        for (const word of words) {
            if (word.split('').sort().join('') === sortedTarget) {
                return word;
            }
        }
    }
}




  return "";
}
