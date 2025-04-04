package algokelvin.app.lib.demo;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

abstract class BindingActivity<T> extends AppCompatActivity {
    protected T binding;

    abstract protected void binding();
    abstract protected void main();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding();
        main();
    }
}
