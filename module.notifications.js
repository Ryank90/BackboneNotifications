
define([
	'backbone'
], function (
	Backbone
) {

	'use strict';

	var NotificationModule = Backbone.View.extend({

		// set tag name
		tagName: 'div',

		// class name to set
		className: 'alert',

		// target element
		targetEl: '#messages',

		// default messages
		defaultMessages: {
			'success': 'Success!',
			'error': 'Sorry! An error occured in the process',
			'warning': 'Warning',
			'information': 'An unknown event occured'
		},

		// default classes
		defaultClasses: {
			'success': 'alert-success',
			'error': 'alert-danger',
			'warning': 'alert-warning',
			'information': 'alert-info'
		},

		// to automatically close the message
		automaticallyClose: true,

		// set the events
		events: {
			'click .close': 'closeNotification'
		},

		initialize: function (options) {

			// default type set
			var notifyType = 'information';

			// default text set
			var message = this.defaultMessages[notifyType];

			// default target element
			var targetElement = this.targetEl;

			// check that the type has not been overridden
			if (options && options.hasOwnProperty('notifyType')) {
				notifyType = options.notifyType;
			}

			// check that the text has not been overridden
			if (options && options.hasOwnProperty('message')) {
				message = options.message;
			}

			// check that the target has not been overridden
			if (options && options.hasOwnProperty('targetElement')) {
				targetElement = options.targetElement;
			}

			// check if the message is already being shown on the view
			if ($('.alert:contains(' + message + ')').length === 0) {
				// render the notification
				this.render(notifyType, message, targetElement);
			}

		},

		closeNotification: function () {
			
			// store this
			var self = this;

			// fade out the message box
			this.$el.fadeOut(function () {
				// unbind all events to the view
				self.unbind();

				// remove the view from the DOM
				self.remove();
			});

		},

		render: function (notifyType, message, targetElement) {
			
			// store this
			var self = this;

			// add the correct class to the element
			this.$el.addClass(this.defaultClasses[notifyType]);

			// add the message text
			this.$el.text(message);

			// add button to message if not auto closing
			if (this.automaticallyClose === false) {
				//clickable item
				this.$el.addClass('alert-dismissable');
				// prepend the button
				this.$el.prepend('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>');
			}

			// append to the wrapper element
			this.$el.append(targetElement);

			// automatically remove the view
			if (this.automaticallyClose) {
				// set a timeout to remove it
				setTimeout(function () {
					self.closeNotification();
				}, 5000);
			}

			// return self for chaining
			return this;

		}

	});

	return NotificationModule;

});
