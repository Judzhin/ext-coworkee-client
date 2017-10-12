Ext.define('Coworkee.view.organization.WizardController', {
    extend: 'Coworkee.view.widgets.WizardController',
    alias: 'controller.organizationwizard',

    control: {
        '#': {
            reset: 'refresh'
        }
    },

    refresh: function() {
        this.getViewModel().getStore('managers').reload();
    }
});
