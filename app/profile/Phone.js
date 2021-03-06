Ext.define('Coworkee.profile.Phone', {
    extend: 'Ext.app.Profile',

    views: {
        historybrowse: 'Coworkee.view.phone.history.Browse',
        main: 'Coworkee.view.phone.main.Main',
        officebrowse: 'Coworkee.view.phone.office.Browse',
        organizationbrowse: 'Coworkee.view.phone.organization.Browse',
        personbrowse: 'Coworkee.view.phone.person.Browse',
        personbrowsefilters: 'Coworkee.view.phone.person.BrowseFilters',
        personlistswiperitem: 'Coworkee.view.phone.person.ListSwiperItem'
    },

    isActive: function () {
        return Ext.platformTags.phone;
    },

    launch: function () {
        // Add a class to the body el to identify the phone profile so we can
        // override CSS styles easily. The framework adds x-phone so we could
        // use it but this way the app controls a class that is always present
        // when this profile isActive, regardless of the actual device type.
        Ext.getBody().addCls('phone-profile');
    }
});
