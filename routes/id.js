
Router.route('/:_id', {
    name: 'viewGame',
    controller: 'GameController',
    action: 'view',
    where: 'client'
});


