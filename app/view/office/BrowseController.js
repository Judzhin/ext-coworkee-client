Ext.define('Coworkee.view.office.BrowseController', {
    extend: 'Coworkee.view.widgets.BrowseController',
    alias: 'controller.officebrowse',

    control: {
        '#': {
            reset: 'refresh'
        }
    },

    refresh: function() {
        var vm = this.getViewModel();
        vm.getStore('countries').reload();
    },

    onCreate: function() {
        this.redirectTo('office/create');
    }
});
