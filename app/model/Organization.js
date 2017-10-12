Ext.define('Coworkee.model.Organization', {
    extend: 'Coworkee.model.Base',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'manager_id', reference: 'Person' },
        { name: 'headcount', type: 'int', persist: false }
    ],

    proxy: {
        api: {
            prefix: 'Server.organizations'
        }
    }
});
