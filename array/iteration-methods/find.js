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
const result = frameworks.find(function(framework){
    return framework.name === "Angular.js"
})
console.log(result)