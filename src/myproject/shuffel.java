package myproject;

public class shuffel {

	public static void main(String[] args) {

		int[] arr = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(arr);

        System.out.print("Shuffled array: ");
        printArray(arr);
    }
    // Fisher-Yates shuffle algorithm
    private static void shuffleArray(int[] arr) {
        int n = arr.length;
        for (int i = n - 1; i > 0; i--) {
            int randomIndex = (int) (Math.random() * (i + 1));
            int temp = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = temp;
        }
    }

    private static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();


	}

}
