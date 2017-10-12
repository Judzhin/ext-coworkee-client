Ext.define('Coworkee.store.Actions', {
    extend: 'Ext.data.Store',
    alias: 'store.actions',

    model: 'Coworkee.model.Action',
    remoteFilter: true,
    remoteSort: true,

    sorters: {
        property: 'created',
        direction: 'DESC'
    }
});
