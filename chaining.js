myNamespace = {
    "action": function(name, arg) {return "This is invokeAction";},
    "listener": function(name) {
        switch (name) {
            case "volume_change_listener":
            return 1;

            case "display_change_listener":
            return 2;

            case "battery_change_listener":
            return 3;
        }
    },
};

const myActionList = [
    [{
        name: "volume_change_listener",
        type: "event"
    }, {
        name: "get_volume", 
        type: "action"
        arg: null
    }],
    [{
        name: "display_change_listener",
        type: "event"
    }],
    [{
        name: "set_volume",
        type: "action",
        arg: 1
    }, {
        name: "battery_change_listener",
        type: "event"
    }, {
        name: "show_display",
        type: "action"
        arg: "my message"
    }]
];

function doWork()
{
    var funcToRun;
    
    new Promise(function(resolve,reject) {
        var answer = prompt('Starting.  Please pick a letter: action, listener');
        if(myNamespace[answer] === undefined)
        {
            alert("Invalid choice!");
            reject("Invalid choice of: " + answer);
        }
        else
        {
            resolve(answer);
        }
    })
    .then(function(response) {
        funcToRun = myNamespace[response]();})
    .then(function(){
        console.log(funcToRun);
        //document.getElementById('result').innerHTML = funcToRun;
    })
    .then(function(){
        if(prompt("Run Again? (YES/NO)")==="YES")
        {
            doWork();
        }
    });
}

doWork();