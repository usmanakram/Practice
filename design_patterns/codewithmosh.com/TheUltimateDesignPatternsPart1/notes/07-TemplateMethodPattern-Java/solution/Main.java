import com.usmanakram.template.GenerateReportTask;
import com.usmanakram.template.TransferMoneyTask;

public class Main {
    public static void main(String[] args) {
        var task = new TransferMoneyTask();
        //var task = new GenerateReportTask();
        task.execute();
    }
}