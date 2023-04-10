import { hello as hello_my_shared } from 'my-shared/src'
export function hello() {
  console.log('Hello from my-task')
  hello_my_shared();
}
