package algokelvin.app.lib.demo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import algokelvin.app.lib.intro.Introduction;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Version: algokelvin-lib-demo-1.0.0

        //Call lib AlgoKelvin
        Introduction introduction = new Introduction(this);
        introduction.showMessage();

        // Set and Get Name using Lib AlgoKelvin
        introduction.setYourName("Kelvin HT");
        introduction.getYourName();

    }
}