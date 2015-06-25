
Router.route('/game/:_id', {
    name: 'viewGame',
    controller: 'GamesController',
    action: 'view',
    where: 'client'
});

