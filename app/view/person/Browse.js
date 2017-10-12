Ext.define('Coworkee.view.person.Browse', {
    extend: 'Coworkee.view.widgets.Browse',

    fields: {
        office: {
            property: 'office_id'
        },
        organization: {
            property: 'organization_id'
        }
    },

    controller: 'personbrowse',
    viewModel: {
        type: 'personbrowse'
    },

    cls: 'personbrowse',
    bind: {
        store: '{people}'
    }
});
