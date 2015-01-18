//A cart has lines
// A line contain info , which product a person is buying and how much quantity

function OrderLine () {
	var self=this;
	self.product=ko.observable();
	self.quantity=ko.observable(1);

	self.subTotal=ko.computed(function() {
			console.log('EVALUATING SUBTOTAL');
			return  self.product() ?  self.product().price * self.quantity() : 0;
		},self);
}

// instead of having single order line i want to have a series of orderLine

function AppViewModel () {
	var self=this;
	self.lines=[new OrderLine(),new OrderLine(),new OrderLine()];

}

//need to tell KO to display a user interface based on this data

//when the applications starts up i want to bind a user interface 
// to an instance of AppViewModel
$(function() {
	ko.applyBindings(new AppViewModel());
})

// ko.applyBindings is an alternative to traditional template ingine

