Ext.define('Coworkee.view.person.Show', {
    extend: 'Coworkee.view.widgets.Show',
    xtype: 'personshow',

    controller: 'personshow',
    viewModel: {
        type: 'personshow'
    },

    title: 'Profile',

    items: {
        header: {
            xtype: 'personshowheader'
        },

        tools: {
            xtype: 'personshowtools',
            weight: -5
        },

        content: {
            items: {
                left: {
                    items: {
                        details: {
                            xtype: 'personshowdetails'
                        },

                        office: {
                            xtype: 'personshowoffice'
                        },

                        organization: {
                            xtype: 'personshoworg'
                        }
                    }
                }
            }
        }
    }
});
