Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'index',
    controller: 'IndexController',
    action: 'action',
    where: 'client'
});

