shared_examples_for 'an HTMLElement' do
  it { should exist }
end

shared_examples_for 'an empty element' do
  its(:value) { should == ('') }
end
