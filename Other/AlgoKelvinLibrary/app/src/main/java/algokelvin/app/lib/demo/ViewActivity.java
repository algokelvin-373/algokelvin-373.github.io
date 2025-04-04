package algokelvin.app.lib.demo;

import algokelvin.app.lib.demo.databinding.ActivityViewBinding;

public class ViewActivity extends BindingActivity<ActivityViewBinding> {

    @Override
    protected void binding() {
        binding = ActivityViewBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
    }

    @Override
    protected void main() {
        binding.txtMsg.setText("View Binding");
    }
}