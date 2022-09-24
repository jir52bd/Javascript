const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        }
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already scheduled."));
    }
});

const addToCalander = (meetingDetails) => {
    return new Promise((resolve, reject) => {
      const calander = `${meetingDetails.name} has been sheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
      resolve(calander)
    });
}
/*
another presentation 
const addToCalander = (meetingDetails) => {
    const calander = `${meetingDetails.name} has been sheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return new Promise.resolved(calander);
}
*/

meeting
      .then(addToCalander)
      .then((res) =>{
        //resolved data
        console.log(res);
      })
      .catch((err) => {
        //reject data
        console.log(err.message);
      })

console.log("Promise work asynchronous way.");