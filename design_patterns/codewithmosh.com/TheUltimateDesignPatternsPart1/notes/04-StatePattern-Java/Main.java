import com.usmanakram.state.BrushTool;
import com.usmanakram.state.Canvas;
import com.usmanakram.state.EraserTool;
import com.usmanakram.state.SelectionTool;

public class Main {
    public static void main(String[] args) {
        var canvas = new Canvas();
        // canvas.setCurrentTool(new SelectionTool());
        // canvas.setCurrentTool(new BrushTool());
        canvas.setCurrentTool(new EraserTool());

        canvas.mouseDown();
        canvas.mouseUp();
    }
}