import {
  Component,
  Injector,
  computed,
  effect,
  signal,
  untracked,
} from '@angular/core';
import { articlesStore, posts$, store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * Step 2
   */
  // name = signal('Serge');

  // initializeLogging(): void {
  //   // Effects are useful for:
  //   // Logging data being displayed and when it changes, either for analytics or as a debugging tool.
  //   // Keeping data in sync with window.localStorage.
  //   // Adding custom DOM behavior that can't be expressed with template syntax.
  //   // Performing custom rendering to a <canvas>, charting library, or other third party UI library.
  //   effect(
  //     () => {
  //       console.log(`Contexte injecté: ${this.name()}`);
  //     },
  //     // !
  //     { injector: this.injector }
  //   );
  //   // Avoid using effects for propagation of state changes. This can result in ExpressionChangedAfterItHasBeenChecked errors, infinite circular updates, or unnecessary change detection cycles.
  //   // Because of these risks, Angular by default prevents you from setting signals in effects. It can be enabled if absolutely necessary by setting the allowSignalWrites flag when you create an effect.
  //   // Instead, use computed signals to model state that depends on other state.
  // }

  /**
   * Step 3
   */
  // newUsername = '';
  // currentUser = signal('Cédric');
  // counter = signal(1);

  // setUser(name: string): void {
  //   this.currentUser.set(name);
  //   this.counter.update((val) => ++val);
  // }

  /**
   * Step 4
   */
  // store = store;
  // posts$ = posts$;

  // addPost() {
  //   store.update((s) => ({
  //     posts: [...s.posts, { title: `Post ${s.posts.length + 1}` }],
  //   }));
  // }

  // addPostNgxs() {
  //   articlesStore.update((state) => ({
  //     ...state,
  //     posts: [...state.posts, { title: `Post ${state.posts.length + 1}` }],
  //   }));
  // }

  constructor(private injector: Injector) {
    /**
     * Step 1
     */
    const name = signal('Serge');

    console.log(name());

    name.set('Thierry');

    const doubleCount = computed(() => `${name()} Il est plutôt cool!`);

    // Effects always execute asynchronously, during the change detection process. So if multiple set occur between two change detection cycles, the effect will only run once.
    const loggingEffect = effect(() => {
      console.log(`Le nom : ${name()}`);
      console.log(`Le computed : ${doubleCount()}`);
    });

    name.update((val) => `${val} le Boss!`);

    loggingEffect.destroy();
    // But when you create an effect, it is automatically destroyed when its enclosing context is destroyed.

    /**
     * Step 2
     */
    // console.log(this.name());

    // name.set('Thierry');

    // const doubleCount = computed(() => `${this.name()} Il est plutôt cool!`);

    // this.initializeLogging();

    // this.name.update((val) => `${val} le Boss!`);
    // // Effects always execute asynchronously, during the change detection process.

    // this.name.set('Thierry');
    // this.name.update((val) => `${val} le Boss!`);

    /**
     * Step 3
     */
    // effect(() => {
    //   console.log(
    //     `User set to ${this.currentUser()} and the counter is ${untracked(
    //       this.counter
    //     )}`
    //   );
    // });
    // this.setUser('Bob');

    // effect((onCleanup) => {
    //   const user = this.currentUser();
    //   const timer = setTimeout(() => {
    //     console.log(`Il y a 1 seconde, l'utilisateur est devenu ${user}`);
    //   }, 1000);
    //   onCleanup(() => {
    //     clearTimeout(timer);
    //   });
    // });
  }
}
