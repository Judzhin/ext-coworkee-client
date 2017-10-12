Ext.define('Coworkee.store.People', {
    extend: 'Ext.data.Store',
    alias: 'store.people',

    model: 'Coworkee.model.Person',
    remoteFilter: true,
    remoteSort: true,
    sorters: 'lastname'
});
