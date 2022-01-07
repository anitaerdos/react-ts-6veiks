import React from 'react';
import { Section as TSection, Todo } from './todo.interfaces';
import Section from './Section';

interface Props {
  todos: Todo[];
}

/**
 * We have todos unorganised, you check them in the todo.data.ts
 * Group these todos by their section name
 */
const groupTodos = (todos: Todo[]): TSection[] => {
  return [];
};

export default ({ todos }: Props) => {
  const sections = groupTodos(todos);
  return (
    <React.Fragment>
      {sections.map((sectionData) => (
        <Section {...sectionData} />
      ))}
    </React.Fragment>
  );
};
