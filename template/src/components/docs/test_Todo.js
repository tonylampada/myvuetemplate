import TestUtils from './test_utils.js'
import Todo from '../Todo.vue'

describe('Todo.vue', () => {
  it('Add item in list', () => {
    expect(!!Todo).equal(true);
    const todo = TestUtils.create_component(Todo);
    expect(todo.items.length).equal(0);
    todo.text = 'oi';
    todo.add();
    expect(todo.items.length).equal(1);
    expect(todo.text).equal('');
  })
})
