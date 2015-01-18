function OrderLine () {
	var self=this;
	self.product=ko.observable({name:"Moto E",price:6000 });
	self.quantity=ko.observable(2);
	self.taxRate=ko.observable(1.25);

	self.subTotal=ko.computed(function() {
			console.log('EVALUATING SUBTOTAL');
			return  self.product() ?  self.product().price * self.quantity() : 0;
		},self);

	self.subTotalAfterTax=ko.computed(function () {
		console.log("EVALUATING SUBTOTAL AFTER TAX");
		return self.subTotal() * self.taxRate()
	},self);	
}