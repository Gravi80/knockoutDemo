function friend(name) {
	return {
		name : ko.observable(name)
	}
}

function viewModel () {
	self=this
	self.firstName =  ko.observable("Ravi"),
	self.lastName =  ko.observable("Sharma")
	self.fullName=ko.computed(function() {
			return self.firstName() + " " + self.lastName();
		},viewModel);
	self.friends=ko.observableArray([new friend("Ram"),new friend("Mohan")])
}

ko.applyBindings(new viewModel());

// Calling the ko.applyBindings() method and passing in our view model tells Knockout 
// to bind the specified model to our UI. 
// You can even provide a DOM element if you only want to bind this view model to one 
// part of your overall UI. ko.applyBindings() takes two parameters.


// ko.applyBindings(viewModel, document.getElementById('container')) will restrict the 
// activation to the element with ID container and its descendants. 
// This is useful if you want to have multiple view models and associate each with a 
// different region of the page.


