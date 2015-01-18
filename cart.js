// to Register Custom Binding, create an object on KO bindingHandlers
ko.bindingHandlers.currencyText={
	//whenever the associated model value is updated i want this function to be called
	update: function(element,valueAccessor) {
		var amount=valueAccessor();
		var formattedAmount=amount !==null ? '$' + amount.toFixed(2) : '';
		$(element).text(formattedAmount);
	}
}

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
	self.lines=ko.observableArray([new OrderLine()]);

	// i want to link it to a button in UI
	self.addLine=function() {
		self.lines.push(new OrderLine());
	};

	self.removeLine=function(line) {
		console.log(line);
		self.lines.remove(line);
	};

	self.grandTotal=ko.computed(function() {
		console.log('EVALUATING GRAND TOTAL');
		var total=0;
		ko.utils.arrayForEach(self.lines, function (line) {
            total +=line.subTotal();
        });
		return total;
	},self);
}

//need to tell KO to display a user interface based on this data

//when the applications starts up i want to bind a user interface 
// to an instance of AppViewModel
$(function() {
	ko.applyBindings(new AppViewModel());
})

// ko.applyBindings is an alternative to traditional template ingine

