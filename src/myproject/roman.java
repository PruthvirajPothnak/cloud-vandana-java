package myproject;

import java.util.Scanner;

public class roman {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);

        System.out.print("Enter a Roman number: ");
        String romanNumeral = sc.nextLine().toUpperCase();

        int result = 0;
        int prevValue = 0;

        for (int i = romanNumeral.length() - 1; i >= 0; i--){
            char currentChar = romanNumeral.charAt(i);

            if (!isValidRomanNumeralCharacter(currentChar)){
                System.out.println("Invalid Roman numeral character: " + currentChar);
                return;
            }

            int currentValue = getValue(currentChar);

            if (currentValue < prevValue){
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        System.out.println("Equivalent integer: " + result);
    }

    private static int getValue(char romanChar) {
        switch (romanChar) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                throw new IllegalArgumentException("Invalid Roman numeral character: " + romanChar);
        }
    }

    private static boolean isValidRomanNumeralCharacter(char romanChar) {
        return "IVXLCDM".indexOf(romanChar) != -1;

	}

}
