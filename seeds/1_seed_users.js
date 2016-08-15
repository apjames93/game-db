
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({userName: 'alex', password: '$2a$06$iOkwGg5B46oUpHSeNTVfguW6.6iiy96XT2Ch2S1dVmtW6Zxw8mXJW'}),
        knex('users').insert({userName: 'amanda', password: '$2a$06$iOkwGg5B46oUpHSeNTVfguW6.6iiy96XT2Ch2S1dVmtW6Zxw8mXJW'}),
        knex('users').insert({userName: 'zach', password: '$2a$06$iOkwGg5B46oUpHSeNTVfguW6.6iiy96XT2Ch2S1dVmtW6Zxw8mXJW'}),
        knex('users').insert({userName: 'pete', password: '$2a$06$iOkwGg5B46oUpHSeNTVfguW6.6iiy96XT2Ch2S1dVmtW6Zxw8mXJW'})
      ]);
    });
};
