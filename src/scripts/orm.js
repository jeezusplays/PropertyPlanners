class Agent {
    constructor (name, city, age ) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    toString() {
        return this.name + ', ' + this.city + ', ' + this.age;
    }
}

// Firestore data converter
const agentConverter = {
    toFirestore: (agent) => {
        return {
            name: agent.name,
            city: agent.city,
            age: agent.age
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Agent(data.name, data.city, data.age);
    }
};