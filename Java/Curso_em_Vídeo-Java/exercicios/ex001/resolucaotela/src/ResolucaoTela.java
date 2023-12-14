package resolucaotela.src;

import java.awt.Dimension;
import java.awt.Toolkit;

public class ResolucaoTela {
    public static void main(String[] args){
        Toolkit tk = Toolkit.getDefaultToolkit();
        Dimension resolucao = tk.getScreenSize();
        System.out.println("A resolução da tela é:" + resolucao.width + " x " + resolucao.height);
    }
}
