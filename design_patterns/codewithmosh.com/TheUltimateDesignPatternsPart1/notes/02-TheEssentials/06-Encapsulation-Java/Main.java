import com.usmanakram.Account;

public class Main {
    public static void main(String[] args) {
        //Account account = new Account();
        // OR
        var account = new Account();

        account.deposit(10);
        account.withdraw(5);
        
        System.out.println(account.getBalance());
    }
}