IndexController = RouteController.extend({
    layoutTemplate: 'MasterLayout',

    subscriptions: function() {
    },

    index: function() {
	this.render('Index');
    }
});
