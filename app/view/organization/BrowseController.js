Ext.define('Coworkee.view.organization.BrowseController', {
    extend: 'Coworkee.view.widgets.BrowseController',
    alias: 'controller.organizationbrowse',

    control: {
        '#': {
            reset: 'refresh'
        }
    },

    refresh: function() {
        var vm = this.getViewModel();
        vm.getStore('managers').reload();
    },

    onCreate: function() {
        this.redirectTo('organization/create');
    }
});
