const removeFromArray = (internalId, array) => {
  const i = array.findIndex(
    possibleElement => possibleElement.internalId === internalId,
  );

  if (i === -1) return array; // Element not found returning original array

  return [...array.slice(0, i), ...array.slice(i + 1)];
};

const updateArrayElement = (updatedElement, array) => {
  const index = array.findIndex(
    possibleElement => possibleElement.internalId === updatedElement.internalId,
  );

  if (index === -1) return array; // Element not found returning original array

  return [
    ...array.slice(0, index),
    { ...array[index], ...updatedElement },
    ...array.slice(index + 1),
  ];
};

export const ProjectsReducer = (state, { type, data }) => {
  switch (type) {
    case 'ADD_ELEMENT':
      return { data: [...state.data, { ...data }] };
    case 'REMOVE_ELEMENT':
      return { data: removeFromArray(data, state.data) };
    case 'UPDATE_ELEMENT':
      return { data: updateArrayElement(data, state.data) };
    case 'RESET_DATA':
      return { data };
    default:
      throw new Error();
  }
};
