const getStudents = (classObj) => {
    const { isAssistant, peopleList } = classObj;
    let teacher, assistant, students;
    if (isAssistant) {
        [teacher, assistant, ...students] = peopleList;
    }
    return students;
};

console.log(getStudents({isAssistant: true, peopleList: ['A', 'B', 'Frodo', 'Samwise', 'Mary', 'Pippin']}));
