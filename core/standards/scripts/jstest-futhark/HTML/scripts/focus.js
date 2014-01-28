  var $$is_called = "call_unknown";
  
  function reg_call()
  {
    $$is_called = "call_on";
  }
  
  function unreg_call()
  {
    $$is_called = "call_off";
  }

  function forget_call()
  {
    $$is_called = "call_null";
  }

  function test_call()
  {
    return $$is_called ;
  }
  
