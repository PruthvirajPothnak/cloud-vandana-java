package myproject;

import java.util.Scanner;

public class pangram {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String input = sc.nextLine();

        if (isPangram(input)){
            System.out.println("This is a pangram.");
        } else {
            System.out.println("This is not a pangram.");
        }
    }

    private static boolean isPangram(String input){
        input = input.toLowerCase();

        boolean[] hasOccurred = new boolean[26];

        for (int i = 0; i < input.length(); i++){
            char currentChar = input.charAt(i);

            if (currentChar >= 'a' && currentChar <= 'z'){
                hasOccurred[currentChar - 'a'] = true;
            }
        }

        for (boolean occurred : hasOccurred){
            if (!occurred) {
                return false;
            }
        }

        return true;
	}

}
