'use strict';

// TODO: Write the homework code in this file
const { Command } = require('commander');
const program = new Command();
const list = require('./list');
const add = require('./add');
const reset = require('./reset');
const remove = require('./remove');

program
  .name('Todo')
  .description('To do app')
  .version('1.0');

program
  .command('list')
  .description('Listing to do app')
  .action(list);

program
  .command('add')
  .description('Adding to do app')
  .argument('<todo>', 'Task name')
  .action(add);

program
  .command('reset')
  .description('Reset to do app')
  .action(reset);

program
  .command('remove')
  .description('Remove to do app')
  .argument('<index>', 'To do index')
  .action(remove);

program.parse();
