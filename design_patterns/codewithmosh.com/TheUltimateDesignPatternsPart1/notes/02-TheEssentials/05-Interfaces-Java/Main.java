import com.usmanakram.TaxCalculator;
import com.usmanakram.TaxCalculator2019;

public class Main {
    public static void main(String[] args) {
        TaxCalculator calculator = getCalculator();
        calculator.calculateTax();
    }

    public static TaxCalculator getCalculator() {
        return new TaxCalculator2019();
    }
}