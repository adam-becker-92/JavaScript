const task6 = () => {
    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            if (Math.random() < 0.1) {
                reject("Oops! Something unexpected happened.");
            }
            resolve(
                JSON.stringify({
                    body: { status: "ok", info: ["Sally", "Sarah", "Sam", "Stacey"] }
                })
            );
        }, 2000);
    });
};

// created this in-between function to mock fetch
// you could call the task6 function directly but added this to make it seem like an api call
const mockFetch = (func) => new Promise((resolve, reject) => {
    func()
        .then(resp => resolve(resp))
        .catch(err => reject(err))
})

const apiCall = async () => {
    try {
        const response = await mockFetch(task6);
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

apiCall();