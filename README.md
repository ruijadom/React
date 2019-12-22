# React

## **Lifecycle Methods** (Class components)

1. ### **Mounting**

   - _constructor_

     - A special function that will get called whenever a new component is created.
     - Inializing state
     - Binding the event handlers
     - Do not cause side effects
     - supper(props)

   - _static getDerivedStateFromProps_
     - When the state of the component depends on changes in props over time
     - Set the state
     - Do not cause side effects
   - _render_
     - Only required method
     - Read props & state and return JSX
     - Do not change state or interact with DOM or make ajax calls
     - Children components lifecycle methods are also executed.
   - _componentDidMount_
     - Invoked after a component and all its children components have been rendered to the DOM
     - Cause side effect. Ex: Interacto with the DOM or make any ajax calls to load data

2. ### **Updating**

- _static getDerivedStateFromProps_
- _shouldComponentUpdate_
- _render_
- _getSnapshotBeforeUpdate_
- _componentDidUpdate_

3. ### **Unmounting**

- _componentWillUnmount_

4. ### **Error Handling**

- _static getDerivedStateFromError_
- _componentDidCatch_

## Pure Component vs Regular Component

### Regular Component

A regular component does not implement the _shouldComponentUpdate_ method. It always returns true by default.

### Pure Component

A pure component implements _shouldComponentUpdate_ with a shallow props and state comparison.

### Render props

The term "render prop" refers to a technique for _sharing code_ between components using a _prop whose value is a function_.

### Context

Context provides a way to pass data throught the component tree without having to pass props down manually at every level.
