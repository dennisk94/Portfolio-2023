export const formatProjectName = ( name ) => {
    let capitalizeFirst = name.split('-').map(word => word[0].toUpperCase() + word.slice(1, word.length));
    let projectName = capitalizeFirst.join(' ');
    return projectName;
}