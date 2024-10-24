import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "amkhulai"
          ));
    });

    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("amkhulai-313");
    });

    test('should return my largest number', () => {
        const query = "Which of the following numbers is the largest: 63, 93, 65?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("93");
    });

    test('should return my largest number #2', () => {
        const query = "Which of the following numbers is the largest: 36, 62, 9?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("62");
    });

    test('should return my added value', () => {
        const query = "What is 52 plus 7?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("59");
    });    


    test('should return my largest number #3', () => {
        const query = "Which of the following numbers is the largest: 33, 68, 12?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("68");
    });


    test('should return my largest number #4', () => {
        const query = "Which of the following numbers is the largest: 90, 54, 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("90");
    });

    test('should return my largest number #5', () => {
        const query = "Which of the following numbers is the largest: 2, 13, 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("13");
    });


    test('should return my largest number #6', () => {
        const query = "Which of the following numbers is the largest: 56, 80, 40?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("80");
    });


    test('should return my largest number #7', () => {
        const query = "Which of the following numbers is the largest: 22, 71, 1?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("71");
    });

    test('should return my largest number #8', () => {
        const query = "Which of the following numbers is the largest: 96, 13, 60?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("96");
    });


    test('should return my added value #2', () => {
        const query = "What is 62 plus 98?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("160");
    });

    
    test('should return square value', () => {
        const query = "Which of the following numbers is both a square and a cube: 2968, 1686, 729, 2265, 3364, 1760, 1000?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("729"); // or "1000"
    });



    test('should return multipled', () => {
        const query = "What is 11 multiplied by 62?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("682");
    });




});
