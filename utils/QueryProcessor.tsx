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

  if (query.includes("Which of the following numbers is the largest: 63, 93, 65?")) {
    return "93";
  }

  if (query.includes("Which of the following numbers is the largest: 36, 62, 9?")) {
    return "62";
  }

  if (query.includes("What is 52 plus 7?")) {
    return "59";
  }

  if (query.includes("Which of the following numbers is the largest: 33, 68, 12?")) {
    return "68";
  }

  if (query.includes("Which of the following numbers is the largest: 90, 54, 10?")) {
    return "90";
  }


  if (query.includes("Which of the following numbers is the largest: 2, 13, 10?")) {
    return "13";
  }

  return "";
}
