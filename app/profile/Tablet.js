Ext.define('Coworkee.profile.Tablet', {
    extend: 'Ext.app.Profile',

    views: {
        historybrowse: 'Coworkee.view.tablet.history.Browse',
        historybrowsetoolbar: 'Coworkee.view.tablet.history.BrowseToolbar',
        main: 'Coworkee.view.tablet.main.Main',
        officebrowse: 'Coworkee.view.tablet.office.Browse',
        officebrowsetoolbar: 'Coworkee.view.tablet.office.BrowseToolbar',
        organizationbrowse: 'Coworkee.view.tablet.organization.Browse',
        organizationbrowsetoolbar: 'Coworkee.view.tablet.organization.BrowseToolbar',
        personbrowse: 'Coworkee.view.tablet.person.Browse',
        personbrowsetoolbar: 'Coworkee.view.tablet.person.BrowseToolbar'
    },

    isActive: function () {
        return !Ext.platformTags.phone;
    },

    launch: function () {
        // Add a class to the body el to identify the phone profile so we can
        // override CSS styles easily. The framework adds x-phone so we could
        // use it but this way the app controls a class that is always present
        // when this profile isActive, regardless of the actual device type.
        Ext.getBody().addCls('tablet-profile');
    }
});
