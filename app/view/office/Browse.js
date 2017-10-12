Ext.define('Coworkee.view.office.Browse', {
    extend: 'Coworkee.view.widgets.Browse',

    fields: {
        country: {
            property: 'country'
        }
    },

    controller: 'officebrowse',
    viewModel: {
        type: 'officebrowse'
    },

    cls: 'officebrowse',
    bind: {
        store: '{offices}'
    }
});
