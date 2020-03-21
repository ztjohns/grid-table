import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking'
export default class ApplicationController extends Controller {
  @tracked people = [{
      first: 'Zac', last: 'J', age: 30
  }, {
      first: 'Bob', last: 'F', age: 33
  }, {
      first: 'Foo', last: 'Bar', age: 22
  }]
}
