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

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calander = await addToCalander(meetingDetails);
        console.log(calander);
    } catch{
        console.log('Something wrong in here.');
    }
    
}

myMeeting();

console.log("Promise work asynchronous way.");