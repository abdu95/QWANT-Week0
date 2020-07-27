function my_robot_simulator(param1){
    
    var robot = {
        xCoordinate: 0,
        yCoordinate: 0,
        directions: ["north", "west", "south", "east"],
        bearing: "north"
    }
    
    for (let index = 0; index < param1.length; index++) {
        if(param1[index].toUpperCase() == "R") {
            switch(robot.bearing){
                case "north":
                    robot.bearing = "east";
                    break;
                case "south":
                    robot.bearing = "west";
                    break;
                case "west":
                    robot.bearing = "north";
                    break;
                case "east":
                    robot.bearing = "south";
                    break;
                default:
                    robot.bearing = "unknown";
            }
        }
        else if(param1[index].toUpperCase() == "L") {
            switch(robot.bearing){
                case "north":
                    robot.bearing = "west";
                    break;
                case "south":
                    robot.bearing = "east";
                    break;
                case "west":
                    robot.bearing = "south";
                    break;
                case "east":
                    robot.bearing = "north";
                    break;
                default:
                    robot.bearing = "unknown";
            }
        }
        else if(param1[index].toUpperCase() == "A"){
            switch(robot.bearing){
                case "north":
                    robot.yCoordinate -= 1;
                    break;
                case "south":
                    robot.yCoordinate += 1;
                    break;
                case "west":
                    robot.xCoordinate -= 1;
                    break;
                case "east":
                    robot.xCoordinate += 1;
                    break;
                default:
                    robot.bearing = "unknown";
            }
        }
    }
    return `{x: ${robot.xCoordinate}, y: ${robot.yCoordinate}, bearing: '${robot.bearing}'}`; 
}
