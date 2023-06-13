import com.usmanakram.strategy.BlackAndWhiteFilter;
import com.usmanakram.strategy.ImageStorage;
import com.usmanakram.strategy.JpegCompressor;

public class Main {
    public static void main(String[] args) {
        var imageStorage = new ImageStorage(new JpegCompressor(), new BlackAndWhiteFilter());

        imageStorage.store("a");
    }
}