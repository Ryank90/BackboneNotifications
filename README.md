Backbone Notifications Manager
==============================

This module will handle all alerts and messages to be displayed in a backbone application with the bootstrap dependency.

Dependencies
====

Bootstrap

How to use
====

On its own:

    var successNotification = new NotificationModule({
        notifyType: 'success',
        message: 'This is a success'
    });
    
    var errorNotification = new NotificationModule({
        notifyType: 'error',
        message: 'This is an error'
    });

With the ViewManager Plugin to handle instances [ViewManager](https://github.com/Ryank90/backbone-view-manager)

    var successNotification = ViewManager.ViewCreate('successNotification', function () {
        return new NotificationModule({
            notifyType: 'success',
            message: 'This is a success'
        });
    });
    
    var errorNotification = ViewManager.ViewCreate('errorNotification', function () {
        return new NotificationModule({
            notifyType: 'error',
            message: 'This is an error'
        });
    });
    
**NotifyTypes include:**

* Success
* Error
* Warning
* Information

**Other options that can be passed:**

* automaticallyClose: boolean (true or false) - this will automatically close the notification
