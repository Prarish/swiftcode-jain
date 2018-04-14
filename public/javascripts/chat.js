var app = angular.module('chatApp', ['ngMaterial']);
app.controller('chatController', function ($scope) {
    $scope.messages = [{

            'sender': 'User',
            'text': 'hello'
},
        {
            'sender': 'BOT',
            'text': 'hey! how r u?'
},
        {
            'sender': 'USER',
            'text': 'gud how r u?'
},
        {
            'sender': 'BOT',
            'text': 'fine'
}
];
});