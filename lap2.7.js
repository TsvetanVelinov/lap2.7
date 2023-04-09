function projects (input){

    let architect = input[0];
    let projectsCount = input[1];
    let hoursPerProject = 3

    let needTime = projectsCount * hoursPerProject

console.log(`The architect ${architect} will need ${needTime} hours to complete ${projectsCount} project/s.`);
}

projects(["George", "4"])
