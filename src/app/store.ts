import { signal } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';

export const store = signal({
  posts: [{ title: 'Post 1' }, { title: 'Post 2' }],
});

interface ArticlesProps {
  posts: { title: string }[];
}

export const articlesStore = createStore(
  { name: 'articles' },
  withProps<ArticlesProps>({
    posts: [{ title: 'Post 1' }, { title: 'Post 2' }],
  })
);

export const posts$ = articlesStore.pipe(select((state) => state.posts));
