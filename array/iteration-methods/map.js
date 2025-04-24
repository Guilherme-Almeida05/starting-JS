const frameworks = [
    {
        name: "Angular.js",
        constributors: 1548
    },
    {
        name: "Ember.js",
        constributors: 746
    },
    {
        name: "Vue.js",
        constributors: 240
    }
]
const result = frameworks.reduce(function(total, framework){
    return total + framework.constributors
}, 0)
console.log(result)