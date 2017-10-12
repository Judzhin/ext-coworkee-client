Ext.define('Coworkee.store.Events', {
    extend: 'Ext.data.Store',
    alias: 'store.events',

    model: 'Coworkee.model.Event',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false
});
