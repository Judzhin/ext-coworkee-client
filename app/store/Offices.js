Ext.define('Coworkee.store.Offices', {
    extend: 'Ext.data.Store',
    alias: 'store.offices',

    model: 'Coworkee.model.Office',
    remoteFilter: true,
    remoteSort: true,
    sorters: 'name'
});
