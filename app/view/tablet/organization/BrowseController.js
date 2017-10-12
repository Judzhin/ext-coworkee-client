Ext.define('Coworkee.view.tablet.organization.BrowseController', {
    extend: 'Coworkee.view.organization.BrowseController',
    alias: 'controller.tablet-organizationbrowse',

    onCreate: function() {
        // The creation form can be accessed either by clicking the "create" button (dialog)
        // or via the #organization/create url (page) - default config matches the "page"
        // view. Note that this dialog will be destroyed on close.
        Ext.create({
            xtype: 'organizationcreate',
            record: Ext.create('Coworkee.model.Organization'),
            centered: true,
            floated: true,
            modal: true,
            ui: 'dialog',
            toolbar: {
                docked: 'bottom'
            }
        }).show();
    }
});
