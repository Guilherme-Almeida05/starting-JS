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
const result = frameworks.filter(function(framework){
    return framework.constributors < 1000
})
console.log(result)