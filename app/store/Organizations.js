Ext.define('Coworkee.store.Organizations', {
    extend: 'Ext.data.Store',
    alias: 'store.organizations',

    model: 'Coworkee.model.Organization',
    remoteFilter: true,
    remoteSort: true,
    sorters: 'name'
});
