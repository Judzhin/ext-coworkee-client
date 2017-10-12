Ext.define('Coworkee.model.Filter', {
    extend: 'Ext.data.Model',

    idProperty: 'value',

    fields: [
        { name: 'value', type: 'string' },
        { name: 'label', type: 'string' },
        { name: 'count', type: 'int' }
    ]
});
